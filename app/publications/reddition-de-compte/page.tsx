'use client'

import React from 'react'
import Link from 'next/link'

const redditions = [
  {
    id: 1,
    titre: "Reddition de compte — Exercice 2025",
    periode: "Exercice 2025",
    date: "20 Février 2026",
    type: "Annuelle",
    presentes_par: "Cabinet du Maire",
    resume: "Présentation du bilan complet de l'exercice budgétaire 2025 devant le conseil communal et la population. Taux d'exécution budgétaire de 87%, 23 projets réalisés et amélioration des indicateurs de développement humain.",
    rapport: {
      titre: "Rapport de reddition de compte 2025",
      url: "#",
      taille: "2,4 Mo — PDF",
    },
    documentReddition: {
      titre: "Document officiel de reddition de compte 2025",
      url: "#",
      taille: "1,1 Mo — PDF",
    },
    photos: [
      { url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80", legende: "Séance de présentation" },
      { url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80", legende: "Conseil communal" },
      { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80", legende: "Participation citoyenne" },
    ],
    stats: [
      { label: "Taux d'exécution budgétaire", valeur: "87%" },
      { label: "Projets réalisés", valeur: "23" },
      { label: "Budget total", valeur: "1,1 Md FCFA" },
      { label: "Recettes propres", valeur: "142 M FCFA" },
    ],
    annee: 2025,
  },
  {
    id: 2,
    titre: "Reddition de compte — 1er semestre 2025",
    periode: "1er semestre 2025",
    date: "15 Août 2025",
    type: "Semestrielle",
    presentes_par: "Direction des Affaires Financières",
    resume: "Bilan d'étape des six premiers mois de l'exercice 2025. Taux d'exécution de 41% au terme du premier semestre, avec 9 projets en cours d'exécution sur les 20 inscrits au budget.",
    rapport: {
      titre: "Rapport semestriel S1 2025",
      url: "#",
      taille: "1,8 Mo — PDF",
    },
    documentReddition: {
      titre: "Document officiel de reddition de compte S1 2025",
      url: "#",
      taille: "820 Ko — PDF",
    },
    photos: [
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", legende: "Présentation du rapport" },
      { url: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=600&q=80", legende: "Délibération" },
    ],
    stats: [
      { label: "Taux d'exécution S1", valeur: "41%" },
      { label: "Projets en cours", valeur: "9" },
      { label: "Dépenses effectuées", valeur: "451 M FCFA" },
      { label: "Recettes collectées", valeur: "68 M FCFA" },
    ],
    annee: 2025,
  },
  {
    id: 3,
    titre: "Reddition de compte — Exercice 2024",
    periode: "Exercice 2024",
    date: "14 Février 2025",
    type: "Annuelle",
    presentes_par: "Cabinet du Maire",
    resume: "Clôture de l'exercice 2024 avec un taux d'exécution budgétaire de 82%. Focus sur les réalisations dans les secteurs de l'éducation, la santé et les infrastructures rurales.",
    rapport: {
      titre: "Rapport de reddition de compte 2024",
      url: "#",
      taille: "3,1 Mo — PDF",
    },
    documentReddition: {
      titre: "Document officiel de reddition de compte 2024",
      url: "#",
      taille: "1,4 Mo — PDF",
    },
    photos: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", legende: "Session de reddition" },
      { url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80", legende: "Présentation citoyenne" },
    ],
    stats: [
      { label: "Taux d'exécution budgétaire", valeur: "82%" },
      { label: "Projets réalisés", valeur: "19" },
      { label: "Budget total", valeur: "980 M FCFA" },
      { label: "Recettes propres", valeur: "128 M FCFA" },
    ],
    annee: 2024,
  },
]

const anneesDisponibles = [...new Set(redditions.map(r => r.annee))].sort((a, b) => b - a)

export default function RedditionDeComptePage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreAnnee, setFiltreAnnee] = React.useState<number | 'toutes'>('toutes')
  const [selectedReddition, setSelectedReddition] = React.useState<typeof redditions[0] | null>(null)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const redditionsFiltrees = filtreAnnee === 'toutes'
    ? redditions
    : redditions.filter(r => r.annee === filtreAnnee)

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Publications
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Reddition de compte
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Conformément aux principes de bonne gouvernance et de transparence, la Commune d&apos;Adja-Ouèrè rend compte régulièrement de la gestion des ressources publiques devant ses citoyens.
          </p>
        </div>
      </section>

      {/* Filtre par année */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E4DC', padding: isMobile ? '16px 24px' : '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
            Filtrer par année :
          </span>
          <button
            onClick={() => setFiltreAnnee('toutes')}
            style={{
              padding: '5px 16px', borderRadius: '20px', cursor: 'pointer',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px',
              fontWeight: filtreAnnee === 'toutes' ? '700' : '400',
              border: `${filtreAnnee === 'toutes' ? '2px' : '1px'} solid ${filtreAnnee === 'toutes' ? '#0A3D2E' : '#E8E4DC'}`,
              backgroundColor: filtreAnnee === 'toutes' ? '#0A3D2E' : '#F8F6F1',
              color: filtreAnnee === 'toutes' ? '#FFFFFF' : '#4A4A4A',
              transition: 'all 0.15s ease',
            }}
          >
            Toutes
          </button>
          {anneesDisponibles.map(annee => (
            <button
              key={annee}
              onClick={() => setFiltreAnnee(annee)}
              style={{
                padding: '5px 16px', borderRadius: '20px', cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif', fontSize: '13px',
                fontWeight: filtreAnnee === annee ? '700' : '400',
                border: `${filtreAnnee === annee ? '2px' : '1px'} solid ${filtreAnnee === annee ? '#0A3D2E' : '#E8E4DC'}`,
                backgroundColor: filtreAnnee === annee ? '#0A3D2E' : '#F8F6F1',
                color: filtreAnnee === annee ? '#FFFFFF' : '#4A4A4A',
                transition: 'all 0.15s ease',
              }}
            >
              {annee}
            </button>
          ))}
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginLeft: 'auto' }}>
            {redditionsFiltrees.length} rapport{redditionsFiltrees.length > 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Liste des redditions */}
      <section style={{ padding: isMobile ? '48px 24px' : '72px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {redditionsFiltrees.map(r => (
            <div key={r.id} style={{
              backgroundColor: '#FFFFFF', borderRadius: '20px',
              border: '1px solid #E8E4DC', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}>
              {/* Header */}
              <div style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '24px' : '28px 36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: r.type === 'Annuelle' ? '#C9A84C' : 'rgba(201,168,76,0.4)', color: r.type === 'Annuelle' ? '#0A3D2E' : '#C9A84C', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {r.type}
                    </span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                      📅 {r.date}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '22px' : '28px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 6px 0', lineHeight: '1.2' }}>
                    {r.titre}
                  </h2>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    Présenté par : {r.presentes_par}
                  </p>
                </div>
                {/* Boutons téléchargement */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
                  <a
                    href={r.rapport.url}
                    download
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      backgroundColor: '#C9A84C', color: '#0A3D2E',
                      fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                      padding: '10px 20px', borderRadius: '8px', textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ⬇ Télécharger le rapport
                  </a>
                  <a
                    href={r.documentReddition.url}
                    download
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      backgroundColor: 'rgba(201,168,76,0.18)', color: '#C9A84C',
                      fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                      padding: '10px 20px', borderRadius: '8px', textDecoration: 'none',
                      whiteSpace: 'nowrap', border: '1px solid rgba(201,168,76,0.4)',
                    }}
                  >
                    ⬇ Document de reddition
                  </a>
                </div>
              </div>

              {/* Corps */}
              <div style={{ padding: isMobile ? '24px' : '28px 36px' }}>
                {/* Résumé */}
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: '0 0 28px 0', paddingLeft: '16px', borderLeft: '3px solid #C9A84C' }}>
                  {r.resume}
                </p>

                {/* Statistiques clés */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
                  {r.stats.map((stat, i) => (
                    <div key={i} style={{ backgroundColor: '#F8F6F1', borderRadius: '12px', padding: '16px', textAlign: 'center', border: '1px solid #E8E4DC' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', lineHeight: '1' }}>
                        {stat.valeur}
                      </div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A', marginTop: '6px', lineHeight: '1.3' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Documents + Photos */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>

                  {/* Deux fichiers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { ...r.rapport, label: 'Rapport' },
                      { ...r.documentReddition, label: 'Document de reddition' },
                    ].map((fichier, idx) => (
                      <div key={idx} style={{ backgroundColor: '#F8F6F1', borderRadius: '12px', padding: '16px 20px', border: '1px solid #E8E4DC', display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '44px', height: '44px', backgroundColor: '#0A3D2E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                          📄
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>
                            {fichier.label}
                          </div>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#0A3D2E', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {fichier.titre}
                          </div>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A' }}>
                            {fichier.taille}
                          </div>
                        </div>
                        <a href={fichier.url} download style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          backgroundColor: '#0A3D2E', color: '#FFFFFF',
                          fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
                          padding: '7px 12px', borderRadius: '6px', textDecoration: 'none',
                          flexShrink: 0,
                        }}>
                          ⬇
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Photos */}
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                      Photos de la séance
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {r.photos.map((photo, i) => (
                        <div key={i} style={{ flex: 1, aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                          <img src={photo.url} alt={photo.legende} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bloc info légale */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>⚖️</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            Fondement légal
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#6A6A6A', margin: '0 0 12px 0' }}>
            Conformément à la loi n° 97-029 du 15 janvier 1999 portant organisation des communes en République du Bénin, le Maire est tenu de rendre compte de sa gestion devant le conseil communal et la population au moins deux fois par an.
          </p>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#6A6A6A', margin: 0 }}>
            Cette obligation de transparence est au cœur de la démocratie locale et de la bonne gouvernance communale.
          </p>
        </div>
      </section>

    </main>
  )
}
