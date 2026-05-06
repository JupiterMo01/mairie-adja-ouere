'use client'

import React from 'react'

export const documents = [
  {
    id: 1,
    titre: "Budget primitif 2026",
    categorie: "rapport",
    date: "15 Jan 2026",
    annee: 2026,
    taille: "2.4 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 2,
    titre: "Plan de développement communal 2025-2029",
    categorie: "planification",
    date: "10 Jan 2026",
    annee: 2026,
    taille: "5.1 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 3,
    titre: "Procès-verbal session ordinaire décembre 2025",
    categorie: "proces_verbal",
    date: "05 Jan 2026",
    annee: 2026,
    taille: "1.2 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 4,
    titre: "Arrêté municipal N°012 portant réglementation du marché",
    categorie: "arrete",
    date: "28 Déc 2025",
    annee: 2025,
    taille: "0.8 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 5,
    titre: "Rapport annuel d'activités 2025",
    categorie: "rapport",
    date: "20 Déc 2025",
    annee: 2025,
    taille: "3.7 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 6,
    titre: "Procès-verbal session ordinaire septembre 2025",
    categorie: "proces_verbal",
    date: "15 Oct 2025",
    annee: 2025,
    taille: "1.0 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 7,
    titre: "Décret portant nomination des chefs d'arrondissement",
    categorie: "decret",
    date: "01 Oct 2025",
    annee: 2025,
    taille: "0.5 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 8,
    titre: "Manuel de procédures administratives",
    categorie: "manuel",
    date: "15 Sep 2025",
    annee: 2025,
    taille: "4.2 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 9,
    titre: "Budget rectificatif 2025",
    categorie: "rapport",
    date: "30 Juil 2025",
    annee: 2025,
    taille: "2.1 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 10,
    titre: "Plan d'urbanisme de la commune 2024-2034",
    categorie: "planification",
    date: "20 Mar 2025",
    annee: 2025,
    taille: "8.3 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 11,
    titre: "Rapport d'audit interne 2024",
    categorie: "rapport",
    date: "10 Jan 2025",
    annee: 2025,
    taille: "3.1 MB",
    format: "PDF",
    url: "#",
  },
  {
    id: 12,
    titre: "Loi sur la décentralisation au Bénin",
    categorie: "loi",
    date: "05 Jun 2024",
    annee: 2024,
    taille: "1.9 MB",
    format: "PDF",
    url: "#",
  },
]

const categorieLabels: { [key: string]: { label: string; color: string } } = {
  rapport: { label: "Rapport", color: "#2196F3" },
  planification: { label: "Planification", color: "#4CAF50" },
  proces_verbal: { label: "PV", color: "#9C27B0" },
  arrete: { label: "Arrêté", color: "#FF9800" },
  loi: { label: "Loi", color: "#F44336" },
  decret: { label: "Décret", color: "#00BCD4" },
  manuel: { label: "Manuel", color: "#795548" },
  autre: { label: "Autre", color: "#607D8B" },
}

const categories = ['Toutes', ...Object.keys(categorieLabels)]
const annees = ['Toutes', ...Array.from(new Set(documents.map(d => d.annee))).sort((a, b) => b - a).map(String)]

function DocItem({ doc }: { doc: typeof documents[0] }) {
  const [hovered, setHovered] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)
  const catInfo = categorieLabels[doc.categorie] || categorieLabels.autre

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: hovered ? '#FFFFFF' : '#F8F6F1',
        borderRadius: '12px', padding: '20px 24px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 4px 20px rgba(10,61,46,0.08)' : 'none',
        transition: 'all 0.2s ease',
        flexWrap: 'wrap', gap: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '200px' }}>
        {/* Icône format */}
        <div style={{
          width: '48px', height: '48px',
          backgroundColor: '#0A3D2E', borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
        }}>
          {doc.format}
        </div>

        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '600', color: '#1C1C1C', marginBottom: '6px', lineHeight: '1.3' }}>
            {doc.titre}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{
              backgroundColor: catInfo.color, color: '#FFFFFF',
              fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
              padding: '2px 10px', borderRadius: '10px',
              letterSpacing: '0.5px', textTransform: 'uppercase',
            }}>
              {catInfo.label}
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📅 {doc.date}</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>💾 {doc.taille}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.open(doc.url, '_blank')}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: btnHovered ? '#C9A84C' : '#0A3D2E',
          color: btnHovered ? '#0A3D2E' : '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
          padding: '10px 20px', borderRadius: '8px', border: 'none',
          cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s ease',
        }}
      >
        ⬇ Télécharger
      </button>
    </div>
  )
}

export default function DocumentsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreCategorie, setFiltreCategorie] = React.useState('Toutes')
  const [filtreAnnee, setFiltreAnnee] = React.useState('Toutes')
  const [recherche, setRecherche] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const documentsFiltres = documents.filter(d => {
    const matchCat = filtreCategorie === 'Toutes' || d.categorie === filtreCategorie
    const matchAnnee = filtreAnnee === 'Toutes' || d.annee === Number(filtreAnnee)
    const matchSearch = recherche === '' ||
      d.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      categorieLabels[d.categorie]?.label.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchAnnee && matchSearch
  })

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Bibliothèque
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Documents officiels
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Accédez à tous les documents officiels de la Commune d'Adja-Ouere : rapports, arrêtés, procès-verbaux, plans et textes réglementaires.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: documents.length, label: 'Documents disponibles' },
              { val: Object.keys(categorieLabels).length, label: 'Catégories' },
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
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '20px 24px' : '28px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Catégorie + recherche */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Catégorie :</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFiltreCategorie(cat)}
                  style={{
                    padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                    borderColor: filtreCategorie === cat ? (categorieLabels[cat]?.color || '#0A3D2E') : '#E8E4DC',
                    backgroundColor: filtreCategorie === cat ? (categorieLabels[cat]?.color || '#0A3D2E') : '#FFFFFF',
                    color: filtreCategorie === cat ? '#FFFFFF' : '#4A4A4A',
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  {cat === 'Toutes' ? 'Toutes' : categorieLabels[cat]?.label}
                </button>
              ))}
            </div>

            {/* Recherche */}
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', pointerEvents: 'none' }}>🔍</span>
              <input
                type="text"
                placeholder="Rechercher un document..."
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

          {/* Années */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Année :</span>
            {annees.map(an => (
              <button
                key={an}
                onClick={() => setFiltreAnnee(an)}
                style={{
                  padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                  borderColor: filtreAnnee === an ? '#0A3D2E' : '#E8E4DC',
                  backgroundColor: filtreAnnee === an ? '#0A3D2E' : '#FFFFFF',
                  color: filtreAnnee === an ? '#FFFFFF' : '#4A4A4A',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >{an}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste documents */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Compteur */}
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '24px' }}>
            {documentsFiltres.length} document{documentsFiltres.length > 1 ? 's' : ''} trouvé{documentsFiltres.length > 1 ? 's' : ''}
            {filtreCategorie !== 'Toutes' && ` · ${categorieLabels[filtreCategorie]?.label}`}
            {filtreAnnee !== 'Toutes' && ` · ${filtreAnnee}`}
            {recherche && ` · "${recherche}"`}
          </div>

          {documentsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun document trouvé</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres critères</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {documentsFiltres.map(doc => (
                <DocItem key={doc.id} doc={doc} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}