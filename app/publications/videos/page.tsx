'use client'

import React from 'react'

const videos = [
  {
    id: 1,
    titre: "Cérémonie d'inauguration du marché de Massè",
    categorie: "evenement",
    annee: 2026,
    date: "01 Mars 2026",
    duree: "12:34",
    youtubeId: "dQw4w9WgXcQ",
    description: "Retour en images sur l'inauguration officielle du nouveau marché de Massè en présence du Maire et des autorités locales.",
    vues: "1.2k",
  },
  {
    id: 2,
    titre: "Session ordinaire du conseil communal — Mars 2026",
    categorie: "institutionnel",
    annee: 2026,
    date: "15 Mars 2026",
    duree: "45:20",
    youtubeId: "dQw4w9WgXcQ",
    description: "Intégralité de la session ordinaire du conseil communal du mois de mars 2026.",
    vues: "856",
  },
  {
    id: 3,
    titre: "Avancement du chantier du centre de santé d'Ikpinle",
    categorie: "projet",
    annee: 2026,
    date: "Fév 2026",
    duree: "8:15",
    youtubeId: "dQw4w9WgXcQ",
    description: "Visite du chantier du centre de santé d'Ikpinle avec le directeur des services techniques.",
    vues: "643",
  },
  {
    id: 4,
    titre: "Discours du Maire — Vœux 2026",
    categorie: "institutionnel",
    annee: 2026,
    date: "02 Jan 2026",
    duree: "6:48",
    youtubeId: "dQw4w9WgXcQ",
    description: "Message de vœux du Maire de la Commune d'Adja-Ouere à l'occasion de la nouvelle année 2026.",
    vues: "2.1k",
  },
  {
    id: 5,
    titre: "Forum des jeunes entrepreneurs — Édition 2026",
    categorie: "evenement",
    annee: 2026,
    date: "05 Avr 2026",
    duree: "22:10",
    youtubeId: "dQw4w9WgXcQ",
    description: "Résumé du forum des jeunes entrepreneurs avec les témoignages des lauréats et des partenaires.",
    vues: "980",
  },
  {
    id: 6,
    titre: "Inauguration du stade municipal rénové",
    categorie: "projet",
    annee: 2026,
    date: "Jan 2026",
    duree: "15:02",
    youtubeId: "dQw4w9WgXcQ",
    description: "Découverte du stade municipal entièrement rénové, doté de nouvelles tribunes et d'un éclairage LED.",
    vues: "1.5k",
  },
  {
    id: 7,
    titre: "Festival culturel des peuples Adja 2025",
    categorie: "evenement",
    annee: 2025,
    date: "Juin 2025",
    duree: "28:45",
    youtubeId: "dQw4w9WgXcQ",
    description: "Captation complète du festival culturel annuel avec les danses traditionnelles et l'exposition artisanale.",
    vues: "3.4k",
  },
  {
    id: 8,
    titre: "Reddition de compte 2025 — Bilan annuel",
    categorie: "institutionnel",
    annee: 2025,
    date: "Déc 2025",
    duree: "38:30",
    youtubeId: "dQw4w9WgXcQ",
    description: "Présentation officielle du bilan de l'exercice 2025 par le Maire devant le conseil communal.",
    vues: "1.8k",
  },
  {
    id: 9,
    titre: "Adja-Ouere, terre de cultures — Documentaire",
    categorie: "documentaire",
    annee: 2025,
    date: "Sep 2025",
    duree: "18:22",
    youtubeId: "dQw4w9WgXcQ",
    description: "Court documentaire sur le patrimoine culturel et naturel de la Commune d'Adja-Ouere.",
    vues: "4.2k",
  },
  {
    id: 10,
    titre: "Campagne de vaccination — Reportage",
    categorie: "vie_communale",
    annee: 2025,
    date: "Fév 2025",
    duree: "7:55",
    youtubeId: "dQw4w9WgXcQ",
    description: "Reportage sur la grande campagne de vaccination organisée dans les six arrondissements.",
    vues: "762",
  },
]

const categories = [
  { key: 'toutes', label: 'Toutes', color: '#0A3D2E' },
  { key: 'evenement', label: 'Événements', color: '#9C27B0' },
  { key: 'projet', label: 'Projets', color: '#4CAF50' },
  { key: 'institutionnel', label: 'Institutionnel', color: '#2196F3' },
  { key: 'vie_communale', label: 'Vie communale', color: '#FF9800' },
  { key: 'documentaire', label: 'Documentaire', color: '#F44336' },
]

const annees = ['Toutes', ...Array.from(new Set(videos.map(v => v.annee))).sort((a, b) => b - a).map(String)]

function getCategorieInfo(key: string) {
  return categories.find(c => c.key === key) || categories[0]
}

function VideoModal({ video, onClose }: { video: typeof videos[0]; onClose: () => void }) {
  const catInfo = getCategorieInfo(video.categorie)

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '900px', width: '100%',
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Lecteur YouTube */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%', border: 0,
            }}
          />
        </div>

        {/* Infos */}
        <div style={{ backgroundColor: '#1A1A1A', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  backgroundColor: catInfo.color, color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
                  padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase',
                }}>{catInfo.label}</span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                  ⏱ {video.duree}
                </span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                  👁 {video.vues} vues
                </span>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                {video.titre}
              </h3>
              <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '1.6' }}>
                {video.description}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: '8px 20px', borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px',
                fontWeight: '600', cursor: 'pointer', flexShrink: 0,
              }}
            >Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard({ video, onOpen }: { video: typeof videos[0]; onOpen: () => void }) {
  const [hovered, setHovered] = React.useState(false)
  const catInfo = getCategorieInfo(video.categorie)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 12px rgba(0,0,0,0.06)',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#0A3D2E' }}>
        <img
          src={thumbnailUrl}
          alt={video.titre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered
            ? 'rgba(0,0,0,0.3)'
            : 'rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
        }} />

        {/* Bouton play */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: hovered ? '64px' : '56px',
            height: hovered ? '64px' : '56px',
            borderRadius: '50%',
            backgroundColor: hovered ? '#FF0000' : 'rgba(255,255,255,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: `16px solid ${hovered ? '#FFFFFF' : '#FF0000'}`,
              marginLeft: '4px',
              transition: 'all 0.3s ease',
            }} />
          </div>
        </div>

        {/* Badge catégorie */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          backgroundColor: catInfo.color, color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
          padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase',
        }}>{catInfo.label}</div>

        {/* Durée */}
        <div style={{
          position: 'absolute', bottom: '12px', right: '12px',
          backgroundColor: 'rgba(0,0,0,0.8)', color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
          padding: '3px 8px', borderRadius: '6px',
        }}>{video.duree}</div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '18px',
          fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0',
          lineHeight: '1.3', flex: 1,
        }}>
          {video.titre}
        </h3>
        <p style={{
          fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px',
          lineHeight: '1.6', color: '#6A6A6A', margin: '0 0 14px 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>
          {video.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E8E4DC', paddingTop: '12px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A' }}>📅 {video.date}</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A' }}>👁 {video.vues}</span>
          </div>
          <span style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
            color: hovered ? '#C9A84C' : '#0A3D2E', transition: 'color 0.2s',
          }}>▶ Regarder</span>
        </div>
      </div>
    </div>
  )
}

export default function VideosPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreCategorie, setFiltreCategorie] = React.useState('toutes')
  const [filtreAnnee, setFiltreAnnee] = React.useState('Toutes')
  const [videoOuverte, setVideoOuverte] = React.useState<typeof videos[0] | null>(null)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const videosFiltrees = videos.filter(v => {
    const matchCat = filtreCategorie === 'toutes' || v.categorie === filtreCategorie
    const matchAnnee = filtreAnnee === 'Toutes' || v.annee === Number(filtreAnnee)
    return matchCat && matchAnnee
  })

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Publications</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Vidéos
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Suivez en vidéo les événements, projets et moments forts de la vie de la Commune d'Adja-Ouere.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: videos.length, label: 'Vidéos disponibles' },
              { val: categories.length - 1, label: 'Catégories' },
              { val: annees.length - 1, label: 'Années couvertes' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>{s.val}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '20px 24px' : '24px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Catégorie */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Catégorie :</span>
            {categories.map(cat => (
              <button key={cat.key} onClick={() => setFiltreCategorie(cat.key)} style={{
                padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                borderColor: filtreCategorie === cat.key ? cat.color : '#E8E4DC',
                backgroundColor: filtreCategorie === cat.key ? cat.color : '#FFFFFF',
                color: filtreCategorie === cat.key ? '#FFFFFF' : '#4A4A4A',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{cat.label}</button>
            ))}
          </div>

          {/* Année */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Année :</span>
            {annees.map(an => (
              <button key={an} onClick={() => setFiltreAnnee(an)} style={{
                padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                borderColor: filtreAnnee === an ? '#0A3D2E' : '#E8E4DC',
                backgroundColor: filtreAnnee === an ? '#0A3D2E' : '#FFFFFF',
                color: filtreAnnee === an ? '#FFFFFF' : '#4A4A4A',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{an}</button>
            ))}
            <span style={{ marginLeft: 'auto', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#9A9A9A' }}>
              {videosFiltrees.length} vidéo{videosFiltrees.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Grille vidéos */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {videosFiltrees.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎬</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E' }}>Aucune vidéo trouvée</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
              {videosFiltrees.map(video => (
                <VideoCard key={video.id} video={video} onOpen={() => setVideoOuverte(video)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal vidéo */}
      {videoOuverte && <VideoModal video={videoOuverte} onClose={() => setVideoOuverte(null)} />}
    </main>
  )
}