'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function SeDesabonner() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const token = searchParams.get('token') || ''

  const [status, setStatus] = React.useState<'loading' | 'success' | 'error'>('loading')

  React.useEffect(() => {
    if (!email || !token) {
      setStatus('error')
      return
    }

    const url = `/api/newsletter?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`

    fetch(url, { method: 'DELETE' })
      .then(async (res) => {
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [email, token])

  return (
    <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ maxWidth: '560px', width: '100%' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E8E4DC', padding: '48px 40px', textAlign: 'center', boxShadow: '0 4px 24px rgba(10,61,46,0.06)' }}>

          {status === 'loading' && (
            <>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(10,61,46,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>
                ⏳
              </div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>
                Traitement en cours...
              </h1>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: 0 }}>
                Veuillez patienter quelques instants.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>
                ✅
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#C9A84C' }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Newsletter</span>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#C9A84C' }} />
              </div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0', lineHeight: '1.2' }}>
                Vous avez ete desabonne avec succes
              </h1>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#4A4A4A', margin: '0 0 32px 0' }}>
                L'adresse <strong style={{ color: '#0A3D2E' }}>{email}</strong> a bien ete retiree de notre liste de diffusion. Vous ne recevrez plus nos emails.
              </p>
              <a href="/" style={{ textDecoration: 'none' }}>
                <button
                  style={{ padding: '14px 32px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', borderRadius: '10px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E' }}
                >
                  Retour a l'accueil
                </button>
              </a>
            </>
          )}

          {status === 'error' && (
            <>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#FFF5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>
                ⚠️
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#C9A84C' }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Erreur</span>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#C9A84C' }} />
              </div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0', lineHeight: '1.2' }}>
                Lien invalide ou expire
              </h1>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#4A4A4A', margin: '0 0 24px 0' }}>
                Ce lien de desabonnement n'est pas valide ou a deja ete utilise. Si vous souhaitez vous desabonner, contactez-nous directement.
              </p>
              <div style={{ padding: '16px 20px', backgroundColor: 'rgba(10,61,46,0.05)', borderRadius: '10px', border: '1px solid rgba(10,61,46,0.12)', marginBottom: '28px' }}>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', margin: 0, fontWeight: '600' }}>
                  Contact : mairie@adja-ouere.bj
                </p>
              </div>
              <a href="/" style={{ textDecoration: 'none' }}>
                <button
                  style={{ padding: '14px 32px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', borderRadius: '10px', border: '2px solid #0A3D2E', cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
                >
                  Retour a l'accueil
                </button>
              </a>
            </>
          )}

        </div>

        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '20px' }}>
          Commune d'Adja-Ouere — Departement du Plateau, Benin
        </p>
      </div>
    </main>
  )
}
