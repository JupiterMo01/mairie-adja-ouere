'use client'

import React from 'react'

const gares = [
  {
    id: 1,
    nom: "Gare Routière Centrale d'Adja-Ouere",
    type: "Principale",
    arrondissement: "Adja-Ouere",
    localisation: "Avenue de l'Indépendance, centre-ville d'Adja-Ouere",
    description: "La principale gare routière de la commune, point de départ et d'arrivée de la majorité des liaisons intercommunales et interrégionales. Elle dessert quotidiennement Cotonou, Porto-Novo et les principales villes du Bénin.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
    horaires: "5h00 – 20h00",
    destinations: ["Cotonou", "Porto-Novo", "Pobè", "Sakété", "Lagos (Nigeria)"],
    vehicules: ["Taxi-brousse", "Minibus", "Bus interurbain", "Zemidjan"],
    infrastructures: ["Salle d'attente couverte", "Guichets de vente", "Toilettes publiques", "Boutiques et restauration", "Parking sécurisé", "Éclairage nocturne"],
    contact: "Régisseur : +229 01 23 45 67",
    email: "se@mairie-adja-ouere.bj",
  },
  {
    id: 2,
    nom: "Gare de Massè",
    type: "Secondaire",
    arrondissement: "Massè",
    localisation: "Place du marché de Massè, arrondissement de Massè",
    description: "Gare secondaire desservant l'arrondissement de Massè et ses villages environnants. Elle assure la liaison avec le centre-ville d'Adja-Ouere et les communes voisines.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    horaires: "6h00 – 18h00",
    destinations: ["Adja-Ouere centre", "Porto-Novo", "Pobè"],
    vehicules: ["Taxi-brousse", "Zemidjan", "Tricycle"],
    infrastructures: ["Abri couvert", "Aire d'attente", "Point d'eau"],
    contact: "Chef gare : +229 01 23 45 68",
    email: "se@mairie-adja-ouere.bj",
  },
  {
    id: 3,
    nom: "Gare d'Ikpinle",
    type: "Secondaire",
    arrondissement: "Ikpinle",
    localisation: "Carrefour principal d'Ikpinle",
    description: "Gare de l'arrondissement d'Ikpinle, point de transit important pour les échanges avec les villages du nord de la commune et la frontière nigériane.",
    image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=1200&q=80",
    horaires: "5h30 – 18h30",
    destinations: ["Adja-Ouere centre", "Cotonou", "Kraké (frontière)"],
    vehicules: ["Taxi-brousse", "Zemidjan"],
    infrastructures: ["Abri couvert", "Boutiques", "Toilettes"],
    contact: "Chef gare : +229 01 23 45 69",
    email: "se@mairie-adja-ouere.bj",
  },
  {
    id: 4,
    nom: "Gare de Kpoulou",
    type: "Locale",
    arrondissement: "Kpoulou",
    localisation: "Route principale de Kpoulou",
    description: "Petite gare locale assurant la connexion entre les villages de l'arrondissement de Kpoulou et le centre-ville. Elle est principalement fréquentée par les agriculteurs et les élèves.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&q=80",
    horaires: "6h00 – 17h00",
    destinations: ["Adja-Ouere centre", "Massè"],
    vehicules: ["Zemidjan", "Tricycle"],
    infrastructures: ["Abri simple", "Aire d'attente"],
    contact: "Mairie d'Adja-Ouere : +229 01 23 45 67",
    email: "se@mairie-adja-ouere.bj",
  },
  {
    id: 5,
    nom: "Gare d'Oko-Akare",
    type: "Secondaire",
    arrondissement: "Oko-Akare",
    localisation: "Carrefour d'Oko-Akare, route frontalière",
    description: "Gare stratégique située sur l'axe frontalier avec le Nigeria. Elle accueille un trafic important de commerçants transfrontaliers et assure la liaison avec les postes douaniers.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    horaires: "5h00 – 19h00",
    destinations: ["Adja-Ouere centre", "Idiroko (Nigeria)", "Cotonou"],
    vehicules: ["Taxi-brousse", "Minibus", "Zemidjan"],
    infrastructures: ["Salle d'attente", "Boutiques", "Change de devises", "Toilettes", "Parking"],
    contact: "Chef gare : +229 01 23 45 70",
    email: "se@mairie-adja-ouere.bj",
  },
  {
    id: 6,
    nom: "Gare de Tatonnonkon",
    type: "Locale",
    arrondissement: "Tatonnonkon",
    localisation: "Centre de Tatonnonkon",
    description: "Gare locale de l'arrondissement de Tatonnonkon, assurant les liaisons quotidiennes avec le centre de la commune et les villages environnants.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
    horaires: "6h00 – 17h30",
    destinations: ["Adja-Ouere centre", "Ikpinle"],
    vehicules: ["Zemidjan", "Tricycle"],
    infrastructures: ["Abri couvert", "Aire d'attente"],
    contact: "Mairie d'Adja-Ouere : +229 01 23 45 67",
    email: "se@mairie-adja-ouere.bj",
  },
]

const typeConfig: { [key: string]: { label: string; color: string; bg: string } } = {
  Principale: { label: "Principale", color: "#0A3D2E", bg: "#DCFCE7" },
  Secondaire: { label: "Secondaire", color: "#2196F3", bg: "#DBEAFE" },
  Locale: { label: "Locale", color: "#FF9800", bg: "#FEF3C7" },
}

const vehiculeIcons: { [key: string]: string } = {
  "Taxi-brousse": "🚕",
  "Minibus": "🚐",
  "Bus interurbain": "🚌",
  "Zemidjan": "🛵",
  "Tricycle": "🛺",
}

const arrondissements = ['Tous', 'Adja-Ouere', 'Massè', 'Ikpinle', 'Kpoulou', 'Oko-Akare', 'Tatonnonkon']

function GareCard({ gare }: { gare: typeof gares[0] }) {
  const [hovered, setHovered] = React.useState(false)
  const [tabActif, setTabActif] = React.useState<'destinations' | 'infra'>('destinations')
  const typeInfo = typeConfig[gare.type] || typeConfig.Locale

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF', borderRadius: '20px', overflow: 'hidden',
        boxShadow: hovered ? '0 20px 50px rgba(10,61,46,0.12)' : '0 4px 16px rgba(0,0,0,0.06)',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={gare.image} alt={gare.nom}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />

        {/* Badge type */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          backgroundColor: typeInfo.bg, color: typeInfo.color,
          fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
          padding: '4px 12px', borderRadius: '20px',
          border: `1px solid ${typeInfo.color}30`,
          letterSpacing: '0.5px', textTransform: 'uppercase',
        }}>
          {typeInfo.label}
        </div>

        {/* Ouvert tous les jours + horaires */}
        <div style={{
          position: 'absolute', bottom: '16px', left: '16px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          <div style={{
            backgroundColor: '#4CAF50',
            borderRadius: '6px', padding: '3px 10px',
            display: 'inline-flex', alignItems: 'center', gap: '4px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '700', color: '#FFFFFF' }}>Ouvert tous les jours</span>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: '6px', padding: '4px 10px',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>
            <span style={{ fontSize: '12px' }}>⏰</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: '#0A3D2E' }}>{gare.horaires}</span>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 6px 0', lineHeight: '1.2' }}>
          {gare.nom}
        </h3>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginBottom: '12px' }}>
          📍 {gare.localisation}
        </div>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 20px 0' }}>
          {gare.description}
        </p>

        {/* Véhicules */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {gare.vehicules.map(v => (
            <span key={v} style={{
              backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
              borderRadius: '20px', padding: '4px 10px',
              fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#4A4A4A',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              {vehiculeIcons[v]} {v}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', backgroundColor: '#F8F6F1', borderRadius: '10px', padding: '4px' }}>
          {(['destinations', 'infra'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setTabActif(tab)}
              style={{
                flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                backgroundColor: tabActif === tab ? '#FFFFFF' : 'transparent',
                color: tabActif === tab ? '#0A3D2E' : '#9A9A9A',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
                cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: tabActif === tab ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {tab === 'destinations' ? '🗺️ Zones desservies' : '🏗️ Infrastructures'}
            </button>
          ))}
        </div>

        {/* Tab zones desservies */}
        {tabActif === 'destinations' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1 }}>
            {gare.destinations.map(dest => (
              <div key={dest} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 14px', backgroundColor: '#F8F6F1',
                borderRadius: '10px', border: '1px solid #E8E4DC',
              }}>
                <span style={{ fontSize: '13px' }}>🏙️</span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#0A3D2E' }}>{dest}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tab infrastructures */}
        {tabActif === 'infra' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {gare.infrastructures.map(inf => (
              <div key={inf} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
                <span style={{ color: '#4CAF50', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                {inf}
              </div>
            ))}
          </div>
        )}

        {/* Contact */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E8E4DC', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>📞 {gare.contact}</div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#C9A84C' }}>✉️ {gare.email}</div>
        </div>
      </div>
    </div>
  )
}

export default function GaresPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreArr, setFiltreArr] = React.useState('Tous')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const garesFiltrees = filtreArr === 'Tous' ? gares : gares.filter(g => g.arrondissement === filtreArr)
  const garesHero = gares.find(g => g.type === 'Principale')

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: isMobile ? '400px' : '520px', overflow: 'hidden' }}>
        <img
          src={garesHero?.image || gares[0].image}
          alt="Gare principale"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,61,46,0.4) 0%, rgba(10,61,46,0.85) 100%)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: isMobile ? '40px 24px' : '60px 80px',
          maxWidth: '1400px', margin: '0 auto', left: 0, right: 0,
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Transport</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '40px' : 'clamp(48px, 6vw, 80px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 20px 0', lineHeight: '1.05', maxWidth: '800px' }}>
            Nos gares routières
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: isMobile ? '16px' : '20px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', margin: '0 0 32px 0', maxWidth: '620px' }}>
            Découvrez les gares routières de la Commune d'Adja-Ouere, leurs zones desservies et leurs services disponibles. Toutes les gares sont ouvertes 7j/7.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { val: gares.length, label: 'Gares routières' },
              { val: [...new Set(gares.flatMap(g => g.destinations))].length, label: 'Zones desservies' },
              { val: '7j/7', label: 'Ouverture' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>{s.val}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtre arrondissement */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '20px 24px' : '24px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Arrondissement :
          </span>
          {arrondissements.map(arr => (
            <button
              key={arr}
              onClick={() => setFiltreArr(arr)}
              style={{
                padding: '7px 16px', borderRadius: '20px', border: '1px solid',
                borderColor: filtreArr === arr ? '#0A3D2E' : '#E8E4DC',
                backgroundColor: filtreArr === arr ? '#0A3D2E' : '#FFFFFF',
                color: filtreArr === arr ? '#FFFFFF' : '#4A4A4A',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}
            >{arr}</button>
          ))}
        </div>
      </section>

      {/* Grille gares */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '32px' }}>
            {garesFiltrees.length} gare{garesFiltrees.length > 1 ? 's' : ''} trouvée{garesFiltrees.length > 1 ? 's' : ''}
            {filtreArr !== 'Tous' && ` dans l'arrondissement de ${filtreArr}`}
          </div>

          {garesFiltrees.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚌</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucune gare trouvée</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres filtres</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
              {garesFiltrees.map(gare => (
                <GareCard key={gare.id} gare={gare} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}