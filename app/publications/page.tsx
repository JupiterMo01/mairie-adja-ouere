'use client'

import React from 'react'
import Link from 'next/link'

const categories = [
  {
    icon: '📰',
    titre: 'Actualités',
    description: 'Suivez toute l\'actualité de la Commune d\'Adja-Ouèrè : décisions du conseil municipal, travaux en cours, événements institutionnels et informations officielles.',
    href: '/publications/actualites',
    badge: 'Mis à jour régulièrement',
    color: '#0A3D2E',
    tags: ['Conseil municipal', 'Travaux', 'Annonces'],
  },
  {
    icon: '📊',
    titre: 'Reddition de compte',
    description: 'Consultez les rapports de reddition de compte de la Commune. Conformément à la loi, le Maire rend compte de la gestion des ressources publiques devant le conseil communal et la population.',
    href: '/publications/reddition-de-compte',
    badge: 'Transparence & gouvernance',
    color: '#156840',
    tags: ['Rapport annuel', 'Budget', 'Transparence'],
  },
  {
    icon: '🏗️',
    titre: 'Projets',
    description: 'Découvrez les projets de développement portés par la mairie : infrastructures, programmes sociaux, aménagements territoriaux et initiatives communautaires.',
    href: '/publications/projets',
    badge: 'En cours & planifiés',
    color: '#156840',
    tags: ['Infrastructure', 'Social', 'Aménagement'],
  },
  {
    icon: '📅',
    titre: 'Événements',
    description: 'Agenda des événements à venir sur le territoire communal : fêtes locales, cérémonies officielles, réunions publiques, activités culturelles et sportives.',
    href: '/publications/evenements',
    badge: 'Agenda communal',
    color: '#0A3D2E',
    tags: ['Culture', 'Sport', 'Cérémonies'],
  },
  {
    icon: '📄',
    titre: 'Documents officiels',
    description: 'Accédez aux documents officiels de la commune : délibérations, arrêtés municipaux, rapports d\'activité, plans de développement et formulaires administratifs.',
    href: '/publications/documents',
    badge: 'Accès libre',
    color: '#156840',
    tags: ['Délibérations', 'Arrêtés', 'Rapports'],
  },
  {
    icon: '📸',
    titre: 'Galerie photos',
    description: 'Revivez les moments forts de la commune en images : cérémonies, inaugurations, événements citoyens, paysages et patrimoine d\'Adja-Ouèrè.',
    href: '/publications/photos',
    badge: 'Albums photos',
    color: '#0A3D2E',
    tags: ['Cérémonies', 'Patrimoine', 'Vie locale'],
  },
  {
    icon: '🎥',
    titre: 'Vidéos',
    description: 'Regardez les reportages, discours officiels, présentations de projets et couvertures d\'événements sur le territoire de la commune en vidéo.',
    href: '/publications/videos',
    badge: 'Chaîne officielle',
    color: '#156840',
    tags: ['Reportages', 'Discours', 'Événements'],
  },
  {
    icon: '📋',
    titre: "Bulletins d'information",
    description: 'Consultez et téléchargez les bulletins municipaux périodiques : synthèses des activités de la mairie, informations pratiques pour les citoyens et bilan des actions.',
    href: '/publications/bulletins',
    badge: 'Téléchargement PDF',
    color: '#0A3D2E',
    tags: ['Mensuel', 'Trimestriel', 'Bilan'],
  },
]

function CategorieCard({ cat }: { cat: typeof categories[0] }) {
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
        {/* Header coloré */}
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
              Consulter
              <span style={{ transition: 'transform 0.2s ease', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PublicationsPage() {
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
              Publications
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Publications de la commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Actualités, projets, événements, documents officiels, galerie photos, vidéos et bulletins — toute l&apos;information de la Commune d&apos;Adja-Ouèrè en un seul endroit.
          </p>
        </div>
      </section>

      {/* Grille rubriques */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Rubriques</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Explorer nos publications
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '28px' }}>
            {/* 2 premières en pleine largeur sur desktop en version 3 colonnes si on veut,
                ici on fait 2 colonnes uniformes pour rester cohérent avec les autres pages */}
            {categories.map(cat => (
              <CategorieCard key={cat.href} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Accès rapide */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Accès rapide</span>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '700', color: '#0A3D2E', margin: 0 }}>
              Vous cherchez autre chose ?
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {[
              { label: '🏛 À propos de la commune', href: '/presentation/commune' },
              { label: '💼 Marchés publics', href: '/opportunites/marches' },
              { label: '🌱 Participation citoyenne', href: '/e-services/participation-citoyenne' },
              { label: '📞 Nous contacter', href: '/contact' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '12px 22px', borderRadius: '8px',
                  backgroundColor: '#F8F6F1', color: '#0A3D2E',
                  fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600',
                  border: '1px solid #E8E4DC', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
