'use client'

import React from 'react'

export const evenements = [
  {
    id: 1,
    titre: "Session ordinaire du conseil communal",
    description: "Réunion trimestrielle du conseil communal pour examiner les affaires de la commune et voter les délibérations en cours.",
    description_complete: "La session ordinaire du conseil communal réunit l'ensemble des 25 conseillers élus de la commune d'Adja-Ouere. Au programme : examen du rapport d'activités du trimestre précédent, vote des délibérations en attente, présentation des nouveaux projets de développement et questions diverses. La séance est ouverte au public.",
    lieu: "Salle de conférence de la mairie",
    adresse: "Mairie d'Adja-Ouere, Rue principale, Adja-Ouere",
    date_debut: "2026-03-15T09:00:00",
    date_fin: "2026-03-18T17:00:00",
    categorie: "reunion",
    public_cible: "Conseillers communaux, autorités locales, population",
    contact: "secretariat@mairie-adja-ouere.bj | +229 01 23 45 67",
  },
  {
    id: 2,
    titre: "Journée de salubrité communale",
    description: "Grande journée de nettoyage et d'assainissement dans tous les arrondissements de la commune.",
    description_complete: "La mairie d'Adja-Ouere organise sa journée annuelle de salubrité publique. Des équipes seront déployées dans les six arrondissements pour nettoyer les marchés, les abords des écoles, les caniveaux et les espaces publics. Du matériel de nettoyage sera mis à disposition des volontaires.",
    lieu: "Tous les arrondissements",
    adresse: "Points de rassemblement dans chaque chef-lieu d'arrondissement",
    date_debut: "2026-03-22T07:00:00",
    date_fin: "2026-03-22T13:00:00",
    categorie: "celebration",
    public_cible: "Toute la population de la commune",
    contact: "cabinet@mairie-adja-ouere.bj | +229 01 23 45 68",
  },
  {
    id: 3,
    titre: "Forum des jeunes entrepreneurs",
    description: "Rencontre des jeunes porteurs de projets avec les partenaires techniques et financiers.",
    description_complete: "Ce forum est organisé en partenariat avec la Chambre de Commerce et d'Industrie du Bénin et plusieurs institutions de microfinance. Les participants auront l'occasion de présenter leurs projets, d'assister à des ateliers de formation en entrepreneuriat et de rencontrer des investisseurs potentiels.",
    lieu: "Centre culturel d'Adja-Ouere",
    adresse: "Avenue de l'Indépendance, Adja-Ouere",
    date_debut: "2026-04-05T08:00:00",
    date_fin: "2026-04-05T18:00:00",
    categorie: "formation",
    public_cible: "Jeunes de 18 à 35 ans porteurs de projets",
    contact: "dade@mairie-adja-ouere.bj | +229 01 23 45 69",
  },
  {
    id: 4,
    titre: "Cérémonie de remise de diplômes",
    description: "Remise officielle des diplômes aux meilleurs élèves de la commune.",
    description_complete: "La mairie d'Adja-Ouere honore chaque année les meilleurs élèves lors d'une cérémonie officielle présidée par le Maire. Cette année, 48 élèves méritants seront récompensés. Des bourses d'études seront remises aux 5 premiers au BEPC et au BAC.",
    lieu: "Place publique d'Adja-Ouere",
    adresse: "Place de l'Indépendance, centre-ville d'Adja-Ouere",
    date_debut: "2026-04-18T10:00:00",
    date_fin: "2026-04-18T14:00:00",
    categorie: "ceremonie",
    public_cible: "Élèves primés, parents, enseignants, autorités",
    contact: "cabinet@mairie-adja-ouere.bj | +229 01 23 45 67",
  },
  {
    id: 5,
    titre: "Tournoi sportif intercommunal",
    description: "Compétition sportive regroupant les équipes de football et d'athlétisme des communes voisines.",
    description_complete: "La commune d'Adja-Ouere accueille le tournoi sportif intercommunal du Département du Plateau. 8 communes participent aux compétitions de football, athlétisme et volleyball. Les finales se dérouleront au stade municipal rénové d'Adja-Ouere.",
    lieu: "Stade municipal d'Adja-Ouere",
    adresse: "Avenue du Sport, Adja-Ouere",
    date_debut: "2026-05-10T08:00:00",
    date_fin: "2026-05-12T18:00:00",
    categorie: "sport",
    public_cible: "Sportifs, jeunes, grand public",
    contact: "cabinet@mairie-adja-ouere.bj | +229 01 23 45 67",
  },
  {
    id: 6,
    titre: "Festival culturel des peuples Adja",
    description: "Grand festival annuel célébrant les traditions, la musique et l'artisanat du peuple Adja.",
    description_complete: "Le festival culturel des peuples Adja est l'événement culturel le plus important de la commune. Au programme : danses traditionnelles, exposition d'artisanat, dégustation de mets locaux, concours de contes et légendes, et spectacles de musique traditionnelle. Des artistes venus du Nigeria voisin participent également.",
    lieu: "Place de l'Indépendance",
    adresse: "Centre-ville d'Adja-Ouere",
    date_debut: "2026-06-20T10:00:00",
    date_fin: "2026-06-22T22:00:00",
    categorie: "culture",
    public_cible: "Toute la population, touristes, visiteurs",
    contact: "dade@mairie-adja-ouere.bj | +229 01 23 45 69",
  },
  {
    id: 7,
    titre: "Atelier de formation des agents communaux",
    description: "Formation continue sur la gestion administrative et financière des collectivités locales.",
    description_complete: "Organisé par la Direction des Affaires Administratives et Financières, cet atelier réunit les 45 agents de la mairie pour une formation de 3 jours sur les nouvelles procédures de gestion budgétaire, l'utilisation des outils numériques et l'amélioration du service public.",
    lieu: "Salle de conférence de la mairie",
    adresse: "Mairie d'Adja-Ouere, Rue principale",
    date_debut: "2026-07-08T08:00:00",
    date_fin: "2026-07-10T17:00:00",
    categorie: "formation",
    public_cible: "Agents et fonctionnaires de la mairie",
    contact: "daaf@mairie-adja-ouere.bj | +229 01 23 45 70",
  },
  {
    id: 8,
    titre: "Journée mondiale de l'environnement",
    description: "Activités de sensibilisation et de reboisement à l'occasion de la journée mondiale de l'environnement.",
    description_complete: "La commune d'Adja-Ouere marque la journée mondiale de l'environnement par des activités de sensibilisation dans les écoles, une campagne de plantation d'arbres et un forum sur les changements climatiques. Objectif : planter 5 000 arbres en une journée dans toute la commune.",
    lieu: "Tous les arrondissements",
    adresse: "Points de plantation désignés dans chaque arrondissement",
    date_debut: "2026-06-05T07:00:00",
    date_fin: "2026-06-05T16:00:00",
    categorie: "autre",
    public_cible: "Élèves, associations, grand public",
    contact: "dade@mairie-adja-ouere.bj | +229 01 23 45 69",
  },
]

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

function getDateInfo(dateStr: string) {
  const date = new Date(dateStr)
  return {
    jour: joursNoms[date.getDay()],
    numero: date.getDate(),
    mois: moisNoms[date.getMonth()],
    moisLong: moisLongs[date.getMonth()],
    moisIndex: date.getMonth(),
    annee: date.getFullYear(),
    heure: date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
  }
}

function isSameDay(date1: string, date2: string) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
}

function DateBadge({ dateDebut, dateFin }: { dateDebut: string; dateFin: string }) {
  const debut = getDateInfo(dateDebut)
  const fin = getDateInfo(dateFin)
  const memeJour = isSameDay(dateDebut, dateFin)

  return (
    <div style={{ flexShrink: 0 }}>
      {memeJour ? (
        <div style={{ width: '64px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <div style={{ backgroundColor: '#0A3D2E', padding: '6px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {debut.mois}
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '8px 4px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', lineHeight: 1 }}>{debut.numero}</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#9A9A9A', marginTop: '2px' }}>{debut.jour}</div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '56px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ backgroundColor: '#0A3D2E', padding: '5px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '9px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{debut.mois}</div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '6px 4px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', lineHeight: 1 }}>{debut.numero}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#9A9A9A', marginTop: '2px' }}>{debut.jour}</div>
            </div>
          </div>
          <div style={{ color: '#C9A84C', fontSize: '16px', fontWeight: '700' }}>{'>'}</div>
          <div style={{ width: '56px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', opacity: 0.85 }}>
            <div style={{ backgroundColor: '#156840', padding: '5px', textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '9px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{fin.mois}</div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '6px 4px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#156840', lineHeight: 1 }}>{fin.numero}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#9A9A9A', marginTop: '2px' }}>{fin.jour}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Modal({ evt, onClose }: { evt: typeof evenements[0]; onClose: () => void }) {
  const debut = getDateInfo(evt.date_debut)
  const fin = getDateInfo(evt.date_fin)
  const memeJour = isSameDay(evt.date_debut, evt.date_fin)
  const config = categorieConfig[evt.categorie] || categorieConfig.autre

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
          maxWidth: '620px', width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ backgroundColor: '#0A3D2E', borderRadius: '20px 20px 0 0', padding: '28px 32px', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
              cursor: 'pointer', color: '#FFFFFF', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>

          <span style={{
            backgroundColor: config.color, color: '#FFFFFF',
            fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
            padding: '4px 12px', borderRadius: '20px',
            textTransform: 'uppercase', letterSpacing: '0.8px',
            display: 'inline-block', marginBottom: '14px',
          }}>{config.label}</span>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.2', paddingRight: '40px' }}>
            {evt.titre}
          </h2>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 14px' }}>
            <span style={{ fontSize: '14px' }}>📅</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C', fontWeight: '600' }}>
              {memeJour
                ? `${debut.jour} ${debut.numero} ${debut.moisLong} ${debut.annee} | ${debut.heure} – ${fin.heure}`
                : `Du ${debut.numero} ${debut.moisLong} au ${fin.numero} ${fin.moisLong} ${fin.annee}`
              }
            </span>
          </div>
        </div>

        <div style={{ padding: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>À propos</div>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: 0 }}>{evt.description_complete}</p>
          </div>

          <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '📍', label: 'Lieu', val: evt.lieu, sub: evt.adresse },
              { icon: '👥', label: 'Public cible', val: evt.public_cible, sub: undefined },
              { icon: '📞', label: 'Contact organisateur', val: evt.contact, sub: undefined },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#F0EBE0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#0A3D2E', fontWeight: '600' }}>{item.val}</div>
                  {item.sub && <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#6A6A6A' }}>{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            style={{
              width: '100%', marginTop: '24px', padding: '13px', borderRadius: '10px',
              backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
              fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600',
              color: '#0A3D2E', cursor: 'pointer',
            }}
          >Fermer</button>
        </div>
      </div>
    </div>
  )
}

function EventCard({ evt, onOpen }: { evt: typeof evenements[0]; onOpen: () => void }) {
  const [hovered, setHovered] = React.useState(false)
  const debut = getDateInfo(evt.date_debut)
  const fin = getDateInfo(evt.date_fin)
  const memeJour = isSameDay(evt.date_debut, evt.date_fin)
  const config = categorieConfig[evt.categorie] || categorieConfig.autre

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', gap: '20px',
        backgroundColor: hovered ? '#FFFFFF' : '#F8F6F1',
        borderRadius: '16px', padding: '24px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.10)' : 'none',
        transition: 'all 0.3s ease',
        alignItems: 'flex-start', cursor: 'pointer',
      }}
    >
      <DateBadge dateDebut={evt.date_debut} dateFin={evt.date_fin} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <span style={{
            backgroundColor: config.color, color: '#FFFFFF',
            fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
            padding: '3px 10px', borderRadius: '10px',
            letterSpacing: '0.5px', textTransform: 'uppercase',
          }}>{config.label}</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A', fontWeight: '500' }}>
            {memeJour
              ? `${debut.heure} - ${fin.heure}`
              : `Du ${debut.numero} ${debut.moisLong} au ${fin.numero} ${fin.moisLong} ${fin.annee} | ${debut.heure} - ${fin.heure}`
            }
          </span>
        </div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0', lineHeight: '1.3' }}>
          {evt.titre}
        </h3>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A', margin: '0 0 12px 0', lineHeight: '1.6' }}>
          {evt.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📍 {evt.lieu}</div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: hovered ? '#C9A84C' : '#0A3D2E', transition: 'color 0.2s ease' }}>
            Voir les détails →
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EvenementsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreCategorie, setFiltreCategorie] = React.useState('Tous')
  const [filtreMois, setFiltreMois] = React.useState('Tous')
  const [recherche, setRecherche] = React.useState('')
  const [modalEvt, setModalEvt] = React.useState<typeof evenements[0] | null>(null)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Mois disponibles depuis les données
  const moisDisponibles = ['Tous', ...Array.from(new Set(
    evenements.map(e => {
      const d = getDateInfo(e.date_debut)
      return `${d.moisLong} ${d.annee}`
    })
  ))]

  const categories = ['Tous', ...Object.keys(categorieConfig)]

  const evenementsFiltres = evenements.filter(e => {
    const debut = getDateInfo(e.date_debut)
    const matchCat = filtreCategorie === 'Tous' || e.categorie === filtreCategorie
    const matchMois = filtreMois === 'Tous' || `${debut.moisLong} ${debut.annee}` === filtreMois
    const matchSearch = recherche === '' ||
      e.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      e.description.toLowerCase().includes(recherche.toLowerCase()) ||
      e.lieu.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchMois && matchSearch
  })

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Agenda</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Événements de la commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Retrouvez tous les événements, cérémonies, formations et activités organisés par la Commune d'Adja-Ouere.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: evenements.length, label: 'Événements prévus' },
              { val: Object.keys(categorieConfig).length, label: 'Catégories' },
              { val: moisDisponibles.length - 1, label: 'Mois concernés' },
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

          {/* Ligne 1 : catégories + recherche */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Catégorie :</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFiltreCategorie(cat)}
                  style={{
                    padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                    borderColor: filtreCategorie === cat ? (categorieConfig[cat]?.color || '#0A3D2E') : '#E8E4DC',
                    backgroundColor: filtreCategorie === cat ? (categorieConfig[cat]?.color || '#0A3D2E') : '#FFFFFF',
                    color: filtreCategorie === cat ? '#FFFFFF' : '#4A4A4A',
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  {cat === 'Tous' ? 'Tous' : categorieConfig[cat]?.label}
                </button>
              ))}
            </div>

            {/* Recherche */}
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', pointerEvents: 'none' }}>🔍</span>
              <input
                type="text"
                placeholder="Rechercher..."
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

          {/* Ligne 2 : mois */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Mois :</span>
            {moisDisponibles.map(mois => (
              <button
                key={mois}
                onClick={() => setFiltreMois(mois)}
                style={{
                  padding: '6px 14px', borderRadius: '20px', border: '1px solid',
                  borderColor: filtreMois === mois ? '#0A3D2E' : '#E8E4DC',
                  backgroundColor: filtreMois === mois ? '#0A3D2E' : '#FFFFFF',
                  color: filtreMois === mois ? '#FFFFFF' : '#4A4A4A',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >{mois}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Compteur */}
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '32px' }}>
            {evenementsFiltres.length} événement{evenementsFiltres.length > 1 ? 's' : ''} trouvé{evenementsFiltres.length > 1 ? 's' : ''}
            {filtreCategorie !== 'Tous' && ` · ${categorieConfig[filtreCategorie]?.label}`}
            {filtreMois !== 'Tous' && ` · ${filtreMois}`}
            {recherche && ` · "${recherche}"`}
          </div>

          {evenementsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun événement trouvé</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres critères</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(420px, 1fr))', gap: '20px' }}>
              {evenementsFiltres.map(evt => (
                <EventCard key={evt.id} evt={evt} onOpen={() => setModalEvt(evt)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {modalEvt && <Modal evt={modalEvt} onClose={() => setModalEvt(null)} />}
    </main>
  )
}