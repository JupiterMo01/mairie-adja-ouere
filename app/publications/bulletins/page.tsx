'use client'

import React from 'react'

const bulletins = [
  {
    id: 1,
    numero: "N°008",
    titre: "Bulletin d'information communal",
    edition: "1er trimestre 2026",
    date: "Mars 2026",
    annee: 2026,
    couverture: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    taille: "4.2 MB",
    url: "#",
    themes: ["Budget 2026", "Nouveaux projets", "Vie institutionnelle"],
    resume: "Ce numéro présente le budget primitif 2026 adopté par le conseil communal, le lancement de trois nouveaux projets d'infrastructure et les résultats de la reddition de compte 2025.",
  },
  {
    id: 2,
    numero: "N°007",
    titre: "Bulletin d'information communal",
    edition: "4ème trimestre 2025",
    date: "Déc 2025",
    annee: 2025,
    couverture: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&q=80",
    taille: "3.8 MB",
    url: "#",
    themes: ["Reddition de compte", "Santé", "Éducation"],
    resume: "Bilan de l'exercice 2025 avec un taux d'exécution budgétaire de 87%. Focus sur les avancées dans les secteurs de la santé et de l'éducation.",
  },
  {
    id: 3,
    numero: "N°006",
    titre: "Bulletin d'information communal",
    edition: "3ème trimestre 2025",
    date: "Sep 2025",
    annee: 2025,
    couverture: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80",
    taille: "3.5 MB",
    url: "#",
    themes: ["Environnement", "Agriculture", "Tourisme"],
    resume: "Dossier spécial sur le programme de reboisement, les avancées agricoles de la commune et les atouts touristiques d'Adja-Ouere.",
  },
  {
    id: 4,
    numero: "N°005",
    titre: "Bulletin d'information communal",
    edition: "2ème trimestre 2025",
    date: "Jun 2025",
    annee: 2025,
    couverture: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=600&q=80",
    taille: "4.0 MB",
    url: "#",
    themes: ["Jeunesse", "Culture", "Sport"],
    resume: "Numéro spécial jeunesse avec le forum des entrepreneurs, le festival culturel des peuples Adja et le tournoi sportif intercommunal.",
  },
  {
    id: 5,
    numero: "N°004",
    titre: "Bulletin d'information communal",
    edition: "1er trimestre 2025",
    date: "Mars 2025",
    annee: 2025,
    couverture: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    taille: "3.2 MB",
    url: "#",
    themes: ["Infrastructure", "Eau potable", "Électrification"],
    resume: "Présentation des grands chantiers en cours : électrification rurale, adduction d'eau potable et réhabilitation des pistes dans les six arrondissements.",
  },
  {
    id: 6,
    numero: "N°003",
    titre: "Bulletin d'information communal",
    edition: "4ème trimestre 2024",
    date: "Déc 2024",
    annee: 2024,
    couverture: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&q=80",
    taille: "3.6 MB",
    url: "#",
    themes: ["Bilan annuel", "Gouvernance", "Finances locales"],
    resume: "Bilan complet de l'année 2024, présentation des finances locales et des perspectives pour 2025.",
  },
  {
    id: 7,
    numero: "N°002",
    titre: "Bulletin d'information communal",
    edition: "2ème trimestre 2024",
    date: "Jun 2024",
    annee: 2024,
    couverture: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80",
    taille: "2.9 MB",
    url: "#",
    themes: ["Décentralisation", "Participation citoyenne", "Développement local"],
    resume: "Dossier sur la décentralisation au Bénin, les mécanismes de participation citoyenne et les initiatives de développement local portées par la commune.",
  },
  {
    id: 8,
    numero: "N°001",
    titre: "Bulletin d'information communal",
    edition: "1er trimestre 2024",
    date: "Mars 2024",
    annee: 2024,
    couverture: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=600&q=80",
    taille: "2.5 MB",
    url: "#",
    themes: ["Présentation", "Vision communale", "Plan de développement"],
    resume: "Premier numéro du bulletin d'information communal. Présentation de la vision du Maire, du plan de développement communal 2024-2028 et des grands axes stratégiques.",
  },
]

const annees = ['Toutes', ...Array.from(new Set(bulletins.map(b => b.annee))).sort((a, b) => b - a).map(String)]

const themeColors: { [key: string]: string } = {
  "Budget 2026": "#2196F3", "Nouveaux projets": "#4CAF50", "Vie institutionnelle": "#9C27B0",
  "Reddition de compte": "#F44336", "Santé": "#E91E63", "Éducation": "#3F51B5",
  "Environnement": "#4CAF50", "Agriculture": "#8BC34A", "Tourisme": "#FF9800",
  "Jeunesse": "#FF5722", "Culture": "#9C27B0", "Sport": "#F44336",
  "Infrastructure": "#607D8B", "Eau potable": "#00BCD4", "Électrification": "#FFC107",
  "Bilan annuel": "#795548", "Gouvernance": "#0A3D2E", "Finances locales": "#2196F3",
  "Décentralisation": "#673AB7", "Participation citoyenne": "#009688", "Développement local": "#4CAF50",
  "Présentation": "#0A3D2E", "Vision communale": "#C9A84C", "Plan de développement": "#FF9800",
}

function getThemeColor(theme: string) {
  return themeColors[theme] || '#607D8B'
}

function BulletinCard({ bulletin }: { bulletin: typeof bulletins[0] }) {
  const [hovered, setHovered] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden',
        boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 12px rgba(0,0,0,0.06)',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Couverture */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#0A3D2E' }}>
        <img
          src={bulletin.couverture} alt={bulletin.titre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            opacity: 0.7,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,61,46,0.8) 0%, rgba(10,61,46,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            backgroundColor: '#C9A84C', borderRadius: '8px',
            padding: '6px 14px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '800', color: '#0A3D2E', letterSpacing: '1px' }}>
              {bulletin.numero}
            </span>
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
              {bulletin.edition}
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2' }}>
              {bulletin.titre}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>
              📅 {bulletin.date} · 💾 {bulletin.taille}
            </div>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{
          fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px',
          lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 16px 0',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden', flex: 1,
        }}>
          {bulletin.resume}
        </p>

        {/* Thèmes */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
          {bulletin.themes.map(theme => (
            <span key={theme} style={{
              backgroundColor: getThemeColor(theme) + '18',
              color: getThemeColor(theme),
              border: `1px solid ${getThemeColor(theme)}40`,
              fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
              padding: '3px 10px', borderRadius: '10px',
            }}>{theme}</span>
          ))}
        </div>

        <button
          onClick={() => window.open(bulletin.url, '_blank')}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            width: '100%', padding: '11px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            backgroundColor: btnHovered ? '#C9A84C' : '#0A3D2E',
            color: btnHovered ? '#0A3D2E' : '#FFFFFF',
            fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
            borderRadius: '10px', border: 'none', cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          ⬇ Télécharger le bulletin PDF
        </button>
      </div>
    </div>
  )
}

export default function BulletinsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreAnnee, setFiltreAnnee] = React.useState('Toutes')
  const [recherche, setRecherche] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const bulletinsFiltres = bulletins.filter(b => {
    const matchAnnee = filtreAnnee === 'Toutes' || b.annee === Number(filtreAnnee)
    const matchSearch = recherche === '' ||
      b.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      b.numero.toLowerCase().includes(recherche.toLowerCase()) ||
      b.edition.toLowerCase().includes(recherche.toLowerCase()) ||
      b.themes.some(t => t.toLowerCase().includes(recherche.toLowerCase())) ||
      b.resume.toLowerCase().includes(recherche.toLowerCase())
    return matchAnnee && matchSearch
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
            Bulletins d'information
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Retrouvez tous les bulletins d'information trimestriels de la Commune d'Adja-Ouere, votre lien direct avec la vie institutionnelle et les projets de développement.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: bulletins.length, label: 'Bulletins publiés' },
              { val: annees.length - 1, label: 'Années' },
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
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'space-between' }}>

          {/* Années */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
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
          </div>

          {/* Recherche */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', pointerEvents: 'none' }}>🔍</span>
            <input
              type="text"
              placeholder="Rechercher un bulletin..."
              value={recherche}
              onChange={e => setRecherche(e.target.value)}
              style={{
                width: '100%', padding: '8px 14px 8px 36px',
                fontFamily: 'Outfit, sans-serif', fontSize: '13px',
                border: '1px solid #E8E4DC', borderRadius: '20px',
                outline: 'none', backgroundColor: '#F8F6F1',
                boxSizing: 'border-box' as const,
              }}
            />
          </div>
        </div>
      </section>

      {/* Liste bulletins */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '32px' }}>
            {bulletinsFiltres.length} bulletin{bulletinsFiltres.length > 1 ? 's' : ''} trouvé{bulletinsFiltres.length > 1 ? 's' : ''}
            {filtreAnnee !== 'Toutes' && ` · ${filtreAnnee}`}
            {recherche && ` · "${recherche}"`}
          </div>

          {bulletinsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📰</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun bulletin trouvé</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres critères</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
              {bulletinsFiltres.map(bulletin => (
                <BulletinCard key={bulletin.id} bulletin={bulletin} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}