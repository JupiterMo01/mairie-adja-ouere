'use client'

import React from 'react'
import Link from 'next/link'

const rubriques = [
  {
    icon: '🏙️',
    titre: 'La commune',
    description: 'Histoire, géographie, données démographiques et présentation générale de la Commune d\'Adja-Ouèrè. Découvrez son territoire, sa population et ses arrondissements.',
    href: '/presentation/commune',
    badge: 'Histoire & Géographie',
    color: '#0A3D2E',
    tags: ['Histoire', 'Démographie', 'Territoire'],
  },
  {
    icon: '🏛️',
    titre: 'Instances et Services',
    description: 'Organigramme de la mairie, conseil communal, directions techniques et administratives, chefs d\'arrondissement et de villages. Toute l\'organisation de la commune.',
    href: '/presentation/instances',
    badge: 'Gouvernance',
    color: '#156840',
    tags: ['Conseil communal', 'Directions', 'Élus'],
  },
  {
    icon: '🗺️',
    titre: 'Arrondissements',
    description: 'Présentation détaillée des six arrondissements de la commune : Adja-Ouère, Ikpinle, Kpoulou, Massè, Oko-Akare et Tatonnonkon, avec leurs villages et données locales.',
    href: '/presentation/arrondissements',
    badge: '6 arrondissements',
    color: '#0A3D2E',
    tags: ['Villages', 'Population', 'Localités'],
  },
  {
    icon: '🌿',
    titre: 'Sites touristiques',
    description: 'Forêts sacrées, collines panoramiques, villages traditionnels, mare aux hippopotames, marchés d\'artisans... Explorez les richesses naturelles et culturelles d\'Adja-Ouèrè.',
    href: '/presentation/sites-touristiques',
    badge: 'Tourisme & Patrimoine',
    color: '#156840',
    tags: ['Nature', 'Culture', 'Patrimoine'],
  },
  {
    icon: '🛒',
    titre: 'Nos marchés',
    description: 'Découvrez les marchés locaux de la commune : leurs jours de tenue, leurs spécialités, leur localisation et les produits que vous y trouverez dans chaque arrondissement.',
    href: '/presentation/marches',
    badge: 'Commerce local',
    color: '#0A3D2E',
    tags: ['Commerce', 'Artisanat', 'Produits locaux'],
  },
  {
    icon: '🚌',
    titre: 'Gares routières',
    description: 'Informations sur les gares routières de la commune : horaires, destinations desservies, types de véhicules disponibles et infrastructures dans chaque arrondissement.',
    href: '/presentation/gares',
    badge: 'Transport',
    color: '#156840',
    tags: ['Horaires', 'Destinations', 'Transport'],
  },
]

function RubriqueCard({ cat }: { cat: typeof rubriques[0] }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <Link href={cat.href} style={{ textDecoration: 'none', display: 'flex' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
          boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          backgroundColor: hovered ? cat.color : '#F8F6F1',
          padding: '28px 28px 24px',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
            backgroundColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(10,61,46,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px',
          }}>
            {cat.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700',
              color: hovered ? '#FFFFFF' : '#0A3D2E',
              margin: '0 0 6px 0', lineHeight: '1.2',
              transition: 'color 0.3s ease',
            }}>
              {cat.titre}
            </h3>
            <span style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: '20px',
              backgroundColor: hovered ? 'rgba(201,168,76,0.2)' : 'rgba(10,61,46,0.08)',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '11px', fontWeight: '600',
              color: hovered ? '#C9A84C' : '#6A6A6A',
              transition: 'all 0.3s ease',
            }}>
              {cat.badge}
            </span>
          </div>
        </div>

        {/* Corps */}
        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.7',
            color: '#6A6A6A', margin: '0 0 20px 0', flex: 1,
          }}>
            {cat.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cat.tags.map(tag => (
                <span key={tag} style={{
                  backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
                  borderRadius: '6px', padding: '3px 9px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#4A4A4A',
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: hovered ? '#C9A84C' : '#0A3D2E',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
            }}>
              Découvrir
              <span style={{ transition: 'transform 0.2s ease', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PresentationPage() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '5%', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Présentation
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Découvrez la Commune d&apos;Adja-Ouèrè
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Histoire, organisation, territoire, tourisme, marchés et transport — tout ce qu&apos;il faut savoir sur la Commune d&apos;Adja-Ouèrè au cœur du Bénin.
          </p>
        </div>
      </section>

      {/* Grille rubriques */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Rubriques
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Explorez toutes les sections
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}>
            {rubriques.map(cat => (
              <RubriqueCard key={cat.href} cat={cat} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
