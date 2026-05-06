'use client'

import React from 'react'

const arrondissements = [
  {
    nom: "Adja-Ouere",
    population_total: 18500,
    population_hommes: 8900,
    population_femmes: 9600,
    villages: [
      "Adja-Ouere centre", "Agbamou", "Atchoukpa", "Dekin",
      "Gbeko", "Houinme", "Kpinnou", "Lagbe",
      "Massè", "Tankpe", "Tohouete", "Zounkon"
    ],
  },
  {
    nom: "Ikpinle",
    population_total: 12300,
    population_hommes: 5800,
    population_femmes: 6500,
    villages: [
      "Ikpinle centre", "Adjohoun", "Aglogbe", "Ahozon",
      "Doga", "Houegbo", "Kpota", "Zounme"
    ],
  },
  {
    nom: "Kpoulou",
    population_total: 9800,
    population_hommes: 4700,
    population_femmes: 5100,
    villages: [
      "Kpoulou centre", "Akpadanou", "Gboji", "Houedo",
      "Sagon", "Tankpodji"
    ],
  },
  {
    nom: "Masse",
    population_total: 14200,
    population_hommes: 6800,
    population_femmes: 7400,
    villages: [
      "Masse centre", "Abomey-Calavi", "Deme", "Djigbe",
      "Gbave", "Houedo", "Kpome", "Sagon", "Zinvie"
    ],
  },
  {
    nom: "Oko-Akare",
    population_total: 11600,
    population_hommes: 5500,
    population_femmes: 6100,
    villages: [
      "Oko-Akare centre", "Agbodji", "Dekin", "Gbeko",
      "Houinme", "Kpedekpo", "Tankpe"
    ],
  },
  {
    nom: "Tatonnonkon",
    population_total: 10400,
    population_hommes: 4900,
    population_femmes: 5500,
    villages: [
      "Tatonnonkon centre", "Adjohoun", "Aglogbe", "Doga",
      "Gboji", "Houedo", "Tankpodji"
    ],
  },
]

const totalPopulation = arrondissements.reduce((acc, a) => acc + a.population_total, 0)
const totalHommes = arrondissements.reduce((acc, a) => acc + a.population_hommes, 0)
const totalFemmes = arrondissements.reduce((acc, a) => acc + a.population_femmes, 0)
const totalVillages = arrondissements.reduce((acc, a) => acc + a.villages.length, 0)

const chiffres = [
  { valeur: totalPopulation.toLocaleString('fr-FR'), label: "Population totale", detail: `${totalHommes.toLocaleString('fr-FR')} H / ${totalFemmes.toLocaleString('fr-FR')} F` },
  { valeur: "6", label: "Arrondissements", detail: "Département du Plateau" },
  { valeur: String(totalVillages), label: "Villages", detail: "Répartis sur 6 arrondissements" },
  { valeur: "536 km²", label: "Superficie", detail: "Frontalière avec le Nigeria" },
]

const galerie = [
  { id: 1, titre: "Hôtel de ville d'Adja-Ouere", description: "Le bâtiment principal de la mairie, siège de l'administration communale.", url: "/images/mairie.jpg" },
  { id: 2, titre: "Marché central d'Adja-Ouere", description: "Le marché hebdomadaire, cœur économique de la commune.", url: "/images/marche.jpg" },
  { id: 3, titre: "École primaire publique d'Ikpinle", description: "L'une des écoles reconstruites dans le cadre du programme de développement.", url: "/images/ecole.jpg" },
  { id: 4, titre: "Piste rurale de Kpoulou", description: "La piste agricole reliant les villages de l'arrondissement de Kpoulou.", url: "/images/piste.jpg" },
  { id: 5, titre: "Cérémonie de fête nationale", description: "La population d'Adja-Ouere lors de la célébration de la fête nationale du Bénin.", url: "/images/fete.jpg" },
  { id: 6, titre: "Champs agricoles de Massè", description: "Les vastes plaines agricoles de l'arrondissement de Massè en saison des pluies.", url: "/images/champs.jpg" },
]

function ArrondissementCard({ arr }: { arr: typeof arrondissements[0] }) {
  const [hovered, setHovered] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        backgroundColor: hovered ? '#0A3D2E' : '#F8F6F1',
        padding: '24px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px', fontWeight: '700',
            color: hovered ? '#FFFFFF' : '#0A3D2E',
            margin: 0, transition: 'color 0.3s ease',
          }}>
            {arr.nom}
          </h3>
          <div style={{
            backgroundColor: hovered ? 'rgba(201,168,76,0.2)' : 'rgba(10,61,46,0.08)',
            borderRadius: '8px', padding: '6px 12px', flexShrink: 0,
          }}>
            <span style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
              color: hovered ? '#C9A84C' : '#0A3D2E',
              transition: 'color 0.3s ease',
            }}>
              {arr.villages.length} villages
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          {[
            { val: arr.population_total, label: 'Total', color: '#0A3D2E' },
            { val: arr.population_hommes, label: 'Hommes', color: '#156840' },
            { val: arr.population_femmes, label: 'Femmes', color: '#C9A84C' },
          ].map((item, i) => (
            <div key={item.label} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid #E8E4DC' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: item.color, lineHeight: 1 }}>
                {item.val.toLocaleString('fr-FR')}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%', padding: '10px 16px',
            backgroundColor: open ? '#0A3D2E' : 'transparent',
            color: open ? '#FFFFFF' : '#0A3D2E',
            fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
            borderRadius: '8px', border: '1px solid #0A3D2E',
            cursor: 'pointer', transition: 'all 0.2s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
        >
          {open ? 'Masquer les villages' : 'Voir les villages'}
          <span style={{ fontSize: '12px' }}>{open ? '▲' : '▼'}</span>
        </button>

        {open && (
          <div style={{ marginTop: '12px', padding: '16px', backgroundColor: '#F8F6F1', borderRadius: '10px', border: '1px solid #E8E4DC' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {arr.villages.map((village) => (
                <span key={village} style={{
                  backgroundColor: '#FFFFFF', border: '1px solid #E8E4DC',
                  borderRadius: '20px', padding: '4px 12px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#4A4A4A',
                }}>
                  {village}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function GalerieCard({ photo }: { photo: typeof galerie[0] }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '16px', overflow: 'hidden',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease', backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{
        height: '200px', backgroundColor: '#0A3D2E',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '48px', position: 'relative', overflow: 'hidden',
      }}>
        🏙️
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: hovered ? 'rgba(10,61,46,0.3)' : 'rgba(10,61,46,0.5)',
          transition: 'all 0.3s ease',
        }} />
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0', lineHeight: '1.3' }}>
          {photo.titre}
        </h3>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 16px 0', lineHeight: '1.5' }}>
          {photo.description}
        </p>
        <button
          onClick={() => window.open(photo.url, '_blank')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            backgroundColor: 'transparent', color: '#0A3D2E',
            fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
            padding: '8px 14px', borderRadius: '6px', border: '1px solid #0A3D2E',
            cursor: 'pointer', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
        >
          Télécharger
        </button>
      </div>
    </div>
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
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Qui sommes-nous
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            La Commune d'Adja-Ouere
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px 0', maxWidth: '680px' }}>
            Située dans le Département du Plateau au Bénin, la Commune d'Adja-Ouere est une collectivité locale dynamique engagée dans le développement durable et la bonne gouvernance.
          </p>
          <button
            onClick={() => window.open('/documents/brochure-adja-ouere.pdf', '_blank')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#C9A84C', color: '#0A3D2E',
              fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
              padding: '14px 28px', borderRadius: '8px', border: 'none',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B8973B'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Télécharger la brochure de présentation
          </button>
        </div>
      </section>

      {/* Chiffres clés */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>En chiffres</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              La commune en chiffres
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {chiffres.map((c) => (
              <div key={c.label} style={{ textAlign: 'center', padding: '32px 16px', backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '700', color: '#0A3D2E', lineHeight: 1, marginBottom: '8px' }}>
                  {c.valeur}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1C1C1C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire et géographie */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {[
              {
                tag: 'Histoire', titre: 'Un riche passé historique',
                p1: "La Commune d'Adja-Ouere tire son nom du peuple Adja qui a peuplé cette région depuis des siècles. Carrefour de cultures et d'échanges, elle a joué un rôle important dans l'histoire du royaume de Porto-Novo.",
                p2: "Érigée en commune de plein exercice en 2003 dans le cadre de la décentralisation au Bénin, elle s'est progressivement dotée d'institutions solides et d'infrastructures de développement au service de ses populations.",
              },
              {
                tag: 'Géographie', titre: 'Une position stratégique',
                p1: "Située à l'est du Département du Plateau, la Commune d'Adja-Ouere est limitée au nord par la commune de Pobè, au sud par Porto-Novo, à l'ouest par Sakété et à l'est par le Nigeria.",
                p2: "Cette position frontalière avec le Nigeria lui confère un avantage stratégique pour les échanges commerciaux et culturels avec le pays voisin.",
              },
            ].map((item) => (
              <div key={item.tag}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>{item.tag}</span>
                </div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0', lineHeight: '1.2' }}>
                  {item.titre}
                </h2>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.8', color: '#4A4A4A', margin: '0 0 20px 0' }}>{item.p1}</p>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.8', color: '#4A4A4A', margin: 0 }}>{item.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartes */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Cartographie</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Cartes de la commune
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>

            {/* Carte administrative */}
            <div style={{ backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC', overflow: 'hidden' }}>
              <div style={{ height: '300px', backgroundColor: '#0A3D2E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <span style={{ fontSize: '64px' }}>🗺️</span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                  Carte à uploader dans Strapi
                </span>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                  Carte administrative
                </h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  Délimitation des 6 arrondissements et localisation des villages
                </p>
                <button
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    backgroundColor: 'transparent', color: '#0A3D2E',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                    padding: '8px 16px', borderRadius: '6px', border: '1px solid #0A3D2E',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
                >
                  Télécharger la carte
                </button>
              </div>
            </div>

            {/* Carte GPS interactive */}
            <div style={{ backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63223.45!2d2.6833!3d6.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023aexxxxxxxx%3A0x0!2sAdja-Ou%C3%A8re%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderRadius: '8px', padding: '6px 12px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#0A3D2E',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <span>👆</span> Carte interactive
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                  Localisation GPS
                </h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  Département du Plateau, Bénin · Utilisez deux doigts pour déplacer la carte
                </p>
                <button
                  onClick={() => window.open('https://www.google.com/maps/place/Adja-Ou%C3%A8re,+B%C3%A9nin/@6.9167,2.6833,13z', '_blank')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#0A3D2E', color: '#FFFFFF',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                    padding: '8px 16px', borderRadius: '6px', border: 'none',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E' }}
                >
                  📍 Ouvrir dans Google Maps
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Arrondissements */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Territoire</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0', lineHeight: '1.2' }}>
              Les 6 arrondissements
            </h2>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#6A6A6A', margin: 0 }}>
              Population totale : {totalPopulation.toLocaleString('fr-FR')} habitants —{' '}
              {totalHommes.toLocaleString('fr-FR')} hommes / {totalFemmes.toLocaleString('fr-FR')} femmes
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {arrondissements.map((arr) => (
              <ArrondissementCard key={arr.nom} arr={arr} />
            ))}
          </div>
        </div>
      </section>

      {/* Potentiels */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Atouts</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Potentiels et atouts
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: "🌾", titre: "Agriculture", description: "La commune dispose d'importantes terres agricoles favorables à la culture du maïs, du manioc, de l'igname et des cultures maraîchères." },
              { icon: "🌲", titre: "Forêts et ressources naturelles", description: "Des forêts classées et réserves naturelles offrent un potentiel touristique et écologique significatif." },
              { icon: "🏺", titre: "Artisanat et culture", description: "Un riche patrimoine culturel et artisanal avec des traditions ancestrales bien préservées." },
              { icon: "🚗", titre: "Position stratégique", description: "Située sur l'axe Cotonou-Lagos, la commune bénéficie d'une position géographique favorable aux échanges commerciaux." },
            ].map((p) => (
              <div key={p.titre} style={{ backgroundColor: '#F8F6F1', borderRadius: '16px', padding: '32px 28px', border: '1px solid #E8E4DC' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>
                  {p.titre}
                </h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: 0 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Galerie</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Photos de la commune
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {galerie.map((photo) => (
              <GalerieCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}