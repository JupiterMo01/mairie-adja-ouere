'use client'

import Link from 'next/link'
import React from 'react'
import { evenements as tousEvenements } from '@/app/publications/evenements/page'

const today = new Date()
const evenements = tousEvenements
  .filter(e => new Date(e.date_fin) >= today)
  .slice(0, 4)

const categorieConfig: { [key: string]: { label: string; color: string } } = {
  ceremonie: { label: "Cérémonie", color: "#9C27B0" },
  reunion: { label: "Réunion", color: "#2196F3" },
  formation: { label: "Formation", color: "#4CAF50" },
  celebration: { label: "Célébration", color: "#FF9800" },
  sport: { label: "Sport", color: "#F44336" },
  culture: { label: "Culture", color: "#00BCD4" },
  autre: { label: "Autre", color: "#607D8B" },
}

const moisNoms = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
const moisLongs = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const joursNoms = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

type Evenement = typeof tousEvenements[0]

function getDateInfo(dateStr: string) {
  const date = new Date(dateStr)
  return {
    jour: joursNoms[date.getDay()],
    numero: date.getDate(),
    mois: moisNoms[date.getMonth()],
    moisLong: moisLongs[date.getMonth()],
    annee: date.getFullYear(),
    heure: date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
  }
}

function isSameDay(date1: string, date2: string) {
  const d1 = new Date(date1); const d2 = new Date(date2)
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
}

function DateBadge({ dateDebut, dateFin }: { dateDebut: string; dateFin: string }) {
  const debut = getDateInfo(dateDebut); const fin = getDateInfo(dateFin)
  const memeJour = isSameDay(dateDebut, dateFin)
  return (
    <div style={{ flexShrink: 0 }}>
      {memeJour ? (
        <div style={{ width: '60px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <div style={{ backgroundColor: '#0A3D2E', padding: '6px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{debut.mois}</div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '8px 4px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#0A3D2E', lineHeight: 1 }}>{debut.numero}</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#9A9A9A', marginTop: '2px' }}>{debut.jour}</div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '52px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ backgroundColor: '#0A3D2E', padding: '5px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '9px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{debut.mois}</div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '6px 4px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', lineHeight: 1 }}>{debut.numero}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#9A9A9A', marginTop: '2px' }}>{debut.jour}</div>
            </div>
          </div>
          <div style={{ color: '#C9A84C', fontSize: '14px', fontWeight: '700' }}>›</div>
          <div style={{ width: '52px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', opacity: 0.85 }}>
            <div style={{ backgroundColor: '#156840', padding: '5px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '9px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{fin.mois}</div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '6px 4px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#156840', lineHeight: 1 }}>{fin.numero}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#9A9A9A', marginTop: '2px' }}>{fin.jour}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Modal({ evt, onClose }: { evt: Evenement; onClose: () => void }) {
  const debut = getDateInfo(evt.date_debut); const fin = getDateInfo(evt.date_fin)
  const memeJour = isSameDay(evt.date_debut, evt.date_fin)
  const config = categorieConfig[evt.categorie] || categorieConfig.autre

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
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 10000, backgroundColor: 'rgba(10,61,46,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', maxWidth: '620px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
        <div style={{ backgroundColor: '#0A3D2E', borderRadius: '20px 20px 0 0', padding: '24px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', color: '#FFFFFF', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <span style={{ backgroundColor: config.color, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'inline-block', marginBottom: '14px' }}>{config.label}</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.2', paddingRight: '40px' }}>{evt.titre}</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 14px' }}>
            <span style={{ fontSize: '14px' }}>📅</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C', fontWeight: '600' }}>
              {memeJour
                ? `${debut.jour} ${debut.numero} ${debut.moisLong} ${debut.annee} | ${debut.heure} – ${fin.heure}`
                : `Du ${debut.numero} ${debut.moisLong} au ${fin.numero} ${fin.moisLong} ${fin.annee}`}
            </span>
          </div>
        </div>
        <div style={{ padding: '28px 24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>À propos</div>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: 0 }}>{evt.description_complete || evt.description}</p>
          </div>
          <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '📍', label: 'Lieu', val: evt.lieu, sub: evt.adresse },
              { icon: '👥', label: 'Public cible', val: evt.public_cible, sub: undefined },
              { icon: '📞', label: 'Contact organisateur', val: evt.contact, sub: undefined },
            ].filter(i => i.val).map(item => (
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

function EventCard({ evt, onOpen, animDelay, isMobile }: { evt: Evenement; onOpen: () => void; animDelay: number; isMobile: boolean }) {
  const [hovered, setHovered] = React.useState(false)
  const debut = getDateInfo(evt.date_debut); const fin = getDateInfo(evt.date_fin)
  const memeJour = isSameDay(evt.date_debut, evt.date_fin)
  const config = categorieConfig[evt.categorie] || categorieConfig.autre

  const dateTexte = memeJour
    ? `${debut.heure} – ${fin.heure}`
    : `${debut.numero} ${debut.mois} – ${fin.numero} ${fin.mois} ${fin.annee}`

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '14px' : '20px',
        backgroundColor: hovered ? '#FFFFFF' : '#F8F6F1',
        borderRadius: '16px',
        padding: isMobile ? '16px' : '24px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.10)' : 'none',
        transition: 'all 0.3s ease',
        alignItems: isMobile ? 'flex-start' : 'flex-start',
        cursor: 'pointer',
        animation: 'fadeSlide 0.4s ease both',
        animationDelay: `${animDelay}s`,
      }}
    >
      <DateBadge dateDebut={evt.date_debut} dateFin={evt.date_fin} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: config.color, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', padding: '3px 10px', borderRadius: '10px', letterSpacing: '0.5px', textTransform: 'uppercase', flexShrink: 0 }}>{config.label}</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A', fontWeight: '500' }}>{dateTexte}</span>
        </div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '18px' : '20px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0', lineHeight: '1.3' }}>{evt.titre}</h3>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A', margin: '0 0 12px 0', lineHeight: '1.6' }}>{evt.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          {evt.lieu && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📍 {evt.lieu}</div>}
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: hovered ? '#C9A84C' : '#0A3D2E', transition: 'color 0.2s ease' }}>Voir les détails →</div>
        </div>
      </div>
    </div>
  )
}

export default function SectionEvenements() {
  const [modalEvt, setModalEvt] = React.useState<Evenement | null>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{ backgroundColor: '#F8F6F1', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Agenda</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Événements à venir</h2>
          </div>
          <Link
            href="/publications/evenements"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir tous les événements →</Link>
        </div>

        {evenements.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📅</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun événement à venir</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les prochains événements seront affichés ici.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
            {evenements.map((evt, i) => (
              <EventCard key={evt.id} evt={evt} onOpen={() => setModalEvt(evt)} animDelay={i * 0.08} isMobile={isMobile} />
            ))}
          </div>
        )}
      </div>

      {modalEvt && <Modal evt={modalEvt} onClose={() => setModalEvt(null)} />}

      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
