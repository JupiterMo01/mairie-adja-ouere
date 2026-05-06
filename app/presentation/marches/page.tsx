'use client'

import React from 'react'

const aujourd = new Date()

const marches = [
  {
    id: 1,
    nom: "Grand Marché d'Adja-Ouere",
    arrondissement: "Adja-Ouere",
    localisation: "Centre-ville d'Adja-Ouere, près de la mairie",
    description: "Le plus grand marché de la commune, véritable poumon économique d'Adja-Ouere. Il attire des commerçants venus de toute la région et même du Nigeria voisin lors de ses grandes journées d'animation.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    jours_animation: [4, 8, 12, 16, 20, 24, 28], // jours du mois (ou logique périodique)
    periodicite: "Tous les 4 jours",
    horaires: "6h00 – 18h00",
    produits: ["Vivres et céréales", "Légumes et fruits", "Poisson et viande", "Tissus et vêtements", "Ustensiles ménagers", "Produits importés du Nigeria"],
    infrastructures: ["300 boutiques couvertes", "Aire de stationnement", "Bloc sanitaire", "Point d'eau potable", "Éclairage solaire"],
    responsable: "Chef marché : M. Agossou Koffi",
    contact: "se@mairie-adja-ouere.bj",
  },
  {
    id: 2,
    nom: "Marché de Massè",
    arrondissement: "Massè",
    localisation: "Place centrale de Massè, arrondissement de Massè",
    description: "Marché hebdomadaire réputé pour la qualité de ses produits agricoles et son artisanat local. Les tisserands et potières de la région y exposent leurs créations chaque semaine.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80",
    jours_animation: [5, 12, 19, 26], // tous les 7 jours
    periodicite: "Chaque vendredi",
    horaires: "6h00 – 17h00",
    produits: ["Produits agricoles locaux", "Artisanat et poterie", "Tissage traditionnel", "Épices et condiments", "Bétail et volaille"],
    infrastructures: ["120 boutiques", "Espace artisanat dédié", "Aire de vente en plein air", "Bloc sanitaire"],
    responsable: "Chef marché : Mme Dossou Célestine",
    contact: "se@mairie-adja-ouere.bj",
  },
  {
    id: 3,
    nom: "Marché d'Ikpinle",
    arrondissement: "Ikpinle",
    localisation: "Carrefour principal d'Ikpinle",
    description: "Marché dynamique de l'arrondissement d'Ikpinle, spécialisé dans les produits maraîchers et le commerce de bétail. Sa proximité avec les zones agricoles lui assure un approvisionnement frais quotidien.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80",
    jours_animation: [2, 6, 10, 14, 18, 22, 26, 30], // tous les 4 jours
    periodicite: "Tous les 4 jours",
    horaires: "5h30 – 16h00",
    produits: ["Maraîchage frais", "Bétail et volaille", "Produits laitiers", "Tubercules et ignames", "Poisson fumé"],
    infrastructures: ["80 boutiques", "Parc à bétail", "Point d'eau", "Aire de déchargement"],
    responsable: "Chef marché : M. Houessou Bernard",
    contact: "se@mairie-adja-ouere.bj",
  },
  {
    id: 4,
    nom: "Marché de Kpoulou",
    arrondissement: "Kpoulou",
    localisation: "Centre de Kpoulou, route principale",
    description: "Petit marché de proximité servant les populations des villages environnants. Il joue un rôle essentiel dans l'approvisionnement quotidien des ménages de l'arrondissement.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
    jours_animation: [3, 10, 17, 24], // tous les 7 jours
    periodicite: "Chaque lundi",
    horaires: "6h00 – 15h00",
    produits: ["Vivres de base", "Légumes locaux", "Condiments et épices", "Produits ménagers", "Fruits de saison"],
    infrastructures: ["40 boutiques", "Aire en plein air", "Point d'eau"],
    responsable: "Chef marché : M. Sèhou Clément",
    contact: "se@mairie-adja-ouere.bj",
  },
  {
    id: 5,
    nom: "Marché d'Oko-Akare",
    arrondissement: "Oko-Akare",
    localisation: "Place du marché, Oko-Akare centre",
    description: "Marché frontalier avec une forte influence des échanges commerciaux transfrontaliers. On y trouve une grande variété de produits importés et des denrées locales de qualité.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
    jours_animation: [1, 5, 9, 13, 17, 21, 25, 29], // tous les 4 jours
    periodicite: "Tous les 4 jours",
    horaires: "6h00 – 18h00",
    produits: ["Produits importés du Nigeria", "Carburant et lubrifiants", "Électronique", "Vivres locaux", "Textiles"],
    infrastructures: ["150 boutiques", "Zone de change", "Parking", "Toilettes publiques", "Éclairage"],
    responsable: "Chef marché : M. Aïvodji Théodore",
    contact: "se@mairie-adja-ouere.bj",
  },
  {
    id: 6,
    nom: "Marché de Tatonnonkon",
    arrondissement: "Tatonnonkon",
    localisation: "Centre de Tatonnonkon",
    description: "Marché traditionnel préservant les pratiques commerciales ancestrales. Il est particulièrement réputé pour son marché aux céréales et ses produits artisanaux authentiques.",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=1200&q=80",
    jours_animation: [6, 13, 20, 27], // tous les 7 jours
    periodicite: "Chaque samedi",
    horaires: "6h00 – 16h00",
    produits: ["Céréales et légumineuses", "Artisanat traditionnel", "Plantes médicinales", "Huile de palme", "Produits agricoles"],
    infrastructures: ["60 boutiques", "Hangar central", "Grenier à céréales", "Point d'eau potable"],
    responsable: "Chef marché : Mme Amoussou Félicité",
    contact: "se@mairie-adja-ouere.bj",
  },
]

const arrondissements = ['Tous', 'Adja-Ouere', 'Massè', 'Ikpinle', 'Kpoulou', 'Oko-Akare', 'Tatonnonkon']

function getStatutAnimation(jours: number[], periodicite: string) {
  const aujourd = new Date()
  const jourActuel = aujourd.getDate()
  const moisActuel = aujourd.getMonth()
  const anneeActuelle = aujourd.getFullYear()

  // Vérifier si aujourd'hui est un jour d'animation
  const estAujourdhui = jours.includes(jourActuel)

  // Trouver le prochain jour d'animation
  let prochainJour = jours.find(j => j > jourActuel)
  let prochainDate: Date

  if (prochainJour) {
    prochainDate = new Date(anneeActuelle, moisActuel, prochainJour)
  } else {
    // Passer au mois suivant
    prochainDate = new Date(anneeActuelle, moisActuel + 1, jours[0])
  }

  const moisNoms = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
  const joursNoms = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

  const joursRestants = Math.ceil((prochainDate.getTime() - aujourd.getTime()) / (1000 * 60 * 60 * 24))

  return {
    estAujourdhui,
    prochainLabel: `${joursNoms[prochainDate.getDay()]} ${prochainDate.getDate()} ${moisNoms[prochainDate.getMonth()]}`,
    joursRestants,
    periodicite,
  }
}

function BadgeAnimation({ jours, periodicite }: { jours: number[]; periodicite: string }) {
  const statut = getStatutAnimation(jours, periodicite)

  if (statut.estAujourdhui) {
    return (
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        backgroundColor: '#DCFCE7', border: '1px solid #4CAF50',
        borderRadius: '12px', padding: '10px 16px',
      }}>
        <span style={{
          width: '8px', height: '8px', borderRadius: '50%',
          backgroundColor: '#4CAF50', display: 'inline-block',
          boxShadow: '0 0 0 3px rgba(76,175,80,0.3)',
          animation: 'pulse 2s infinite',
        }} />
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#166534' }}>
            🎉 Marché animé aujourd'hui !
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#4CAF50', marginTop: '2px' }}>
            {periodicite} · Prochain : {statut.prochainLabel}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      backgroundColor: '#FFF8E7', border: '1px solid #C9A84C',
      borderRadius: '12px', padding: '10px 16px',
    }}>
      <span style={{ fontSize: '16px' }}>🕐</span>
      <div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#92400E' }}>
          Prochain : {statut.prochainLabel}
          {statut.joursRestants === 1 ? ' · Demain !' : statut.joursRestants <= 3 ? ` · Dans ${statut.joursRestants} jours` : ''}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#C9A84C', marginTop: '2px' }}>
          {periodicite}
        </div>
      </div>
    </div>
  )
}

function MarcheCard({ marche, index }: { marche: typeof marches[0]; index: number }) {
  const [hovered, setHovered] = React.useState(false)
  const isReverse = index % 2 !== 0

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        borderRadius: '20px', overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        boxShadow: hovered ? '0 24px 60px rgba(10,61,46,0.12)' : '0 4px 20px rgba(0,0,0,0.06)',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden', order: isReverse ? 1 : 0 }}>
        <img
          src={marche.image}
          alt={marche.nom}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            position: 'absolute', inset: 0,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(10,61,46,0.6) 100%)' }} />

        {/* Numéro */}
        <div style={{
          position: 'absolute', top: '20px', left: '20px',
          width: '44px', height: '44px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Cormorant Garamond, serif', fontSize: '18px',
          fontWeight: '700', color: '#0A3D2E',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Arrondissement badge */}
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '6px 14px', borderRadius: '20px',
          fontFamily: 'Outfit, sans-serif', fontSize: '12px',
          fontWeight: '600', color: '#0A3D2E',
        }}>
          📍 {marche.arrondissement}
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', order: isReverse ? 0 : 1 }}>

        {/* Badge animation */}
        <div style={{ marginBottom: '20px' }}>
          <BadgeAnimation jours={marche.jours_animation} periodicite={marche.periodicite} />
        </div>

        {/* Titre */}
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(22px, 2.5vw, 30px)',
          fontWeight: '700', color: '#0A3D2E',
          margin: '0 0 8px 0', lineHeight: '1.2',
        }}>
          {marche.nom}
        </h2>

        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginBottom: '16px' }}>
          📍 {marche.localisation}
        </div>

        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.8', color: '#5A5A5A', margin: '0 0 24px 0' }}>
          {marche.description}
        </p>

        {/* Horaires */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#F8F6F1', borderRadius: '10px',
          padding: '10px 16px', marginBottom: '20px',
        }}>
          <span style={{ fontSize: '16px' }}>⏰</span>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Horaires d'ouverture</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E' }}>{marche.horaires}</div>
          </div>
        </div>

        {/* Produits */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Produits vendus
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {marche.produits.map(p => (
              <span key={p} style={{
                backgroundColor: '#F0EBE0', border: '1px solid #E8E4DC',
                borderRadius: '20px', padding: '4px 12px',
                fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#4A4A4A',
              }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Infrastructures */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Infrastructures
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {marche.infrastructures.map(inf => (
              <div key={inf} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
                <span style={{ color: '#4CAF50', fontWeight: '700', fontSize: '14px' }}>✓</span>
                {inf}
              </div>
            ))}
          </div>
        </div>

        {/* Responsable */}
        <div style={{
          borderTop: '1px solid #E8E4DC', paddingTop: '16px',
          fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A',
        }}>
          👤 {marche.responsable} · <span style={{ color: '#C9A84C' }}>{marche.contact}</span>
        </div>
      </div>
    </div>
  )
}

export default function MarchesPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreArr, setFiltreArr] = React.useState('Tous')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const marchesFiltres = filtreArr === 'Tous' ? marches : marches.filter(m => m.arrondissement === filtreArr)

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Commerce local</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Nos marchés
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Les marchés d'Adja-Ouere sont au cœur de la vie économique et sociale de la commune. Découvrez leurs richesses, leurs produits et leurs jours d'animation.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: marches.length, label: 'Marchés dans la commune' },
              { val: '6', label: 'Arrondissements couverts' },
              { val: marches.filter(m => getStatutAnimation(m.jours_animation, m.periodicite).estAujourdhui).length, label: "Animés aujourd'hui" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>{s.val}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres arrondissement */}
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

      {/* Liste marchés */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '40px' }}>
            {marchesFiltres.length} marché{marchesFiltres.length > 1 ? 's' : ''} trouvé{marchesFiltres.length > 1 ? 's' : ''}
            {filtreArr !== 'Tous' && ` dans l'arrondissement de ${filtreArr}`}
          </div>

          {marchesFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E' }}>Aucun marché trouvé</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {marchesFiltres.map((marche, i) => (
                <MarcheCard key={marche.id} marche={marche} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(76,175,80,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(76,175,80,0.1); }
        }
      `}</style>
    </main>
  )
}