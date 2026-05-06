'use client'

import Link from 'next/link'
import { actualites as toutesActualites } from '@/app/publications/actualites/page'

const categorieColors: { [key: string]: string } = {
  "Réunion": "#2196F3",
  "Événement": "#9C27B0",
  "Projet": "#4CAF50",
  "Session": "#FF9800",
  "Reddition de compte": "#F44336",
  "Communiqué": "#00BCD4",
  "Annonce": "#009688",
}

const actualites = toutesActualites.slice(0, 4)

export default function SectionActualites() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Dernières nouvelles</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Actualités de la commune</h2>
          </div>
          <Link href="/publications/actualites" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir toutes les actualités →</Link>
        </div>

        {actualites.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📰</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucune actualité disponible</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les actualités seront publiées prochainement.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {actualites.map((actu, i) => (
              <Link key={actu.id} href={`/publications/actualites/${actu.id}`}
                style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #E8E4DC', transition: 'all 0.3s ease', animation: 'fadeSlide 0.4s ease both', animationDelay: `${i * 0.08}s` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,61,46,0.12)'; e.currentTarget.style.borderColor = '#C9A84C' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#E8E4DC' }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={actu.image} alt={actu.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: categorieColors[actu.categorie] || '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    {actu.categorie}
                  </div>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginBottom: '10px', letterSpacing: '0.5px' }}>📅 {actu.date}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', marginBottom: '12px', marginTop: 0, lineHeight: '1.3' }}>{actu.titre}</h3>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#6A6A6A', marginBottom: '20px', marginTop: 0, flex: 1 }}>{actu.resume}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#0A3D2E', borderTop: '1px solid #E8E4DC', paddingTop: '16px' }}>
                    Lire la suite →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
