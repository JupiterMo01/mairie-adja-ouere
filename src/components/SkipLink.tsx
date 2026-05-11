'use client'

export default function SkipLink() {
  return (
    <a
      href="#contenu-principal"
      style={{
        position: 'absolute',
        top: '-48px',
        left: '16px',
        zIndex: 99999,
        padding: '12px 20px',
        backgroundColor: '#C9A84C',
        color: '#0A3D2E',
        fontFamily: 'Outfit, sans-serif',
        fontSize: '14px',
        fontWeight: '700',
        borderRadius: '0 0 8px 8px',
        textDecoration: 'none',
        transition: 'top 0.2s ease',
      }}
      onFocus={e => { e.currentTarget.style.top = '0' }}
      onBlur={e => { e.currentTarget.style.top = '-48px' }}
    >
      Passer au contenu principal
    </a>
  )
}
