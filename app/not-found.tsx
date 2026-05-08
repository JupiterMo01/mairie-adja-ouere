import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Page introuvable — Commune d'Adja-Ouèrè",
}

export default function NotFound() {
  return (
    <main
      style={{
        backgroundColor: '#F8F6F1',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(80px, 15vw, 140px)',
          fontWeight: '700',
          color: '#0A3D2E',
          lineHeight: '1',
          marginBottom: '8px',
          opacity: 0.12,
          userSelect: 'none',
        }}>
          404
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Page introuvable
          </span>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
        </div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: '700',
          color: '#0A3D2E',
          margin: '0 0 16px 0',
          lineHeight: '1.2',
        }}>
          Cette page n&apos;existe pas
        </h1>
        <p style={{
          fontFamily: 'Source Sans 3, sans-serif',
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#6A6A6A',
          margin: '0 0 40px 0',
          maxWidth: '440px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          La page que vous recherchez a peut-être été déplacée ou n&apos;existe pas.
          Revenez à l&apos;accueil pour continuer votre navigation.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: '#0A3D2E',
              color: '#FFFFFF',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
            }}>
              ← Retour à l&apos;accueil
            </button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: '#0A3D2E',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              border: '2px solid #0A3D2E',
              cursor: 'pointer',
            }}>
              Nous contacter
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
