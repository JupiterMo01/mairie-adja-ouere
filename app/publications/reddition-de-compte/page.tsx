'use client'

import React from 'react'

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
      { url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80", legende: "Séance d'ouverture" },
      { url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80", legende: "Présentation au conseil communal" },
      { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80", legende: "Participation citoyenne" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", legende: "Échanges avec la population" },
      { url: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=800&q=80", legende: "Délibération du conseil" },
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
      { url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80", legende: "Présentation du rapport S1" },
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", legende: "Délibération du conseil" },
      { url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80", legende: "Séance plénière" },
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
      { url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80", legende: "Session de reddition 2024" },
      { url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80", legende: "Présentation citoyenne" },
      { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80", legende: "Remise des documents" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", legende: "Réunion du conseil" },
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

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxRedditionId, setLightboxRedditionId] = React.useState<number | null>(null)
  const [lightboxPhotoIdx, setLightboxPhotoIdx] = React.useState(0)

  const lightboxReddition = redditions.find(r => r.id === lightboxRedditionId) ?? null
  const lightboxPhotos = lightboxReddition?.photos ?? []

  const openLightbox = (redditionId: number, idx: number) => {
    setLightboxRedditionId(redditionId)
    setLightboxPhotoIdx(idx)
    setLightboxOpen(true)
  }

  React.useEffect(() => {
    if (!lightboxOpen) return
    document.body.style.overflow = 'hidden'
    const count = lightboxPhotos.length
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') setLightboxPhotoIdx(i => (i - 1 + count) % count)
      if (e.key === 'ArrowRight') setLightboxPhotoIdx(i => (i + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, lightboxPhotos.length])

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
              <div style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '20px' : '28px 36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: r.type === 'Annuelle' ? '#C9A84C' : 'rgba(201,168,76,0.4)', color: r.type === 'Annuelle' ? '#0A3D2E' : '#C9A84C', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {r.type}
                    </span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                      📅 {r.date}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '20px' : '28px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 6px 0', lineHeight: '1.2' }}>
                    {r.titre}
                  </h2>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    Présenté par : {r.presentes_par}
                  </p>
                </div>
                {/* Boutons téléchargement */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto auto', gap: '8px', justifyContent: 'start' }}>
                  <a
                    href={r.rapport.url}
                    download
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      backgroundColor: '#C9A84C', color: '#0A3D2E',
                      fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                      padding: '10px 20px', borderRadius: '8px', textDecoration: 'none',
                    }}
                  >
                    ⬇ Télécharger le rapport
                  </a>
                  <a
                    href={r.documentReddition.url}
                    download
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      backgroundColor: 'rgba(201,168,76,0.18)', color: '#C9A84C',
                      fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                      padding: '10px 20px', borderRadius: '8px', textDecoration: 'none',
                      border: '1px solid rgba(201,168,76,0.4)',
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
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '28px' }}>

                  {/* Deux fichiers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
                    {[
                      { ...r.rapport, label: 'Rapport' },
                      { ...r.documentReddition, label: 'Document de reddition' },
                    ].map((fichier, idx) => (
                      <div key={idx} style={{ backgroundColor: '#F8F6F1', borderRadius: '12px', padding: '14px 16px', border: '1px solid #E8E4DC', display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#0A3D2E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                          📄
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '700', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>
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
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          backgroundColor: '#0A3D2E', color: '#FFFFFF',
                          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                          width: '36px', height: '36px', borderRadius: '8px', textDecoration: 'none',
                          flexShrink: 0,
                        }}>
                          ⬇
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Galerie photos */}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Photos de la séance
                      <span style={{ backgroundColor: '#E8E4DC', borderRadius: '10px', padding: '1px 8px', fontSize: '10px', color: '#6A6A6A' }}>
                        {r.photos.length}
                      </span>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fill, minmax(90px, 1fr))',
                      gap: '8px',
                    }}>
                      {r.photos.map((photo, i) => (
                        <PhotoThumb
                          key={i}
                          photo={photo}
                          index={i}
                          total={r.photos.length}
                          onClick={() => openLightbox(r.id, i)}
                        />
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

      {/* Lightbox */}
      {lightboxOpen && lightboxReddition && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            backgroundColor: 'rgba(0,0,0,0.93)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Fermer */}
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute', top: '20px', right: '24px',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: '#FFFFFF', fontSize: '20px', cursor: 'pointer',
              borderRadius: '50%', width: '44px', height: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10,
            }}
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Compteur */}
          <div style={{
            position: 'absolute', top: '26px', left: '50%', transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.6)', fontFamily: 'Outfit, sans-serif', fontSize: '13px',
            pointerEvents: 'none',
          }}>
            {lightboxPhotoIdx + 1} / {lightboxPhotos.length}
          </div>

          {/* Flèche gauche */}
          {lightboxPhotos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); setLightboxPhotoIdx(i => (i - 1 + lightboxPhotos.length) % lightboxPhotos.length) }}
              style={{
                position: 'absolute', left: '16px',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: '#FFFFFF', fontSize: '28px', cursor: 'pointer',
                borderRadius: '50%', width: '52px', height: '52px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s ease',
              }}
              aria-label="Photo précédente"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', textAlign: 'center' }}>
            <img
              src={lightboxPhotos[lightboxPhotoIdx].url}
              alt={lightboxPhotos[lightboxPhotoIdx].legende}
              style={{
                maxWidth: '90vw', maxHeight: '80vh',
                objectFit: 'contain', borderRadius: '8px', display: 'block',
                margin: '0 auto',
              }}
            />
            <div style={{
              marginTop: '14px',
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px',
            }}>
              {lightboxPhotos[lightboxPhotoIdx].legende}
            </div>

            {/* Miniatures de navigation */}
            {lightboxPhotos.length > 1 && (
              <div style={{
                display: 'flex', gap: '8px', justifyContent: 'center',
                marginTop: '16px', flexWrap: 'wrap',
              }}>
                {lightboxPhotos.map((p, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setLightboxPhotoIdx(i) }}
                    style={{
                      width: '48px', height: '48px', borderRadius: '6px', overflow: 'hidden',
                      border: `2px solid ${i === lightboxPhotoIdx ? '#C9A84C' : 'transparent'}`,
                      padding: 0, cursor: 'pointer', flexShrink: 0,
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <img src={p.url} alt={p.legende} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Flèche droite */}
          {lightboxPhotos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); setLightboxPhotoIdx(i => (i + 1) % lightboxPhotos.length) }}
              style={{
                position: 'absolute', right: '16px',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: '#FFFFFF', fontSize: '28px', cursor: 'pointer',
                borderRadius: '50%', width: '52px', height: '52px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s ease',
              }}
              aria-label="Photo suivante"
            >
              ›
            </button>
          )}
        </div>
      )}

    </main>
  )
}

const MAX_VISIBLE = 6

function PhotoThumb({ photo, index, total, onClick }: {
  photo: { url: string; legende: string }
  index: number
  total: number
  onClick: () => void
}) {
  const [hovered, setHovered] = React.useState(false)
  const hidden = index >= MAX_VISIBLE
  const isOverlay = index === MAX_VISIBLE - 1 && total > MAX_VISIBLE

  if (hidden) return null

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        aspectRatio: '1',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <img
        src={photo.url}
        alt={photo.legende}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.25s ease',
          display: 'block',
        }}
      />
      {/* Overlay hover */}
      {!isOverlay && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(10,61,46,0.45)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: '#FFFFFF', fontSize: '18px' }}>🔍</span>
        </div>
      )}
      {/* +N overlay sur la dernière miniature visible si plus de photos */}
      {isOverlay && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(10,61,46,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '2px',
        }}>
          <span style={{ color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '700' }}>
            +{total - (MAX_VISIBLE - 1)}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif', fontSize: '10px' }}>
            photos
          </span>
        </div>
      )}
    </div>
  )
}
