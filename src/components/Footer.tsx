'use client'

import Link from 'next/link'
import React from 'react'

interface Social {
  title: string
  url: string
  svg: React.ReactNode
}

function SocialBtn({ social }: { social: Social }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      title={social.title}
      onClick={() => window.open(social.url, '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        backgroundColor: hovered ? '#C9A84C' : 'rgba(255,255,255,0.08)',
        border: hovered ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hovered ? '#071F17' : 'rgba(255,255,255,0.7)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {social.svg}
    </div>
  )
}

export default function Footer() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const annee = new Date().getFullYear()

  const linkStyle = {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    display: 'block',
    marginBottom: '10px',
  }

  const navigation = [
    { label: 'Accueil', href: '/' },
    { label: 'La commune', href: '/presentation/commune' },
    { label: 'Instances et Services', href: '/presentation/instances' },
    { label: 'Arrondissements', href: '/presentation/arrondissements' },
    { label: 'Les sites touristiques', href: '/presentation/sites-touristiques'},
    { label: 'Nos marchés', href: '/presentation/marches' },
    { label: 'Nos gares routières', href: '/presentation/gares' },
    { label: 'Foire aux questions', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const publications = [
    { label: 'Actualités', href: '/publications/actualites' },
    { label: 'Reddition de compte', href: '/publications/reddition-de-compte' },
    { label: 'Projets', href: '/publications/projets' },
    { label: 'Evenements', href: '/publications/evenements' },
    { label: 'Documents', href: '/publications/documents' },
    { label: 'Galerie photos', href: '/publications/photos' },
    { label: 'Videos', href: '/publications/videos' },
    { label: 'Bulletins d\'information', href: '/publications/bulletins' },
  ]

  const opportunites = [
    { label: 'Marches publics', href: '/opportunites/marches' },
    { label: 'Recrutements', href: '/opportunites/recrutements' },
    { label: 'Demande de stage', href: '/e-services/demande-stage' },
    { label: 'Autorisation manifestation', href: '/e-services/demande-manifestion' },
    { label: 'Denonciation', href: '/e-services/denonciation' },
    { label: 'Participation citoyenne', href: '/e-services/participation-citoyenne' },
  ]

  const mentions = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Politique des cookies', href: '/politique-cookies' },
  ]

  const sociaux: Social[] = [
    {
      title: 'Facebook',
      url: '#',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      title: 'YouTube',
      url: '#',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon fill="#071F17" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      ),
    },
    {
      title: 'LinkedIn',
      url: '#',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      title: 'TikTok',
      url: '#',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      ),
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/22901XXXXXXXX',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.116a.75.75 0 0 0 .916.916l5.259-1.476A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.717 9.717 0 0 1-4.951-1.355l-.355-.211-3.683 1.033 1.033-3.683-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
      ),
    },
    {
      title: 'Gmail',
      url: 'mailto:contact@mairie-adja-ouere.bj',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
    {
      title: 'Telephone',
      url: 'tel:+22901XXXXXXXX',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer style={{
      backgroundColor: '#071F17',
      padding: isMobile ? '60px 24px 24px' : '80px 40px 32px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Grille principale */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? '40px' : '60px',
          marginBottom: '60px',
        }}>

          {/* Colonne 1 — Logo + description + réseaux */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <img
                src="/logo.jpeg"
                alt="Commune d'Adja-Ouère"
                style={{ width: '52px', height: '52px', objectFit: 'contain', flexShrink: 0 }}
              />
              <div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                }}>
                  Commune d'Adja-Ouere
                </div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  color: '#C9A84C',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}>
                  Departement du Plateau — Benin
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '14px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 24px 0',
              maxWidth: '320px',
            }}>
              La Commune d'Adja-Ouere s'engage pour le developpement local, la bonne gouvernance et l'amelioration du cadre de vie de ses populations.
            </p>

            {/* Réseaux sociaux */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {sociaux.map((social) => (
                <SocialBtn key={social.title} social={social} />
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              color: '#C9A84C',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Navigation
            </div>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Colonne 3 — Publications */}
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              color: '#C9A84C',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Publications
            </div>
            {publications.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Colonne 4 — Opportunites */}
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              color: '#C9A84C',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Opportunites
            </div>
            {opportunites.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          marginBottom: '28px',
        }} />

        {/* Bas du footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
          }}>
            © {annee} Commune d'Adja-Ouere. Tous droits reserves.
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {mentions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}