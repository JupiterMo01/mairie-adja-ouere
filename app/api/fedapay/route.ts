import { NextRequest, NextResponse } from 'next/server'

const FEDAPAY_BASE = 'https://sandbox-api.fedapay.com/v1'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const secretKey = process.env.FEDAPAY_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ error: 'Configuration manquante' }, { status: 500 })
    }

    // Forcer l'amount en entier positif
    const amount = Math.round(Number(body.amount))
    const nom = String(body.nom || '').trim()
    const prenom = String(body.prenom || '').trim()
    const email = String(body.email || '').trim()
    const telephone = String(body.telephone || '').trim()
    // Caractères ASCII uniquement pour la description (FedaPay rejette certains unicodes)
    const description = String(body.description || '')
      .replace(/[^\x00-\x7F]/g, (c) => {
        const map: Record<string, string> = {
          '—': '-', '–': '-', '×': 'x', '÷': '/',
          'é': 'e', 'è': 'e', 'ê': 'e', 'à': 'a', 'â': 'a',
          'ô': 'o', 'î': 'i', 'ù': 'u', 'û': 'u', 'ç': 'c',
          'É': 'E', 'È': 'E', 'Ê': 'E', 'À': 'A',
        }
        return map[c] ?? ''
      })
      .trim()

    if (amount <= 0 || isNaN(amount)) {
      return NextResponse.json({ error: 'Montant invalide' }, { status: 400 })
    }
    if (!description) {
      return NextResponse.json({ error: 'Description manquante' }, { status: 400 })
    }

    const payload = {
      description,
      amount,
      currency: { iso: 'XOF' },
      customer: {
        firstname: prenom,
        lastname: nom,
        email,
        phone_number: { number: telephone, country: 'BJ' },
      },
    }

    console.log('[FedaPay] Payload envoyé:', JSON.stringify(payload))

    // 1. Créer la transaction
    const txRes = await fetch(`${FEDAPAY_BASE}/transactions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const txData = await txRes.json()

    if (!txRes.ok) {
      console.error('[FedaPay] Erreur création transaction:', JSON.stringify(txData))
      const message = txData?.message || txData?.error || 'Erreur FedaPay'
      return NextResponse.json({ error: message }, { status: 502 })
    }

    console.log('[FedaPay] Transaction créée:', JSON.stringify(txData))

    const transactionId = txData['v1/transaction']?.id
    if (!transactionId) {
      console.error('[FedaPay] ID manquant dans la réponse:', JSON.stringify(txData))
      return NextResponse.json({ error: 'ID de transaction introuvable' }, { status: 502 })
    }

    // 2. Générer le token de paiement
    const tokenRes = await fetch(`${FEDAPAY_BASE}/transactions/${transactionId}/token`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
    })

    const tokenData = await tokenRes.json()

    if (!tokenRes.ok) {
      console.error('[FedaPay] Erreur token:', JSON.stringify(tokenData))
      return NextResponse.json({ error: 'Erreur lors de la génération du token' }, { status: 502 })
    }

    const token = tokenData.token
    if (!token) {
      console.error('[FedaPay] Token absent:', JSON.stringify(tokenData))
      return NextResponse.json({ error: 'Token introuvable dans la réponse' }, { status: 502 })
    }

    return NextResponse.json({ token, transactionId })
  } catch (error) {
    console.error('[FedaPay] Erreur inattendue:', error)
    return NextResponse.json({ error: 'Erreur serveur inattendue' }, { status: 500 })
  }
}
