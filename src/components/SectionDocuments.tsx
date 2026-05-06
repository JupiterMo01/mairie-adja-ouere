'use client'

import Link from 'next/link'
import React from 'react'
import { documents as tousDocuments } from '@/app/publications/documents/page'

const documents = tousDocuments.slice(0, 5)

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

function DocItem({ doc, animDelay }: { doc: typeof documents[0]; animDelay: number }) {
  const [hovered, setHovered] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)
  const catInfo = categorieLabels[doc.categorie] || categorieLabels.autre

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: hovered ? '#FFFFFF' : '#F8F6F1', borderRadius: '12px', padding: '20px 24px', border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC', boxShadow: hovered ? '0 4px 20px rgba(10,61,46,0.08)' : 'none', transition: 'all 0.2s ease', flexWrap: 'wrap', gap: '16px', animation: 'fadeSlide 0.4s ease both', animationDelay: `${animDelay}s` }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '200px' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: '#0A3D2E', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700' }}>
          {doc.format}
        </div>
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '600', color: '#1C1C1C', marginBottom: '6px', lineHeight: '1.3' }}>{doc.titre}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: catInfo.color, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', padding: '2px 10px', borderRadius: '10px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{catInfo.label}</span>
            {doc.date && <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📅 {doc.date}</span>}
            {doc.taille && <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>💾 {doc.taille}</span>}
          </div>
        </div>
      </div>
      <button
        onClick={() => window.open(doc.url, '_blank')}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: btnHovered ? '#C9A84C' : '#0A3D2E', color: btnHovered ? '#0A3D2E' : '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s ease' }}
      >
        ⬇ Télécharger
      </button>
    </div>
  )
}

export default function SectionDocuments() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Bibliothèque</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Documents récents</h2>
          </div>
          <Link href="/publications/documents" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir tous les documents →</Link>
        </div>

        {documents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun document disponible</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les documents seront publiés prochainement.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {documents.map((doc, i) => <DocItem key={doc.id} doc={doc} animDelay={i * 0.07} />)}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
