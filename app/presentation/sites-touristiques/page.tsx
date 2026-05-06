'use client'

import React from 'react'
import Link from 'next/link'

const sites = [
  {
    id: 1,
    nom: "Forêt Sacrée de Adja-Ouere",
    categorie: "Nature & Spiritualité",
    description: "Au cœur de la commune, cette forêt millénaire est le lieu de culte vodoun le plus vénéré de la région. Ses arbres centenaires abritent des autels ancestraux et des cérémonies rituelles qui perpétuent les traditions Fon depuis des siècles.",
    details: "Visites guidées disponibles avec un guide local certifié. Les cérémonies rituelles ont lieu chaque mois de janvier et juillet.",
    superficie: "12 hectares",
    acces: "Centre-ville d'Adja-Ouere",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    couleur: "#2D6A4F",
  },
  {
    id: 2,
    nom: "Collines de Kpoulou",
    categorie: "Randonnée & Panorama",
    description: "Dominant toute la commune à 380 mètres d'altitude, les collines de Kpoulou offrent un panorama exceptionnel sur les plaines du sud-Bénin. Un sentier balisé de 8 km traverse une végétation luxuriante peuplée d'oiseaux tropicaux rares.",
    details: "Départ recommandé à l'aube. Prévoir 4h de marche aller-retour. Guide disponible sur place.",
    superficie: "Vue à 360°",
    acces: "Arrondissement de Kpoulou, 15 km du centre",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    couleur: "#40916C",
  },
  {
    id: 3,
    nom: "Village Traditionnel de Tatonnonkon",
    categorie: "Culture & Patrimoine",
    description: "Classé site de patrimoine local, ce village conserve intacte son architecture traditionnelle en terre battue. Les cases rondes aux toits de chaume témoignent d'un savoir-faire architectural transmis depuis le XVIIe siècle.",
    details: "Visites organisées les samedis et dimanches. Possibilité de nuitée chez l'habitant sur réservation.",
    superficie: "Village de 847 habitants",
    acces: "Arrondissement de Tatonnonkon, 22 km du centre",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&q=80",
    couleur: "#C9A84C",
  },
  {
    id: 4,
    nom: "Mare aux Hippopotames d'Ikpinle",
    categorie: "Faune & Nature",
    description: "L'un des rares sites du département où l'on peut observer des hippopotames en liberté dans leur habitat naturel. La mare, alimentée par une source permanente, accueille également une colonie de pélicans et de grues couronnées.",
    details: "Observation optimale à l'aube et au coucher du soleil. Pirogue disponible pour approche discrète.",
    superficie: "Mare de 4 hectares",
    acces: "Arrondissement d'Ikpinle, 8 km du centre",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    couleur: "#1B6CA8",
  },
  {
    id: 5,
    nom: "Marché des Artisans de Massè",
    categorie: "Artisanat & Commerce",
    description: "Chaque vendredi, ce marché centenaire rassemble les meilleurs artisans de la région : tisserands, potières, sculpteurs sur bois et orfèvres. Un lieu vivant où la tradition artisanale béninoise s'expose dans toute sa richesse.",
    details: "Marché hebdomadaire le vendredi de 7h à 18h. Festival annuel de l'artisanat en novembre.",
    superficie: "Place du marché de Massè",
    acces: "Arrondissement de Massè, 12 km du centre",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    couleur: "#E76F51",
  },
  {
    id: 6,
    nom: "Temple des Ancêtres d'Oko-Akare",
    categorie: "Histoire & Spiritualité",
    description: "Édifié au XVIIIe siècle, ce temple vodoun est dédié aux ancêtres fondateurs de la commune. Ses fresques murales peintes à l'ocre rouge et au kaolin blanc racontent l'épopée des premiers habitants de la région.",
    details: "Ouvert aux visites du lundi au samedi, 9h-17h. Tenue correcte exigée. Guide obligatoire.",
    superficie: "Complexe de 3 bâtiments",
    acces: "Centre d'Oko-Akare, 18 km du centre",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=1200&q=80",
    couleur: "#9B2335",
  },
]

const categorieIcons: { [key: string]: string } = {
  "Nature & Spiritualité": "🌿",
  "Randonnée & Panorama": "⛰️",
  "Culture & Patrimoine": "🏛️",
  "Faune & Nature": "🦛",
  "Artisanat & Commerce": "🪴",
  "Histoire & Spiritualité": "🏺",
}

function SiteCard({ site, index }: { site: typeof sites[0], index: number }) {
  const [hovered, setHovered] = React.useState(false)
  const isReverse = index % 2 !== 0

  return (
    <div
      id={`site-${site.id}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '0',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 24px 60px rgba(10,61,46,0.15)' : '0 4px 20px rgba(0,0,0,0.06)',
        border: `1px solid ${hovered ? site.couleur + '40' : '#E8E4DC'}`,
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        height: '380px',
        overflow: 'hidden',
        order: isReverse ? 1 : 0,
      }}>
        <img
          src={site.image}
          alt={site.nom}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${site.couleur}60 0%, transparent 60%)`,
        }} />
        {/* Numéro */}
        <div style={{
          position: 'absolute', top: '20px', left: '20px',
          width: '48px', height: '48px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Cormorant Garamond, serif', fontSize: '20px',
          fontWeight: '700', color: site.couleur,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Catégorie */}
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '6px 14px', borderRadius: '20px',
          fontFamily: 'Outfit, sans-serif', fontSize: '12px',
          fontWeight: '600', color: site.couleur,
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span>{categorieIcons[site.categorie]}</span>
          {site.categorie}
        </div>
      </div>

      {/* Contenu */}
      <div style={{
        padding: '40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        order: isReverse ? 0 : 1,
      }}>
        {/* Barre couleur */}
        <div style={{
          width: '48px', height: '3px',
          backgroundColor: site.couleur,
          borderRadius: '2px', marginBottom: '20px',
          transition: 'width 0.3s ease',
          ...(hovered ? { width: '80px' } : {}),
        }} />

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          fontWeight: '700', color: '#0A3D2E',
          margin: '0 0 16px 0', lineHeight: '1.2',
        }}>
          {site.nom}
        </h2>

        <p style={{
          fontFamily: 'Source Sans 3, sans-serif',
          fontSize: '15px', lineHeight: '1.8',
          color: '#5A5A5A', margin: '0 0 24px 0',
        }}>
          {site.description}
        </p>

        {/* Infos pratiques */}
        <div style={{
          backgroundColor: '#F8F6F1',
          borderRadius: '12px', padding: '16px 20px',
          marginBottom: '24px',
        }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Infos pratiques
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '10px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
              <span style={{ color: site.couleur, fontWeight: '600', minWidth: '16px' }}>📍</span>
              {site.acces}
            </div>
            <div style={{ display: 'flex', gap: '10px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
              <span style={{ color: site.couleur, fontWeight: '600', minWidth: '16px' }}>📐</span>
              {site.superficie}
            </div>
            <div style={{ display: 'flex', gap: '10px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
              <span style={{ color: site.couleur, fontWeight: '600', minWidth: '16px' }}>ℹ️</span>
              {site.details}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SitesTouristiquesPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('Tous')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const categories = ['Tous', ...Array.from(new Set(sites.map(s => s.categorie)))]
  const sitesFiltres = activeFilter === 'Tous' ? sites : sites.filter(s => s.categorie === activeFilter)

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'relative', height: isMobile ? '400px' : '580px',
        }}>
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80"
            alt="Sites touristiques"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,61,46,0.5) 0%, rgba(10,61,46,0.85) 100%)',
          }} />

          {/* Contenu hero */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: isMobile ? '40px 24px' : '60px 80px',
            maxWidth: '1400px', margin: '0 auto', left: 0, right: 0,
          }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Découverte
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: isMobile ? '40px' : 'clamp(48px, 6vw, 80px)',
              fontWeight: '700', color: '#FFFFFF',
              margin: '0 0 20px 0', lineHeight: '1.05',
              maxWidth: '800px',
            }}>
              Sites touristiques de la commune
            </h1>

            <p style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: isMobile ? '16px' : '20px',
              lineHeight: '1.7', color: 'rgba(255,255,255,0.8)',
              margin: '0 0 32px 0', maxWidth: '620px',
            }}>
              Partez à la découverte des trésors naturels, culturels et spirituels qui font la richesse et l'authenticité d'Adja-Ouere.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { val: '6', label: 'Sites répertoriés' },
                { val: '6', label: 'Arrondissements' },
                { val: '∞', label: 'Découvertes' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>
                    {s.val}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '20px 24px' : '24px 80px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', marginRight: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Filtrer :
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '7px 16px', borderRadius: '20px', border: '1px solid',
                borderColor: activeFilter === cat ? '#0A3D2E' : '#E8E4DC',
                backgroundColor: activeFilter === cat ? '#0A3D2E' : '#FFFFFF',
                color: activeFilter === cat ? '#FFFFFF' : '#4A4A4A',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                cursor: 'pointer', transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}
            >
              {cat !== 'Tous' && <span>{categorieIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Liste des sites */}
      <section style={{ padding: isMobile ? '40px 24px' : '80px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sitesFiltres.map((site, i) => (
            <SiteCard key={site.id} site={site} index={i} />
          ))}
        </div>
      </section>

{/* CTA contact */}
      <section style={{
        backgroundColor: '#F0EBE0',
        padding: isMobile ? '60px 24px' : '80px 80px',
        textAlign: 'center',
        borderTop: '1px solid #E8E4DC',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Icône encadrée */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '2px solid #C9A84C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', margin: '0 auto 24px auto',
            boxShadow: '0 8px 24px rgba(201,168,76,0.15)',
          }}>🗺️</div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '700', color: '#0A3D2E',
            margin: '0 0 16px 0',
          }}>
            Planifiez votre visite
          </h2>
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '16px', lineHeight: '1.7',
            color: '#6A6A6A',
            margin: '0 0 32px 0',
          }}>
            Notre service tourisme vous accompagne dans l'organisation de votre séjour à Adja-Ouere. Guides locaux, hébergements et circuits personnalisés disponibles.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#0A3D2E', color: '#FFFFFF',
              fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '600',
              padding: '14px 32px', borderRadius: '8px', textDecoration: 'none',
            }}
          >
            Contacter le service tourisme →
          </Link>
        </div>
      </section>

    </main>
  )
}