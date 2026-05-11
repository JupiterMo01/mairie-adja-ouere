'use client'

import React from 'react'

const liens = [
  {
    id: 1,
    titre: "Gouvernement du Benin",
    url: "https://www.gouv.bj",
    logo: "🏛️",
  },
  {
    id: 2,
    titre: "Ministere de la Decentralisation",
    url: "https://www.mdglaat.bj",
    logo: "🏢",
  },
  {
    id: 3,
    titre: "ANDF — Foncier",
    url: "https://www.andf.bj",
    logo: "📋",
  },
  {
    id: 4,
    titre: "SCRP — Marches Publics",
    url: "https://www.scrp.bj",
    logo: "📑",
  },
  {
    id: 5,
    titre: "INSAE — Statistiques",
    url: "https://www.insae.bj",
    logo: "📊",
  },
  {
    id: 6,
    titre: "Mairie de Porto-Novo",
    url: "https://www.mairie-portonovo.bj",
    logo: "🌍",
  },
]

interface Lien {
  id: number
  titre: string
  url: string
  logo: string
}

function LienCard({ lien }: { lien: Lien }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(lien.url, '_blank')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        backgroundColor: hovered ? '#0A3D2E' : '#FFFFFF',
        borderRadius: '12px',
        padding: '18px 20px',
        border: hovered ? '1px solid #0A3D2E' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 24px rgba(10,61,46,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
    >
      {/* Logo */}
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        backgroundColor: hovered ? 'rgba(255,255,255,0.1)' : '#F8F6F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        flexShrink: 0,
        transition: 'all 0.25s ease',
      }}>
        {lien.logo}
      </div>

      {/* Titre */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: hovered ? '#FFFFFF' : '#1C1C1C',
          lineHeight: '1.3',
          transition: 'color 0.25s ease',
        }}>
          {lien.titre}
        </div>
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '11px',
          color: hovered ? 'rgba(255,255,255,0.5)' : '#9A9A9A',
          marginTop: '2px',
          transition: 'color 0.25s ease',
        }}>
          {lien.url.replace('https://', '')}
        </div>
      </div>

      {/* Fleche */}
      <div style={{
        color: hovered ? '#C9A84C' : '#C8C8C8',
        fontSize: '16px',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}>
        →
      </div>
    </div>
  )
}

export default function SectionLiensUtiles() {
  return (
    <section id="liens-utiles" style={{ backgroundColor: '#F8F6F1', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* En-tete */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px',
          }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: '#C9A84C',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Ressources
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 3vw, 48px)',
            fontWeight: '700',
            color: '#0A3D2E',
            margin: 0,
            lineHeight: '1.2',
          }}>
            Liens utiles
          </h2>
        </div>

        {/* Grille liens */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {liens.map((lien) => (
            <LienCard key={lien.id} lien={lien} />
          ))}
        </div>
      </div>
    </section>
  )
}