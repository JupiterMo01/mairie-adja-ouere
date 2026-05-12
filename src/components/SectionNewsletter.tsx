'use client'

import React from 'react'
import Link from 'next/link'
import { useIsMobile } from '@/src/hooks/useIsMobile'

export default function SectionNewsletter() {
  const [email, setEmail] = React.useState('')
  const [nom, setNom] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [btnHovered, setBtnHovered] = React.useState(false)
  const isMobile = useIsMobile()

  const isValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && nom.trim().length > 0

  const handleSubmit = async () => {
    if (!isValid || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom: nom.trim(), email: email.trim().toLowerCase() }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    padding: '13px 18px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '14px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    width: '100%',
    color: '#FFFFFF',
  }

  return (
    <section style={{
      backgroundColor: '#0A3D2E',
      padding: isMobile ? '60px 24px' : '80px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.15)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.15)', fontSize: '28px', marginBottom: '24px' }}>
          📩
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.2' }}>
          Restez informé
        </h2>

        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: '0 0 40px 0' }}>
          Abonnez-vous à notre newsletter pour recevoir les dernières actualités, événements et annonces de la Commune d&apos;Adja-Ouèrè directement dans votre boîte mail.
        </p>

        {submitted ? (
          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '40px 24px', border: '1px solid rgba(201,168,76,0.3)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 12px 0' }}>
              Merci {nom} !
            </h3>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: '0 0 16px 0', lineHeight: '1.6' }}>
              Vous êtes maintenant abonné à la newsletter de la Commune d&apos;Adja-Ouèrè. Vérifiez votre boîte mail pour l&apos;email de confirmation.
            </p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              Vous pourrez vous désabonner à tout moment —{' '}
              <Link href="/se-desabonner" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Se désabonner</Link>
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              <input
                type="text"
                value={nom}
                onChange={e => { setNom(e.target.value); setError('') }}
                placeholder="Votre nom"
                style={inputStyle}
              />
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                placeholder="Votre adresse email"
                style={inputStyle}
                onKeyDown={e => { if (e.key === 'Enter') handleSubmit() }}
              />
            </div>

            {error && (
              <div style={{ padding: '10px 14px', backgroundColor: 'rgba(255,80,80,0.15)', borderRadius: '8px', border: '1px solid rgba(255,80,80,0.3)', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#FF8080' }}>
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              disabled={!isValid || loading}
              style={{
                width: '100%', padding: '14px 24px',
                backgroundColor: !isValid || loading ? 'rgba(255,255,255,0.1)' : btnHovered ? '#B8973B' : '#C9A84C',
                color: !isValid || loading ? 'rgba(255,255,255,0.4)' : '#0A3D2E',
                fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700',
                borderRadius: '8px', border: 'none',
                cursor: !isValid || loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease', letterSpacing: '0.5px',
              }}
            >
              {loading ? '⏳ Envoi en cours...' : isValid ? "S'abonner à la newsletter →" : 'Remplissez tous les champs'}
            </button>

            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              Pas de spam.{' '}
              <Link href="/se-desabonner" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Se désabonner</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
