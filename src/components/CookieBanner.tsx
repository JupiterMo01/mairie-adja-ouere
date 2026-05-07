'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  if (!visible) return null

  const accept = () => { localStorage.setItem('cookie_consent', 'accepted'); setVisible(false) }
  const refuse = () => { localStorage.setItem('cookie_consent', 'refused'); setVisible(false) }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      backgroundColor: '#071F17',
      borderTop: '2px solid rgba(201,168,76,0.4)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
      boxShadow: '0 -8px 32px rgba(0,0,0,0.3)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '260px' }}>
        <span style={{ fontSize: '20px', flexShrink: 0 }}>🍪</span>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.85)',
          margin: 0,
          lineHeight: '1.6',
        }}>
          Ce site utilise des cookies pour améliorer votre expérience de navigation.{' '}
          <Link href="/politique-cookies" style={{ color: '#C9A84C', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            En savoir plus
          </Link>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={refuse}
          style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
            color: 'rgba(255,255,255,0.7)', backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px',
            padding: '9px 18px', cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
        >
          Refuser
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
            color: '#0A3D2E', backgroundColor: '#C9A84C',
            border: 'none', borderRadius: '6px',
            padding: '9px 20px', cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B8973B' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C' }}
        >
          Accepter
        </button>
      </div>
    </div>
  )
}