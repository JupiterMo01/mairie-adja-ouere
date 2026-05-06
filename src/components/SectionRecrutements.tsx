'use client'

import Link from 'next/link'
import React from 'react'
import { recrutements as tousRecrutements } from '@/app/opportunites/recrutements/page'

const recrutements = tousRecrutements
  .filter(r => r.statut === 'ouvert')
  .slice(0, 4)

type Recrutement = typeof tousRecrutements[0]

const moisLongs = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']

function getJoursRestants(dateStr: string) {
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getDate()} ${moisLongs[d.getMonth()]} ${d.getFullYear()}`
}

function PopupDetails({ recrutement, onClose }: { recrutement: Recrutement; onClose: () => void }) {
  const joursRestants = getJoursRestants(recrutement.date_limite)
  const urgent = joursRestants <= 7
  const [dlHovered, setDlHovered] = React.useState(false)

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
        <div style={{ backgroundColor: '#0A3D2E', padding: '28px 32px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {recrutement.type_contrat && <span style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(201,168,76,0.4)', textTransform: 'uppercase' }}>{recrutement.type_contrat}</span>}
            {recrutement.niveau && <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>{recrutement.niveau}</span>}
            <span style={{ backgroundColor: urgent ? 'rgba(244,67,54,0.2)' : 'rgba(76,175,80,0.2)', color: urgent ? '#F44336' : '#4CAF50', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', border: `1px solid ${urgent ? 'rgba(244,67,54,0.4)' : 'rgba(76,175,80,0.4)'}` }}>
              {urgent ? `Urgent — ${joursRestants}j` : `${joursRestants} jours restants`}
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 12px 0', lineHeight: '1.3' }}>{recrutement.titre}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {recrutement.direction && <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>📁 {recrutement.direction}</span>}
            {recrutement.lieu && <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>📍 {recrutement.lieu}</span>}
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: urgent ? '#F44336' : '#C9A84C', fontWeight: '700' }}>🗓 Date limite : {formatDate(recrutement.date_limite)}</span>
          </div>
        </div>
        <div style={{ padding: '28px 32px' }}>
          <div style={{ backgroundColor: '#F8F6F1', borderLeft: '4px solid #C9A84C', borderRadius: '0 8px 8px 0', padding: '16px 20px', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#333', margin: 0, lineHeight: '1.7' }}>{recrutement.description}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '28px' }}>
            {recrutement.missions.length > 0 && (
              <div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 14px 0', paddingBottom: '8px', borderBottom: '2px solid #C9A84C' }}>Missions principales</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {recrutement.missions.map((m, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>›</span>
                      <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#4A4A4A', lineHeight: '1.5' }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {recrutement.profil.length > 0 && (
              <div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 14px 0', paddingBottom: '8px', borderBottom: '2px solid #C9A84C' }}>Profil recherche</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {recrutement.profil.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>›</span>
                      <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#4A4A4A', lineHeight: '1.5' }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {recrutement.dossier.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>Dossier de candidature</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {recrutement.dossier.map((doc, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(10,61,46,0.07)', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(10,61,46,0.15)' }}>{doc}</span>
                ))}
              </div>
            </div>
          )}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={onClose} style={{ padding: '12px 28px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', borderRadius: '8px', border: '2px solid #0A3D2E', cursor: 'pointer' }}>Fermer</button>
            <button onClick={() => window.open(recrutement.fichier, '_blank')} onMouseEnter={() => setDlHovered(true)} onMouseLeave={() => setDlHovered(false)}
              style={{ padding: '12px 28px', backgroundColor: dlHovered ? '#C9A84C' : '#0A3D2E', color: dlHovered ? '#0A3D2E' : '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}
            >⬇ Telecharger l&apos;offre</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function RecrutementCard({ recrutement, animDelay }: { recrutement: Recrutement; animDelay: number }) {
  const [hovered, setHovered] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)
  const [popup, setPopup] = React.useState(false)
  const joursRestants = getJoursRestants(recrutement.date_limite)
  const urgent = joursRestants <= 7

  return (
    <>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ borderRadius: '16px', overflow: 'hidden', border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC', boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.10)' : '0 2px 16px rgba(0,0,0,0.06)', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', animation: 'fadeSlide 0.4s ease both', animationDelay: `${animDelay}s` }}
      >
        <div style={{ height: '4px', backgroundColor: urgent ? '#F44336' : '#0A3D2E' }} />
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ backgroundColor: 'rgba(10,61,46,0.08)', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Ouvert</span>
            <span style={{ backgroundColor: urgent ? 'rgba(244,67,54,0.1)' : 'rgba(76,175,80,0.1)', color: urgent ? '#F44336' : '#4CAF50', fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', border: `1px solid ${urgent ? '#F44336' : '#4CAF50'}` }}>
              {urgent ? `Urgent — ${joursRestants}j` : `${joursRestants} jours restants`}
            </span>
          </div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.3' }}>{recrutement.titre}</h3>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A', margin: 0, lineHeight: '1.6', flex: 1 }}>{recrutement.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', backgroundColor: '#F8F6F1', borderRadius: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: urgent ? '#F44336' : '#0A3D2E', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>Date limite de depot :</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: urgent ? '#F44336' : '#0A3D2E' }}>{formatDate(recrutement.date_limite)}</span>
          </div>
        </div>
        <div style={{ padding: '0 24px 24px', display: 'flex', gap: '10px' }}>
          <button onClick={() => window.open(recrutement.fichier, '_blank')} onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
            style={{ flex: 1, padding: '11px 16px', backgroundColor: btnHovered ? '#C9A84C' : '#0A3D2E', color: btnHovered ? '#0A3D2E' : '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}
          >Telecharger l&apos;offre</button>
          <button onClick={() => setPopup(true)} style={{ flex: 1, padding: '11px 16px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', borderRadius: '8px', border: '2px solid #0A3D2E', cursor: 'pointer', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
          >En savoir plus</button>
        </div>
      </div>
      {popup && <PopupDetails recrutement={recrutement} onClose={() => setPopup(false)} />}
    </>
  )
}

export default function SectionRecrutements() {
  return (
    <section style={{ backgroundColor: '#F8F6F1', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Opportunites</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Recrutements en cours</h2>
          </div>
          <Link href="/opportunites/recrutements" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir tous les recrutements →</Link>
        </div>

        {recrutements.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun recrutement en cours</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les offres d&apos;emploi ouvertes seront affichées ici.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {recrutements.map((r, i) => <RecrutementCard key={r.id} recrutement={r} animDelay={i * 0.08} />)}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
