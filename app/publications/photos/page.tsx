'use client'

import React from 'react'

const albums = [
  {
    id: 1,
    titre: "Cérémonie de remise de diplômes 2026",
    categorie: "evenement",
    annee: 2026,
    date: "18 Avril 2026",
    nbPhotos: 24,
    couverture: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80", legende: "Remise des diplômes par le Maire" },
      { id: 2, url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80", legende: "Les lauréats sur scène" },
      { id: 3, url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80", legende: "Discours des autorités" },
      { id: 4, url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=80", legende: "Parents et élèves réunis" },
    ],
  },
  {
    id: 2,
    titre: "Inauguration du marché de Massè",
    categorie: "evenement",
    annee: 2026,
    date: "01 Mars 2026",
    nbPhotos: 18,
    couverture: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80", legende: "Coupure du ruban inaugural" },
      { id: 2, url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80", legende: "Vue d'ensemble du marché" },
      { id: 3, url: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80", legende: "Les commerçants à l'œuvre" },
    ],
  },
  {
    id: 3,
    titre: "Chantier centre de santé d'Ikpinle",
    categorie: "projet",
    annee: 2026,
    date: "Fév 2026",
    nbPhotos: 12,
    couverture: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80", legende: "Avancement des travaux" },
      { id: 2, url: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?w=1200&q=80", legende: "Pose de la première pierre" },
      { id: 3, url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80", legende: "Les ouvriers sur le chantier" },
    ],
  },
  {
    id: 4,
    titre: "Session ordinaire du conseil communal",
    categorie: "vie_communale",
    annee: 2026,
    date: "15 Mars 2026",
    nbPhotos: 8,
    couverture: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80", legende: "Ouverture de la session" },
      { id: 2, url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=80", legende: "Les conseillers en délibération" },
      { id: 3, url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80", legende: "Vote des délibérations" },
    ],
  },
  {
    id: 5,
    titre: "Électrification de Kpoulou",
    categorie: "projet",
    annee: 2026,
    date: "Jan 2026",
    nbPhotos: 15,
    couverture: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=1200&q=80", legende: "Installation des poteaux électriques" },
      { id: 2, url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80", legende: "Première mise en service" },
      { id: 3, url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80", legende: "Les habitants bénéficiaires" },
    ],
  },
  {
    id: 6,
    titre: "Journée de salubrité publique",
    categorie: "vie_communale",
    annee: 2026,
    date: "22 Mars 2026",
    nbPhotos: 20,
    couverture: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80", legende: "Nettoyage des espaces publics" },
      { id: 2, url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", legende: "Les volontaires à l'œuvre" },
      { id: 3, url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80", legende: "Collecte des déchets" },
    ],
  },
  {
    id: 7,
    titre: "Festival culturel des peuples Adja 2025",
    categorie: "evenement",
    annee: 2025,
    date: "Juin 2025",
    nbPhotos: 42,
    couverture: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80", legende: "Danses traditionnelles" },
      { id: 2, url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80", legende: "Exposition artisanale" },
      { id: 3, url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80", legende: "Spectacle de musique traditionnelle" },
      { id: 4, url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80", legende: "La foule des spectateurs" },
    ],
  },
  {
    id: 8,
    titre: "Réhabilitation des pistes rurales 2025",
    categorie: "projet",
    annee: 2025,
    date: "Août 2025",
    nbPhotos: 16,
    couverture: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=1200&q=80", legende: "Travaux de rechargement en latérite" },
      { id: 2, url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80", legende: "Piste terminée à Kpoulou" },
      { id: 3, url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80", legende: "Transport agricole facilité" },
    ],
  },
  {
    id: 9,
    titre: "Campagne de vaccination 2025",
    categorie: "vie_communale",
    annee: 2025,
    date: "Fév 2025",
    nbPhotos: 11,
    couverture: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80", legende: "Vaccination des enfants à Ikpinle" },
      { id: 2, url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80", legende: "Agents de santé en action" },
      { id: 3, url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80", legende: "Sensibilisation des parents" },
    ],
  },
]

const categories = [
  { key: 'toutes', label: 'Toutes', color: '#0A3D2E' },
  { key: 'evenement', label: 'Événements', color: '#9C27B0' },
  { key: 'projet', label: 'Projets', color: '#4CAF50' },
  { key: 'vie_communale', label: 'Vie communale', color: '#2196F3' },
]

const annees = ['Toutes', ...Array.from(new Set(albums.map(a => a.annee))).sort((a, b) => b - a).map(String)]

function getCategorieInfo(key: string) {
  return categories.find(c => c.key === key) || categories[0]
}

function Lightbox({
  photos,
  albumTitre,
  indexActif,
  onClose,
  onPrev,
  onNext,
}: {
  photos: { id: number; url: string; legende: string }[]
  albumTitre: string
  indexActif: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const photo = photos[indexActif]

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* Bouton fermer */}
      <button onClick={onClose} style={{
        position: 'fixed', top: '20px', right: '20px',
        width: '44px', height: '44px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
        cursor: 'pointer', color: '#FFFFFF', fontSize: '22px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2001,
      }}>×</button>

      {/* Compteur */}
      <div style={{
        position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)',
        zIndex: 2001, textAlign: 'center',
      }}>
        <div>{albumTitre}</div>
        <div style={{ marginTop: '4px' }}>{indexActif + 1} / {photos.length}</div>
      </div>

      {/* Flèche gauche */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        style={{
          position: 'fixed', left: '16px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
          cursor: 'pointer', color: '#FFFFFF', fontSize: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2001,
        }}
      >‹</button>

      {/* Flèche droite */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        style={{
          position: 'fixed', right: '16px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
          cursor: 'pointer', color: '#FFFFFF', fontSize: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2001,
        }}
      >›</button>

      {/* Image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '960px', width: '100%' }}
      >
        <img
          src={photo.url}
          alt={photo.legende}
          style={{
            width: '100%', maxHeight: '72vh', objectFit: 'contain',
            borderRadius: '12px 12px 0 0', display: 'block',
          }}
        />
        <div style={{
          backgroundColor: '#1A1A1A', borderRadius: '0 0 12px 12px',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: '#FFFFFF' }}>
            {photo.legende}
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            ← → pour naviguer · Échap pour fermer
          </div>
        </div>

        {/* Miniatures */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
          {photos.map((p, i) => (
            <div
              key={p.id}
              onClick={e => { e.stopPropagation(); }}
              style={{
                width: '64px', height: '48px', flexShrink: 0,
                borderRadius: '6px', overflow: 'hidden', cursor: 'pointer',
                border: i === indexActif ? '2px solid #C9A84C' : '2px solid transparent',
                opacity: i === indexActif ? 1 : 0.5,
                transition: 'all 0.2s ease',
              }}
              onClick={e => { e.stopPropagation(); onClose(); }}
            >
              <img src={p.url} alt={p.legende} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AlbumModal({
  album,
  onClose,
}: {
  album: typeof albums[0]
  onClose: () => void
}) {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)
  const catInfo = getCategorieInfo(album.categorie)

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && lightboxIndex === null) onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, lightboxIndex])

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          backgroundColor: 'rgba(10,61,46,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF', borderRadius: '20px',
            maxWidth: '800px', width: '100%',
            maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
          }}
        >
          {/* Header */}
          <div style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
            <img src={album.couverture} alt={album.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,61,46,0.2) 0%, rgba(10,61,46,0.8) 100%)' }} />
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                width: '32px', height: '32px', borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)', border: 'none',
                cursor: 'pointer', color: '#FFFFFF', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
            <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <span style={{
                  backgroundColor: catInfo.color, color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
                  padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase',
                }}>{catInfo.label}</span>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
                  padding: '4px 12px', borderRadius: '20px',
                }}>📷 {album.nbPhotos} photos</span>
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.2' }}>
                {album.titre}
              </h2>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
                📅 {album.date}
              </div>
            </div>
          </div>

          {/* Grille photos */}
          <div style={{ padding: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
              Aperçu — {album.photos.length} photos disponibles sur {album.nbPhotos}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
              {album.photos.map((photo, i) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    position: 'relative', height: '140px', borderRadius: '10px',
                    overflow: 'hidden', cursor: 'pointer',
                  }}
                >
                  <img src={photo.url} alt={photo.legende} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                    display: 'flex', alignItems: 'flex-end', padding: '10px',
                  }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#FFFFFF', lineHeight: '1.3' }}>{photo.legende}</span>
                  </div>
                  <div style={{
                    position: 'absolute', top: '8px', right: '8px',
                    width: '28px', height: '28px', borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px',
                  }}>🔍</div>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              style={{
                width: '100%', marginTop: '20px', padding: '12px',
                borderRadius: '10px', backgroundColor: '#F8F6F1',
                border: '1px solid #E8E4DC',
                fontFamily: 'Outfit, sans-serif', fontSize: '14px',
                fontWeight: '600', color: '#0A3D2E', cursor: 'pointer',
              }}
            >Fermer</button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={album.photos}
          albumTitre={album.titre}
          indexActif={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(lightboxIndex === 0 ? album.photos.length - 1 : lightboxIndex - 1)}
          onNext={() => setLightboxIndex(lightboxIndex === album.photos.length - 1 ? 0 : lightboxIndex + 1)}
        />
      )}
    </>
  )
}

function AlbumCard({ album, onOpen }: { album: typeof albums[0]; onOpen: () => void }) {
  const [hovered, setHovered] = React.useState(false)
  const catInfo = getCategorieInfo(album.categorie)

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
      }}
    >
      {/* Couverture */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={album.couverture} alt={album.titre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />

        {/* Badge catégorie */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          backgroundColor: catInfo.color, color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
          padding: '3px 10px', borderRadius: '10px', textTransform: 'uppercase',
        }}>{catInfo.label}</div>

        {/* Nombre de photos */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          backgroundColor: 'rgba(0,0,0,0.6)', color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
          padding: '3px 10px', borderRadius: '10px',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          📷 {album.nbPhotos}
        </div>

        {/* Icône ouvrir */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px',
          }}>▶</div>
        </div>
      </div>

      {/* Infos */}
      <div style={{ padding: '18px 20px' }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '18px',
          fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0', lineHeight: '1.3',
        }}>
          {album.titre}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📅 {album.date}</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: hovered ? '#C9A84C' : '#0A3D2E', transition: 'color 0.2s' }}>
            Voir l'album →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function GaleriePage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreCategorie, setFiltreCategorie] = React.useState('toutes')
  const [filtreAnnee, setFiltreAnnee] = React.useState('Toutes')
  const [albumOuvert, setAlbumOuvert] = React.useState<typeof albums[0] | null>(null)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const albumsFiltres = albums.filter(a => {
    const matchCat = filtreCategorie === 'toutes' || a.categorie === filtreCategorie
    const matchAnnee = filtreAnnee === 'Toutes' || a.annee === Number(filtreAnnee)
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
            Galerie photos
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Parcourez les albums photos de la Commune d'Adja-Ouere : événements, projets, vie communale et bien plus encore.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: albums.length, label: 'Albums' },
              { val: albums.reduce((acc, a) => acc + a.nbPhotos, 0), label: 'Photos au total' },
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
              {albumsFiltres.length} album{albumsFiltres.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Grille albums */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {albumsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📷</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E' }}>Aucun album trouvé</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
              {albumsFiltres.map(album => (
                <AlbumCard key={album.id} album={album} onOpen={() => setAlbumOuvert(album)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal album */}
      {albumOuvert && <AlbumModal album={albumOuvert} onClose={() => setAlbumOuvert(null)} />}
    </main>
  )
}