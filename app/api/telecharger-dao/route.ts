import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { entreprise, marche } = body

    // Validation des champs obligatoires
    const required = ['nom', 'prenom', 'nomEntreprise', 'ifu', 'rccm', 'siege', 'email']
    for (const field of required) {
      if (!entreprise[field]?.trim()) {
        return NextResponse.json({ error: `Le champ ${field} est requis` }, { status: 400 })
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const dateRetrait = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    // Email à l'entreprise
    await transporter.sendMail({
      from: `"Mairie d'Adja-Ouèrè" <${process.env.SMTP_USER}>`,
      to: entreprise.email,
      subject: `DAO – ${marche.reference} – ${marche.titre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A3D2E; padding: 28px 32px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px 0;">Mairie d'Adja-Ouèrè</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 0;">Commune d'Adja-Ouèrè – Département du Plateau, Bénin</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Bonjour <strong>${entreprise.prenom} ${entreprise.nom}</strong>,<br><br>
              Votre demande de retrait du Dossier d'Appel d'Offres a bien été enregistrée. Vous trouverez ci-dessous les informations relatives au marché.
            </p>
            <div style="background-color: #f8f6f1; border-radius: 8px; padding: 20px; margin-bottom: 24px; border-left: 4px solid #C9A84C;">
              <p style="font-size: 11px; font-weight: 700; color: #9A9A9A; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Marché concerné</p>
              <p style="font-size: 16px; font-weight: 700; color: #0A3D2E; margin: 0 0 6px 0;">${marche.titre}</p>
              <p style="font-size: 13px; color: #4A4A4A; margin: 0;">Réf : ${marche.reference}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #e8e4dc;">
                <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #9A9A9A; text-transform: uppercase; width: 40%;">Autorité contractante</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1C1C1C;">${marche.autorite}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e4dc;">
                <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #9A9A9A; text-transform: uppercase;">Date limite de dépôt</td>
                <td style="padding: 10px 0; font-size: 14px; color: #C9A84C; font-weight: 700;">${new Date(marche.date_limite).toLocaleDateString('fr-FR')}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e8e4dc;">
                <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #9A9A9A; text-transform: uppercase;">Lieu d'acquisition</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1C1C1C;">${marche.lieu_dossier}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #9A9A9A; text-transform: uppercase;">Date de retrait</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1C1C1C;">${dateRetrait}</td>
              </tr>
            </table>
            ${marche.dossier_url ? `
            <div style="text-align: center; margin-bottom: 28px;">
              <a href="${marche.dossier_url}" style="display: inline-block; background-color: #0A3D2E; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 700;">
                ⬇ Télécharger le DAO (PDF)
              </a>
            </div>` : `
            <div style="background-color: #e8f5e9; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
              <p style="font-size: 14px; color: #2E7D32; margin: 0;">
                📞 Le dossier physique est disponible au retrait : <strong>${marche.lieu_dossier}</strong><br>
                Présentez cet email pour faciliter le retrait.
              </p>
            </div>`}
            <p style="font-size: 13px; color: #9A9A9A; margin: 0; border-top: 1px solid #e8e4dc; padding-top: 20px;">
              Cet email a été envoyé automatiquement par le système de gestion des marchés publics de la Commune d'Adja-Ouèrè.<br>
              Pour toute question, contactez le Service des Marchés Publics : <strong>${process.env.MAIRIE_EMAIL || 'marches@mairie-adja-ouere.bj'}</strong>
            </p>
          </div>
        </div>
      `,
    })

    // Email de notification à la mairie
    await transporter.sendMail({
      from: `"Site Mairie – DAO" <${process.env.SMTP_USER}>`,
      to: process.env.MAIRIE_EMAIL || 'marches@mairie-adja-ouere.bj',
      subject: `[RETRAIT DAO] ${marche.reference} – ${entreprise.nomEntreprise}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A3D2E; padding: 20px 28px;">
            <h2 style="color: #C9A84C; font-size: 16px; margin: 0 0 4px 0; font-weight: 700;">NOUVEAU RETRAIT DE DOSSIER</h2>
            <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 0;">Notification automatique — ${dateRetrait}</p>
          </div>
          <div style="padding: 28px;">
            <div style="background-color: #f8f6f1; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px; border-left: 4px solid #0A3D2E;">
              <p style="font-size: 13px; font-weight: 700; color: #9A9A9A; text-transform: uppercase; margin: 0 0 6px 0;">Marché</p>
              <p style="font-size: 15px; font-weight: 700; color: #0A3D2E; margin: 0 0 4px 0;">${marche.titre}</p>
              <p style="font-size: 13px; color: #4A4A4A; margin: 0;">Réf : ${marche.reference} | Budget estimé : ${marche.budget ? marche.budget + ' FCFA' : 'N/A'}</p>
            </div>
            <h3 style="font-size: 14px; font-weight: 700; color: #0A3D2E; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">
              Informations de l'entreprise
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Nom & Prénom', `${entreprise.prenom} ${entreprise.nom}`],
                ['Entreprise', entreprise.nomEntreprise],
                ['IFU', entreprise.ifu],
                ['RCCM', entreprise.rccm],
                ['Siège social', entreprise.siege],
                ['Contact', entreprise.contact || '—'],
                ['Email', entreprise.email],
              ].map(([label, value]) => `
                <tr style="border-bottom: 1px solid #e8e4dc;">
                  <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #9A9A9A; text-transform: uppercase; width: 35%;">${label}</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #1C1C1C; font-weight: ${label === 'Entreprise' ? '700' : '400'};">${value}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        </div>
      `,
    })

    // Enregistrement dans Strapi (log du retrait)
    try {
      const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
      await fetch(`${strapiUrl}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            nom: entreprise.nom,
            prenom: entreprise.prenom,
            email: entreprise.email,
            telephone: entreprise.contact,
            sujet: `Retrait DAO – ${marche.reference}`,
            message: `Entreprise: ${entreprise.nomEntreprise} | IFU: ${entreprise.ifu} | RCCM: ${entreprise.rccm} | Siège: ${entreprise.siege} | Marché: ${marche.titre}`,
          },
        }),
      })
    } catch {
      // Strapi non disponible — email déjà envoyé, on continue
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Erreur envoi email DAO:', err)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi. Réessayez ou contactez la mairie.' }, { status: 500 })
  }
}
