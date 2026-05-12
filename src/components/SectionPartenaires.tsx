'use client'

import React from 'react'
import { useIsMobile } from '@/src/hooks/useIsMobile'

const partenaires = [
  {
    nom: 'Union Européenne',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png',
    categorie: 'Coopération internationale',
  },
  {
    nom: 'PNUD Bénin',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UNDP_logo.svg/320px-UNDP_logo.svg.png',
    categorie: 'Nations Unies',
  },
  {
    nom: 'Banque Mondiale',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_World_Bank_logo.svg/320px-The_World_Bank_logo.svg.png',
    categorie: 'Financement',
  },
  {
    nom: 'AFD',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/20/Logo-AFD-2017.svg/320px-Logo-AFD-2017.svg.png',
    categorie: 'Coopération française',
  },
  {
    nom: 'GIZ',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_%28GIZ%29_GmbH_logo.svg/320px-Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_%28GIZ%29_GmbH_logo.svg.png',
    categorie: 'Coopération allemande',
  },
  {
    nom: 'UNICEF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_UNICEF.svg/320px-Logo_of_UNICEF.svg.png',
    categorie: 'Nations Unies',
  },
  {
    nom: 'Plan International',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Plan_International_logo.svg/320px-Plan_International_logo.svg.png',
    categorie: 'ONG internationale',
  },
  {
    nom: 'ANCB',
    logo: '',
    initiales: 'ANCB',
    categorie: 'Communes du Bénin',
  },
]

function PartenaireCard({ p }: { p: typeof partenaires[0] }) {
  const [hovered, setHovered] = React.useState(false)
  const [imgError, setImgError] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        padding: '28px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(10,61,46,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{
        width: '80px', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {p.logo && !imgError ? (
          <img
            src={p.logo}
            alt={p.nom}
            onError={() => setImgError(true)}
            style={{
              maxWidth: '100%', maxHeight: '100%',
              objectFit: 'contain',
              filter: hovered ? 'none' : 'grayscale(30%)',
              transition: 'filter 0.3s ease',
            }}
          />
        ) : (
          <div style={{
            width: '64px', height: '48px',
            backgroundColor: hovered ? '#0A3D2E' : '#F8F6F1',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '800',
            color: hovered ? '#C9A84C' : '#0A3D2E',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px',
          }}>
            {p.initiales || p.nom.slice(0, 4).toUpperCase()}
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
          color: '#1C1C1C', marginBottom: '4px', lineHeight: '1.3',
        }}>
          {p.nom}
        </div>
        <div style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '11px',
          color: '#9A9A9A',
        }}>
          {p.categorie}
        </div>
      </div>
    </div>
  )
}

export default function SectionPartenaires() {
  const isMobile = useIsMobile()

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px', borderTop: '1px solid #E8E4DC' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Titre */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Partenaires
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0', lineHeight: '1.2' }}>
              Nos partenaires
            </h2>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', maxWidth: '600px', margin: 0 }}>
              La Commune d&apos;Adja-Ouèrè œuvre en partenariat avec des organisations nationales et internationales pour le développement durable du territoire.
            </p>
          </div>
        </div>

        {/* Grille */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {partenaires.map(p => (
            <PartenaireCard key={p.nom} p={p} />
          ))}
        </div>

        {/* Bas de section */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '16px 28px', backgroundColor: 'rgba(10,61,46,0.05)', borderRadius: '40px', border: '1px solid rgba(10,61,46,0.12)' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', fontWeight: '500' }}>
              Vous souhaitez devenir partenaire de la commune ?
            </span>
            <a href="/contact" style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
              color: '#0A3D2E', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              Contactez-nous →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
