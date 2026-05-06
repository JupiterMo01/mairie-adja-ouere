'use client'

import React from 'react'

declare global {
  interface Window {
    FedaPay: {
      init: (options: Record<string, unknown>) => { open: () => void }
    }
  }
}

const MONTANTS_PREDEFINIS = [1000, 2500, 5000, 10000, 25000]
const MONTANT_MIN = 500

export default function DonPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [fedapayReady, setFedapayReady] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [montantSelectionne, setMontantSelectionne] = React.useState<number | null>(5000)
  const [autresMontant, setAutresMontant] = React.useState('')
  const [nom, setNom] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [telephone, setTelephone] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [anonyme, setAnonyme] = React.useState(false)
  const [montantDonne, setMontantDonne] = React.useState(0)
  const [paymentError, setPaymentError] = React.useState('')
  const [errors, setErrors] = React.useState<{ montant?: string; email?: string }>({})

  const montantEffectif = autresMontant ? Number(autresMontant) : (montantSelectionne ?? 0)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  React.useEffect(() => {
    if (document.getElementById('fedapay-script')) {
      setFedapayReady(true)
      return
    }
    const s = document.createElement('script')
    s.id = 'fedapay-script'
    s.src = 'https://cdn.fedapay.com/checkout.js'
    s.async = true
    s.onload = () => setFedapayReady(true)
    document.body.appendChild(s)
  }, [])

  const handleMontantPredefini = (val: number) => {
    setMontantSelectionne(val)
    setAutresMontant('')
    setErrors(prev => ({ ...prev, montant: undefined }))
    setPaymentError('')
  }

  const handleAutresMontant = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutresMontant(e.target.value)
    setMontantSelectionne(null)
    setErrors(prev => ({ ...prev, montant: undefined }))
    setPaymentError('')
  }

  const validate = (): boolean => {
    const e: { montant?: string; email?: string } = {}
    if (!montantEffectif || montantEffectif <= 0) {
      e.montant = 'Veuillez choisir ou saisir un montant'
    } else if (montantEffectif < MONTANT_MIN) {
      e.montant = `Le montant minimum est de ${MONTANT_MIN.toLocaleString('fr-FR')} FCFA`
    }
    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      e.email = 'Adresse email invalide'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setPaymentError('')
    if (!validate()) return

    if (!fedapayReady) {
      setPaymentError('Le module de paiement est en cours de chargement. Patientez quelques secondes.')
      return
    }

    const montant = Math.round(montantEffectif)
    const description = `Don - Commune Adja-Ouere - ${montant.toLocaleString('fr-FR')} FCFA`
    const donateur = anonyme ? 'Donateur anonyme' : (nom.trim() || 'Donateur')

    window.FedaPay.init({
      public_key: process.env.NEXT_PUBLIC_FEDAPAY_PUBLIC_KEY,
      environment: 'sandbox',
      transaction: {
        amount: montant,
        description,
      },
      customer: {
        email: email || undefined,
        firstname: anonyme ? 'Anonyme' : donateur.split(' ')[0] || donateur,
        lastname: anonyme ? '' : donateur.split(' ').slice(1).join(' ') || '',
        phone_number: telephone ? { number: telephone.replace(/[\s\-().+]/g, ''), country: 'BJ' } : undefined,
      },
      onComplete(obj: { reason: string; transaction?: { status: string } }) {
        if (obj.reason === 'DIALOG DISMISSED') return
        if (obj.transaction?.status === 'approved') {
          setMontantDonne(montant)
          setSubmitted(true)
        } else {
          setPaymentError('Le paiement a echoue ou a ete annule. Veuillez reessayer.')
        }
      },
    }).open()
  }

  const inputStyle = (hasError?: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '11px 14px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '14px',
    border: `1px solid ${hasError ? '#D32F2F' : '#E8E4DC'}`,
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    color: '#1C1C1C',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '12px',
    fontWeight: '600',
    color: '#4A4A4A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  }

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E8E4DC',
    padding: isMobile ? '24px' : '36px',
    marginBottom: '24px',
  }

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '580px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px' }}>
            💛
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Don recu</span>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            Merci pour votre generosité !
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#4A4A4A', margin: '0 0 28px 0' }}>
            Votre don de <strong style={{ color: '#0A3D2E' }}>{montantDonne.toLocaleString('fr-FR')} FCFA</strong> contribuera au developpement de la commune et a l'amelioration des services pour nos citoyens. Votre geste fait une vraie difference.
          </p>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E8E4DC', padding: '20px 28px', marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Montant du don</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '700', color: '#0A3D2E' }}>
                {montantDonne.toLocaleString('fr-FR')} FCFA
              </div>
            </div>
            <div style={{ padding: '8px 16px', backgroundColor: 'rgba(201,168,76,0.12)', borderRadius: '20px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: '#8A6A20' }}>
                Approuve via FedaPay
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSubmitted(false); setMontantDonne(0); setAutresMontant(''); setMontantSelectionne(5000) }}
              style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E' }}
            >
              Faire un autre don
            </button>
            <a href="/" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: '1px solid #0A3D2E', cursor: 'pointer' }}>
                Retour a l'accueil
              </button>
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '80px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.06)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Faire un don</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            Soutenez votre commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '600px' }}>
            Contribuez au developpement de la Commune d'Adja-Ouere. Chaque don, petit ou grand, aide a financer des projets pour nos citoyens.
          </p>
        </div>
      </section>

      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>

            <div style={cardStyle}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 6px 0' }}>
                Choisissez un montant
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 24px 0' }}>
                Montant minimum : {MONTANT_MIN.toLocaleString('fr-FR')} FCFA
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: '12px', marginBottom: '20px' }}>
                {MONTANTS_PREDEFINIS.map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleMontantPredefini(val)}
                    style={{
                      padding: '16px 8px',
                      borderRadius: '10px',
                      border: `2px solid ${montantSelectionne === val && !autresMontant ? '#C9A84C' : '#E8E4DC'}`,
                      backgroundColor: montantSelectionne === val && !autresMontant ? 'rgba(201,168,76,0.10)' : '#FAFAF8',
                      cursor: 'pointer',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: montantSelectionne === val && !autresMontant ? '#0A3D2E' : '#4A4A4A',
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                    }}
                    onMouseEnter={e => { if (montantSelectionne !== val || autresMontant) e.currentTarget.style.borderColor = '#C9A84C' }}
                    onMouseLeave={e => { if (montantSelectionne !== val || autresMontant) e.currentTarget.style.borderColor = '#E8E4DC' }}
                  >
                    <div>{val.toLocaleString('fr-FR')}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', marginTop: '2px' }}>FCFA</div>
                  </button>
                ))}
              </div>

              <div>
                <label style={labelStyle}>Autre montant (FCFA)</label>
                <input
                  type="number"
                  value={autresMontant}
                  onChange={handleAutresMontant}
                  placeholder={`ex: 15 000 (min. ${MONTANT_MIN.toLocaleString('fr-FR')} FCFA)`}
                  min={MONTANT_MIN}
                  style={inputStyle(!!errors.montant)}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                  onBlur={e => { e.currentTarget.style.borderColor = errors.montant ? '#D32F2F' : '#E8E4DC' }}
                />
                {errors.montant && (
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.montant}</div>
                )}
              </div>
            </div>

            <div style={cardStyle}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 6px 0' }}>
                Vos informations <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '400', color: '#9A9A9A' }}>(optionnel)</span>
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 24px 0' }}>
                L'email est requis uniquement si vous souhaitez recevoir un recu de don.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Nom complet</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    placeholder="Votre nom"
                    disabled={anonyme}
                    style={{ ...inputStyle(), opacity: anonyme ? 0.5 : 1 }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })) }}
                    placeholder="email@exemple.com"
                    style={inputStyle(!!errors.email)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.email ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.email && (
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.email}</div>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Telephone</label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)}
                    placeholder="+229 XX XX XX XX"
                    style={inputStyle()}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>Message / objet du don</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Ex: Pour la construction de l'ecole primaire d'Ikpinle... (optionnel)"
                  rows={3}
                  style={{ ...inputStyle(), resize: 'vertical' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
                <input
                  type="checkbox"
                  checked={anonyme}
                  onChange={e => setAnonyme(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#0A3D2E', cursor: 'pointer' }}
                />
                <div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#0A3D2E' }}>Je souhaite rester anonyme</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', display: 'block' }}>Votre nom ne sera pas associe a ce don</span>
                </div>
              </label>
            </div>

            {montantEffectif >= MONTANT_MIN && (
              <div style={{ backgroundColor: 'rgba(201,168,76,0.08)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.25)', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#8A6A20', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Votre don</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E' }}>
                    {montantEffectif.toLocaleString('fr-FR')} FCFA
                  </div>
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A', textAlign: 'right' }}>
                  Paiement securise<br />via FedaPay
                </div>
              </div>
            )}

            {paymentError && (
              <div style={{ padding: '14px 18px', backgroundColor: '#FFF5F5', border: '1px solid #FFCDD2', borderRadius: '10px', marginBottom: '16px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C62828', fontWeight: '600' }}>
                {paymentError}
              </div>
            )}

            <button
              type="submit"
              disabled={!fedapayReady}
              style={{
                width: '100%',
                padding: '18px',
                backgroundColor: !fedapayReady ? '#9A9A9A' : '#C9A84C',
                color: !fedapayReady ? '#FFFFFF' : '#0A3D2E',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '10px',
                border: 'none',
                cursor: !fedapayReady ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { if (fedapayReady) { e.currentTarget.style.backgroundColor = '#B8943C'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
              onMouseLeave={e => { if (fedapayReady) { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.transform = 'none' } }}
            >
              {!fedapayReady
                ? 'Chargement du module de paiement...'
                : montantEffectif >= MONTANT_MIN
                  ? `Faire un don de ${montantEffectif.toLocaleString('fr-FR')} FCFA`
                  : 'Choisissez un montant pour continuer'
              }
            </button>

            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '12px' }}>
              Paiement securise via FedaPay — Mobile Money (MTN, Moov) ou carte bancaire
            </p>

          </form>
        </div>
      </section>

    </main>
  )
}
