'use client'

import Link from 'next/link'
import React from 'react'
import { projets as tousLesprojets } from '@/app/publications/projets/page'

const projets = tousLesprojets
  .filter(p => !p.suspendu && p.avancement > 0 && p.avancement < 100)
  .slice(0, 4)

const secteurColors: { [key: string]: string } = {
  'Pistes': '#795548',
  'Éducation': '#2196F3',
  'Santé': '#F44336',
  'Infrastructure': '#607D8B',
  'Énergie et eau': '#FF9800',
  'Loisir': '#9C27B0',
  'Environnement': '#4CAF50',
  'Culture': '#E91E63',
  'Autre': '#9E9E9E',
}

type Projet = typeof tousLesprojets[0]

function getBarreColor(avancement: number, suspendu: boolean) {
  if (suspendu) return '#F44336'
  if (avancement === 100) return '#4CAF50'
  return '#C9A84C'
}

function Modal({ projet, onClose }: { projet: Projet; onClose: () => void }) {
  const barreColor = getBarreColor(projet.avancement, projet.suspendu)
  const secteurColor = secteurColors[projet.secteur] || secteurColors['Autre']

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [onClose])

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, backgroundColor: 'rgba(10,61,46,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', maxWidth: '640px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
          <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,61,46,0.2) 0%, rgba(10,61,46,0.8) 100%)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: '#FFFFFF', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'inline-block' }}>En cours</span>
              <span style={{ backgroundColor: secteurColor, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'inline-block' }}>{projet.secteur}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.2' }}>{projet.titre}</h2>
          </div>
        </div>
        <div style={{ padding: '28px 32px' }}>
          <div style={{ marginBottom: '24px', padding: '16px 20px', backgroundColor: '#F8F6F1', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#6A6A6A', textTransform: 'uppercase', letterSpacing: '1px' }}>Avancement</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: barreColor }}>{projet.avancement}%</span>
            </div>
            <div style={{ height: '10px', backgroundColor: '#E8E4DC', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${projet.avancement}%`, backgroundColor: barreColor, borderRadius: '5px', transition: 'width 0.6s ease' }} />
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>À propos du projet</div>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: 0 }}>{projet.description_complete || projet.description}</p>
          </div>
          <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '💰', label: 'Budget', val: projet.budget ? `${projet.budget} FCFA` : '—', sub: projet.partenaire ? `Partenaire : ${projet.partenaire}` : undefined },
              { icon: '📅', label: 'Période', val: `${projet.date_debut} → ${projet.date_fin}`, sub: undefined },
              { icon: '👥', label: 'Bénéficiaires', val: projet.beneficiaires || '—', sub: undefined },
              { icon: '📞', label: 'Responsable', val: projet.responsable || '—', sub: projet.contact },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#F0EBE0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#0A3D2E', fontWeight: '600' }}>{item.val}</div>
                  {item.sub && <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#6A6A6A' }}>{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>
          <button onClick={onClose} style={{ width: '100%', marginTop: '24px', padding: '13px', borderRadius: '10px', backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#0A3D2E', cursor: 'pointer' }}>Fermer</button>
        </div>
      </div>
    </div>
  )
}

export default function SectionProjets() {
  const [modalProjet, setModalProjet] = React.useState<Projet | null>(null)

  return (
    <section style={{ backgroundColor: '#F8F6F1', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Développement local</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Projets en cours</h2>
          </div>
          <Link href="/publications/projets" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir tous les projets →</Link>
        </div>

        {projets.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏗️</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun projet en cours</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les projets en cours seront affichés ici.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {projets.map((projet, i) => (
              <div key={projet.id} onClick={() => setModalProjet(projet)} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #E8E4DC', transition: 'all 0.3s ease', animation: 'fadeSlide 0.4s ease both', animationDelay: `${i * 0.08}s` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,61,46,0.12)'; e.currentTarget.style.borderColor = '#C9A84C' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#E8E4DC' }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>En cours</span>
                    <span style={{ backgroundColor: secteurColors[projet.secteur] || '#9E9E9E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{projet.secteur}</span>
                  </div>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', marginBottom: '10px', marginTop: 0, lineHeight: '1.3' }}>{projet.titre}</h3>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#6A6A6A', marginBottom: '20px', marginTop: 0, flex: 1 }}>{projet.description}</p>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>Avancement</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: '#C9A84C' }}>{projet.avancement}%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#E8E4DC', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${projet.avancement}%`, backgroundColor: '#C9A84C', borderRadius: '3px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E8E4DC', paddingTop: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    {(projet.date_debut || projet.date_fin) && <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📅 {projet.date_debut} → {projet.date_fin}</span>}
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#0A3D2E' }}>En savoir plus →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalProjet && <Modal projet={modalProjet} onClose={() => setModalProjet(null)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
