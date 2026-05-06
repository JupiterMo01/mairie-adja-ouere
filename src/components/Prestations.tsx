'use client'

import Link from 'next/link'
import { services } from '@/app/e-services/page'

const prestations = services.slice(0, 4)

export default function Prestations() {
  return (
    <section style={{ backgroundColor: '#F8F6F1', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>E-Services</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Nos prestations en ligne</h2>
          </div>
          <Link href="/e-services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir toutes les prestations →</Link>
        </div>

        {prestations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun service disponible</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les services en ligne seront publiés prochainement.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {prestations.map((item, i) => (
              <Link key={item.href} href={item.href} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '32px 28px', textDecoration: 'none', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #E8E4DC', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', animation: 'fadeSlide 0.4s ease both', animationDelay: `${i * 0.08}s` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,61,46,0.12)'; e.currentTarget.style.borderColor = '#C9A84C' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#E8E4DC' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: item.color, borderRadius: '16px 16px 0 0' }} />
                <div style={{ fontSize: '40px', marginBottom: '20px', lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', marginBottom: '12px', marginTop: 0, lineHeight: '1.3' }}>{item.titre}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#6A6A6A', marginBottom: '24px', marginTop: 0, flex: 1 }}>{item.description}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: item.color, letterSpacing: '0.3px' }}>
                  Faire une demande →
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
