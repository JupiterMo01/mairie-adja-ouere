'use client'

import React from 'react'

const arrondissements = [
  {
    id: 'adja-ouere',
    nom: "Adja-Ouere",
    titre: "Arrondissement d'Adja-Ouere",
    description: "Chef-lieu de la commune, l'arrondissement d'Adja-Ouere est le centre administratif et economique de la commune. Il abrite l'hotel de ville, le marche central et les principales infrastructures communales.",
    superficie: "89 km²",
    population: 18500,
    hommes: 8900,
    femmes: 9600,
    villages: ["Adja-Ouere centre", "Agbamou", "Atchoukpa", "Dekin", "Gbeko", "Houinme", "Kpinnou", "Lagbe", "Masse", "Tankpe", "Tohouete", "Zounkon"],
    activites: ["Commerce", "Agriculture", "Artisanat", "Administration"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Hotel de ville", description: "Le siege de l'administration communale d'Adja-Ouere." },
      { titre: "Marche central", description: "Le marche hebdomadaire, coeur economique de l'arrondissement." },
      { titre: "Ecole primaire", description: "L'ecole primaire publique reconstruite en 2022." },
    ],
  },
  {
    id: 'ikpinle',
    nom: "Ikpinle",
    titre: "Arrondissement d'Ikpinle",
    description: "Arrondissement agricole par excellence, Ikpinle est connu pour ses vastes plaines fertiles et ses cultures vivrières. Il joue un role important dans l'approvisionnement alimentaire de la commune.",
    superficie: "76 km²",
    population: 12300,
    hommes: 5800,
    femmes: 6500,
    villages: ["Ikpinle centre", "Adjohoun", "Aglogbe", "Ahozon", "Doga", "Houegbo", "Kpota", "Zounme"],
    activites: ["Agriculture", "Elevage", "Pêche", "Artisanat"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Champs agricoles", description: "Les vastes plaines agricoles d'Ikpinle en saison des pluies." },
      { titre: "Centre de sante", description: "Le centre de sante de l'arrondissement renovee en 2023." },
      { titre: "Piste rurale", description: "La piste rurale reliant les villages d'Ikpinle." },
    ],
  },
  {
    id: 'kpoulou',
    nom: "Kpoulou",
    titre: "Arrondissement de Kpoulou",
    description: "Situe a l'ouest de la commune, Kpoulou est caracterise par ses forets et ses ressources naturelles. Il constitue un potentiel touristique et ecologique important pour la commune.",
    superficie: "62 km²",
    population: 9800,
    hommes: 4700,
    femmes: 5100,
    villages: ["Kpoulou centre", "Akpadanou", "Gboji", "Houedo", "Sagon", "Tankpodji"],
    activites: ["Foresterie", "Agriculture", "Chasse", "Artisanat"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Foret classee", description: "La reserve forestiere de Kpoulou, poumon vert de la commune." },
      { titre: "Village de Gboji", description: "Le village de Gboji avec ses cases traditionnelles." },
      { titre: "Artisanat local", description: "Les artisans de Kpoulou et leurs productions traditionnelles." },
    ],
  },
  {
    id: 'masse',
    nom: "Masse",
    titre: "Arrondissement de Masse",
    description: "Arrondissement dynamique situe au centre de la commune, Masse est un carrefour commercial important. Ses habitants sont reconnus pour leur savoir-faire artisanal et leurs traditions culturelles riches.",
    superficie: "84 km²",
    population: 14200,
    hommes: 6800,
    femmes: 7400,
    villages: ["Masse centre", "Abomey-Calavi", "Deme", "Djigbe", "Gbave", "Houedo", "Kpome", "Sagon", "Zinvie"],
    activites: ["Commerce", "Artisanat", "Agriculture", "Culture"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Marche de Masse", description: "Le marche local de Masse, point de rencontre des commercants." },
      { titre: "Ceremonie traditionnelle", description: "Une ceremonie culturelle traditionnelle de l'arrondissement." },
      { titre: "Infrastructure scolaire", description: "Le complexe scolaire de Masse construit en 2021." },
    ],
  },
  {
    id: 'oko-akare',
    nom: "Oko-Akare",
    titre: "Arrondissement d'Oko-Akare",
    description: "Frontalie avec le Nigeria, l'arrondissement d'Oko-Akare beneficie d'une position strategique pour les echanges commerciaux transfrontaliers. Il est un point de passage important entre les deux pays.",
    superficie: "71 km²",
    population: 11600,
    hommes: 5500,
    femmes: 6100,
    villages: ["Oko-Akare centre", "Agbodji", "Dekin", "Gbeko", "Houinme", "Kpedekpo", "Tankpe"],
    activites: ["Commerce transfrontalier", "Agriculture", "Transport", "Elevage"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Frontiere Nigeria", description: "Le poste frontiere d'Oko-Akare avec le Nigeria." },
      { titre: "Marche transfrontalier", description: "Le marche transfrontalier animant les echanges avec le Nigeria." },
      { titre: "Village d'Agbodji", description: "Le village d'Agbodji et ses habitants accueillants." },
    ],
  },
  {
    id: 'tatonnonkon',
    nom: "Tatonnonkon",
    titre: "Arrondissement de Tatonnonkon",
    description: "Arrondissement au riche patrimoine culturel, Tatonnonkon est connu pour ses festivals traditionnels et ses sites historiques. Il conserve jalousement les traditions ancestrales du peuple Adja.",
    superficie: "54 km²",
    population: 10400,
    hommes: 4900,
    femmes: 5500,
    villages: ["Tatonnonkon centre", "Adjohoun", "Aglogbe", "Doga", "Gboji", "Houedo", "Tankpodji"],
    activites: ["Culture", "Agriculture", "Artisanat", "Tourisme"],
    couleur: "#0A3D2E",
    galerie: [
      { titre: "Festival traditionnel", description: "Le festival annuel de Tatonnonkon celebrant les traditions Adja." },
      { titre: "Site historique", description: "Un des sites historiques de l'arrondissement de Tatonnonkon." },
      { titre: "Artisanat Adja", description: "Les productions artisanales typiques de Tatonnonkon." },
    ],
  },
]

function GalerieCard({ photo, couleur }: { photo: { titre: string; description: string }; couleur: string }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: hovered ? `1px solid ${couleur}` : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        backgroundColor: '#FFFFFF',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Placeholder photo */}
      <div style={{
        height: '160px',
        backgroundColor: couleur,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        🏙️
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: hovered ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
        }} />
      </div>
      <div style={{ padding: '16px' }}>
        <h4 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '16px',
          fontWeight: '700',
          color: '#0A3D2E',
          margin: '0 0 6px 0',
        }}>
          {photo.titre}
        </h4>
        <p style={{
          fontFamily: 'Source Sans 3, sans-serif',
          fontSize: '13px',
          color: '#6A6A6A',
          margin: '0 0 12px 0',
          lineHeight: '1.5',
        }}>
          {photo.description}
        </p>
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'transparent',
            color: couleur,
            fontFamily: 'Outfit, sans-serif',
            fontSize: '12px',
            fontWeight: '600',
            padding: '6px 12px',
            borderRadius: '6px',
            border: `1px solid ${couleur}`,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = couleur
            e.currentTarget.style.color = '#FFFFFF'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = couleur
          }}
        >
          Telecharger
        </button>
      </div>
    </div>
  )
}

function ArrondissementSection({ arr, index }: { arr: typeof arrondissements[0]; index: number }) {
  const [isMobile, setIsMobile] = React.useState(false)
  const bgAlt = index % 2 === 0

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id={arr.id}
      style={{
        backgroundColor: bgAlt ? '#FFFFFF' : '#F8F6F1',
        padding: isMobile ? '60px 24px' : '80px 40px',
        borderTop: '1px solid #E8E4DC',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* En-tete arrondissement */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '48px',
        }}>
          <div>
            {/* Badge numero */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: arr.couleur }} />
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                color: arr.couleur,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                Arrondissement {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: '700',
              color: '#0A3D2E',
              margin: '0 0 20px 0',
              lineHeight: '1.2',
            }}>
              {arr.titre}
            </h2>

            <p style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#4A4A4A',
              margin: '0 0 24px 0',
            }}>
              {arr.description}
            </p>

            {/* Activites */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {arr.activites.map((act) => (
                <span
                  key={act}
                  style={{
                    backgroundColor: `${arr.couleur}15`,
                    color: arr.couleur,
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: `1px solid ${arr.couleur}30`,
                  }}
                >
                  {act}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Population */}
            <div style={{
              backgroundColor: arr.couleur,
              borderRadius: '16px',
              padding: '24px',
              color: '#FFFFFF',
            }}>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                opacity: 0.7,
                marginBottom: '16px',
              }}>
                Population
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', textAlign: 'center' }}>
                {[
                  { val: arr.population.toLocaleString('fr-FR'), label: 'Total' },
                  { val: arr.hommes.toLocaleString('fr-FR'), label: 'Hommes' },
                  { val: arr.femmes.toLocaleString('fr-FR'), label: 'Femmes' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', lineHeight: 1 }}>
                      {stat.val}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Superficie + Villages */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{
                backgroundColor: '#F8F6F1',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #E8E4DC',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: arr.couleur }}>
                  {arr.superficie}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
                  Superficie
                </div>
              </div>
              <div style={{
                backgroundColor: '#F8F6F1',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #E8E4DC',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: arr.couleur }}>
                  {arr.villages.length}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
                  Villages
                </div>
              </div>
            </div>

            {/* Liste villages */}
            <div style={{
              backgroundColor: '#F8F6F1',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #E8E4DC',
            }}>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                color: '#9A9A9A',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}>
                Villages
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {arr.villages.map((village) => (
                  <span
                    key={village}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E8E4DC',
                      borderRadius: '16px',
                      padding: '4px 10px',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '12px',
                      color: '#4A4A4A',
                    }}
                  >
                    {village}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Galerie photos */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px',
          }}>
            <div style={{ width: '30px', height: '2px', backgroundColor: arr.couleur }} />
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: arr.couleur,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Galerie photos
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {arr.galerie.map((photo) => (
              <GalerieCard key={photo.titre} photo={photo} couleur={arr.couleur} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default function ArrondissementsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [actif, setActif] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const scrollTo = (id: string) => {
    setActif(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#0A3D2E',
        padding: isMobile ? '60px 24px' : '100px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Territoire
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: '700', color: '#FFFFFF',
            margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px',
          }}>
            Les Arrondissements
          </h1>
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '1.7', color: 'rgba(255,255,255,0.75)',
            margin: '0 0 40px 0', maxWidth: '680px',
          }}>
            La Commune d'Adja-Ouere est composee de 6 arrondissements, chacun avec ses specificites geographiques, culturelles et demographiques.
          </p>

          {/* Navigation rapide */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {arrondissements.map((arr) => (
              <button
                key={arr.id}
                onClick={() => scrollTo(arr.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: `1px solid ${actif === arr.id ? arr.couleur : 'rgba(255,255,255,0.3)'}`,
                  backgroundColor: actif === arr.id ? arr.couleur : 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {arr.nom}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sections arrondissements */}
      {arrondissements.map((arr, index) => (
        <ArrondissementSection key={arr.id} arr={arr} index={index} />
      ))}

    </main>
  )
}