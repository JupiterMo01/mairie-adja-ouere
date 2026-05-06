'use client'

import React from 'react'

export const projets = [
  {
    id: 1,
    titre: "Électrification de 12 villages",
    description: "Extension du réseau électrique vers les villages les plus reculés de la commune avec l'appui de la SBEE et des partenaires techniques.",
    description_complete: "Ce projet ambitieux vise à connecter 12 villages isolés de la commune au réseau électrique national. Les travaux comprennent l'installation de 45 km de lignes électriques moyenne tension, la construction de 12 postes de transformation et le raccordement de plus de 2 400 ménages. Le projet contribuera directement à l'amélioration des conditions de vie, au développement des activités économiques nocturnes et à la réduction de l'utilisation des lampes à pétrole.",
    secteur: "Énergie et eau",
    date_debut: "Jan 2026",
    date_fin: "Déc 2026",
    budget: "45 000 000",
    partenaire: "SBEE / État béninois",
    image: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=600&q=80",
    avancement: 50,
    beneficiaires: "2 400 ménages, 12 villages",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 2,
    titre: "Construction du centre de santé d'Ikpinlè",
    description: "Réalisation d'un centre de santé moderne pour améliorer l'accès aux soins des populations de l'arrondissement d'Ikpinlè.",
    description_complete: "Le nouveau centre de santé d'Ikpinlè disposera d'une maternité, d'un service de consultation générale, d'une salle de soins d'urgence et d'un laboratoire d'analyses de base. Le bâtiment principal s'étend sur 450 m² et sera équipé de panneaux solaires pour garantir une alimentation électrique continue.",
    secteur: "Santé",
    date_debut: "Fév 2026",
    date_fin: "Nov 2026",
    budget: "78 000 000",
    partenaire: "Ministère de la Santé",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    avancement: 20,
    beneficiaires: "12 300 habitants d'Ikpinlè",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 3,
    titre: "Réhabilitation des pistes rurales",
    description: "Travaux de réhabilitation de 45 km de pistes rurales pour désenclaver les villages producteurs agricoles.",
    description_complete: "Le programme de réhabilitation des pistes rurales couvre 45 km de voies dans les arrondissements de Kpoulou, Tatonnonkon et Masse. Les travaux incluent le rechargement en latérite, la construction de 18 dalots et busages, et la pose de 3 ponceaux sur les zones inondables.",
    secteur: "Pistes",
    date_debut: "Mars 2026",
    date_fin: "Août 2026",
    budget: "32 000 000",
    partenaire: "AGETUR / FADeC",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&q=80",
    avancement: 10,
    beneficiaires: "Population de 3 arrondissements",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 4,
    titre: "Construction de 6 salles de classe à Massè",
    description: "Réalisation de 6 nouvelles salles de classe pour résorber le déficit en infrastructures scolaires de l'arrondissement de Massè.",
    description_complete: "Ce projet prévoit la construction de 6 salles de classe équipées de mobilier scolaire, de latrines séparées filles/garçons et d'un point d'eau dans l'enceinte de l'école. Il permettra d'accueillir 240 élèves supplémentaires dès la rentrée 2026-2027 et de mettre fin aux classes sous abris précaires.",
    secteur: "Éducation",
    date_debut: "Avr 2026",
    date_fin: "Oct 2026",
    budget: "24 000 000",
    partenaire: "FADeC / UNICEF",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    avancement: 0,
    beneficiaires: "240 élèves, arrondissement de Massè",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 5,
    titre: "Aménagement du stade municipal",
    description: "Réhabilitation et mise aux normes du stade municipal d'Adja-Ouere pour accueillir les compétitions sportives régionales.",
    description_complete: "Les travaux comprennent la réfection de la pelouse, la construction de nouvelles tribunes couvertes de 500 places, la mise aux normes des vestiaires et l'installation d'un éclairage LED pour les matchs en soirée. Ce projet s'inscrit dans la politique de promotion du sport et de la jeunesse.",
    secteur: "Loisir",
    date_debut: "Jan 2026",
    date_fin: "Jun 2026",
    budget: "18 500 000",
    partenaire: "Ministère des Sports",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
    avancement: 100,
    beneficiaires: "Toute la population, clubs sportifs",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 6,
    titre: "Reboisement de 500 hectares",
    description: "Programme de reboisement massif pour lutter contre la déforestation et améliorer le cadre de vie des populations.",
    description_complete: "Ce programme prévoit la plantation de 150 000 plants d'arbres sur 500 hectares dans les zones dégradées des six arrondissements. Des espèces locales adaptées au climat béninois seront privilégiées. Un comité de suivi composé de représentants des villages assurera l'entretien des plantations sur 3 ans.",
    secteur: "Environnement",
    date_debut: "Juil 2025",
    date_fin: "Déc 2025",
    budget: "12 000 000",
    partenaire: "Ministère de l'Environnement",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    avancement: 100,
    beneficiaires: "Ensemble de la commune",
    responsable: "Direction de l'Environnement",
    contact: "dade@mairie-adja-ouere.bj",
    suspendu: false,
  },
  {
    id: 7,
    titre: "Adduction d'eau potable à Tatonnonkon",
    description: "Installation d'un réseau d'adduction d'eau potable dans les villages de l'arrondissement de Tatonnonkon.",
    description_complete: "Le projet prévoit le forage de 3 puits équipés de pompes solaires, la pose de 12 km de réseau de distribution et l'installation de 8 bornes-fontaines dans les villages ciblés. Plus de 5 000 habitants n'auront plus à parcourir plusieurs kilomètres pour s'approvisionner en eau potable.",
    secteur: "Énergie et eau",
    date_debut: "Mar 2026",
    date_fin: "Sep 2026",
    budget: "38 000 000",
    partenaire: "SONEB / Banque Mondiale",
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80",
    avancement: 0,
    beneficiaires: "5 000 habitants de Tatonnonkon",
    responsable: "Direction des Services Techniques",
    contact: "dst@mairie-adja-ouere.bj",
    suspendu: true,
  },
  {
    id: 8,
    titre: "Rénovation de la maison des jeunes",
    description: "Réhabilitation complète de la maison des jeunes pour en faire un espace culturel et de formation moderne.",
    description_complete: "La maison des jeunes sera entièrement rénovée : toiture, électricité, peinture, mobilier et équipements informatiques. Une salle de formation de 80 places, un atelier multimédia et une bibliothèque numérique seront créés. Elle deviendra un hub d'activités culturelles, artistiques et de formation professionnelle pour les jeunes de la commune.",
    secteur: "Culture",
    date_debut: "Fév 2026",
    date_fin: "Juil 2026",
    budget: "15 000 000",
    partenaire: "FADeC / Coopération française",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
    avancement: 35,
    beneficiaires: "Jeunes de 15 à 35 ans",
    responsable: "Direction des Affaires Culturelles",
    contact: "dade@mairie-adja-ouere.bj",
    suspendu: true,
  },
]

const secteurs = ['Tous', 'Pistes', 'Éducation', 'Santé', 'Infrastructure', 'Énergie et eau', 'Loisir', 'Environnement', 'Culture', 'Autre']

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

function getStatut(avancement: number, suspendu: boolean) {
  if (suspendu) return { label: 'Suspendu', color: '#F44336', bg: '#FEE2E2' }
  if (avancement === 0) return { label: 'Non démarré', color: '#9E9E9E', bg: '#F3F4F6' }
  if (avancement === 100) return { label: 'Terminé', color: '#2196F3', bg: '#DBEAFE' }
  return { label: 'En cours', color: '#4CAF50', bg: '#DCFCE7' }
}

function getBarreColor(avancement: number, suspendu: boolean) {
  if (suspendu) return '#F44336'
  if (avancement === 100) return '#4CAF50'
  return '#C9A84C'
}

function Modal({ projet, onClose }: { projet: typeof projets[0]; onClose: () => void }) {
  const statut = getStatut(projet.avancement, projet.suspendu)
  const barreColor = getBarreColor(projet.avancement, projet.suspendu)
  const secteurColor = secteurColors[projet.secteur] || secteurColors['Autre']

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
          maxWidth: '640px', width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
        }}
      >
        {/* Image header */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
          <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: statut.color, color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
                padding: '4px 12px', borderRadius: '20px',
                textTransform: 'uppercase', letterSpacing: '0.8px', display: 'inline-block',
              }}>{statut.label}</span>
              <span style={{
                backgroundColor: secteurColor, color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
                padding: '4px 12px', borderRadius: '20px',
                textTransform: 'uppercase', letterSpacing: '0.8px', display: 'inline-block',
              }}>{projet.secteur}</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.2' }}>
              {projet.titre}
            </h2>
          </div>
        </div>

        {/* Corps */}
        <div style={{ padding: '28px 32px' }}>

          {/* Barre progression */}
          <div style={{ marginBottom: '24px', padding: '16px 20px', backgroundColor: '#F8F6F1', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#6A6A6A', textTransform: 'uppercase', letterSpacing: '1px' }}>Avancement</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {projet.avancement === 100 && <span style={{ fontSize: '16px' }}>✅</span>}
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: barreColor }}>{projet.avancement}%</span>
              </div>
            </div>
            <div style={{ height: '10px', backgroundColor: '#E8E4DC', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${projet.avancement}%`, backgroundColor: barreColor, borderRadius: '5px', transition: 'width 0.6s ease' }} />
            </div>
            {projet.avancement === 100 && (
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#4CAF50', fontWeight: '600', marginTop: '8px' }}>
                ✓ Projet terminé avec succès
              </div>
            )}
            {projet.suspendu && (
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#F44336', fontWeight: '600', marginTop: '8px' }}>
                ⚠️ Projet temporairement suspendu
              </div>
            )}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>À propos du projet</div>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: 0 }}>
              {projet.description_complete}
            </p>
          </div>

          <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '💰', label: 'Budget', val: `${projet.budget} FCFA`, sub: `Partenaire : ${projet.partenaire}` },
              { icon: '📅', label: 'Période', val: `${projet.date_debut} → ${projet.date_fin}`, sub: undefined },
              { icon: '👥', label: 'Bénéficiaires', val: projet.beneficiaires, sub: undefined },
              { icon: '📞', label: 'Responsable', val: projet.responsable, sub: projet.contact },
            ].map((item) => (
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
              fontFamily: 'Outfit, sans-serif', fontSize: '14px',
              fontWeight: '600', color: '#0A3D2E', cursor: 'pointer',
            }}
          >Fermer</button>
        </div>
      </div>
    </div>
  )
}

function ProjetCard({ projet, onOpen }: { projet: typeof projets[0]; onOpen: () => void }) {
  const [hovered, setHovered] = React.useState(false)
  const statut = getStatut(projet.avancement, projet.suspendu)
  const barreColor = getBarreColor(projet.avancement, projet.suspendu)
  const secteurColor = secteurColors[projet.secteur] || secteurColors['Autre']

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        backgroundColor: '#FFFFFF', borderRadius: '16px',
        overflow: 'hidden', cursor: 'pointer',
        boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 16px rgba(0,0,0,0.06)',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        opacity: projet.suspendu ? 0.85 : 1,
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={projet.image} alt={projet.titre}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {projet.suspendu && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
        )}
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{
            backgroundColor: statut.color, color: '#FFFFFF',
            fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
            padding: '3px 10px', borderRadius: '20px',
            letterSpacing: '0.8px', textTransform: 'uppercase',
          }}>{statut.label}</span>
          <span style={{
            backgroundColor: secteurColor, color: '#FFFFFF',
            fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600',
            padding: '3px 10px', borderRadius: '20px',
            letterSpacing: '0.8px', textTransform: 'uppercase',
          }}>{projet.secteur}</span>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#0A3D2E', marginBottom: '10px', marginTop: 0, lineHeight: '1.3' }}>
          {projet.titre}
        </h3>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#6A6A6A', marginBottom: '20px', marginTop: 0, flex: 1 }}>
          {projet.description}
        </p>

        {/* Barre progression */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>Avancement</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {projet.avancement === 100 && <span style={{ fontSize: '12px' }}>✅</span>}
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: barreColor }}>{projet.avancement}%</span>
            </div>
          </div>
          <div style={{ height: '6px', backgroundColor: '#E8E4DC', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${projet.avancement}%`, backgroundColor: barreColor, borderRadius: '3px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E8E4DC', paddingTop: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>📅 {projet.date_debut} → {projet.date_fin}</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: hovered ? '#C9A84C' : '#0A3D2E', transition: 'color 0.2s' }}>
            En savoir plus →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ProjetsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreStatut, setFiltreStatut] = React.useState('Tous')
  const [filtreSecteur, setFiltreSecteur] = React.useState('Tous')
  const [modalProjet, setModalProjet] = React.useState<typeof projets[0] | null>(null)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const statutsFiltres = ['Tous', 'Non démarré', 'En cours', 'Terminé', 'Suspendu']

  const projetsFiltres = projets.filter(p => {
    const statut = getStatut(p.avancement, p.suspendu)
    const matchStatut = filtreStatut === 'Tous' || statut.label === filtreStatut
    const matchSecteur = filtreSecteur === 'Tous' || p.secteur === filtreSecteur
    return matchStatut && matchSecteur
  })

  const statutColors: { [key: string]: string } = {
    'Non démarré': '#9E9E9E',
    'En cours': '#4CAF50',
    'Terminé': '#2196F3',
    'Suspendu': '#F44336',
  }

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Développement local</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Projets de la commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Suivez en temps réel l'avancement de tous les projets de développement portés par la Commune d'Adja-Ouere.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              { val: projets.filter(p => !p.suspendu && p.avancement > 0 && p.avancement < 100).length, label: 'En cours' },
              { val: projets.filter(p => p.avancement === 100).length, label: 'Terminés' },
              { val: projets.filter(p => p.suspendu).length, label: 'Suspendus' },
              { val: projets.filter(p => p.avancement === 0 && !p.suspendu).length, label: 'Non démarrés' },
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

          {/* Filtre statut */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', minWidth: '80px' }}>Statut :</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {statutsFiltres.map(s => (
                <button
                  key={s}
                  onClick={() => setFiltreStatut(s)}
                  style={{
                    padding: '6px 16px', borderRadius: '20px', border: '1px solid',
                    borderColor: filtreStatut === s ? (statutColors[s] || '#0A3D2E') : '#E8E4DC',
                    backgroundColor: filtreStatut === s ? (statutColors[s] || '#0A3D2E') : '#FFFFFF',
                    color: filtreStatut === s ? '#FFFFFF' : '#4A4A4A',
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Filtre secteur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', minWidth: '80px' }}>Secteur :</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {secteurs.map(s => (
                <button
                  key={s}
                  onClick={() => setFiltreSecteur(s)}
                  style={{
                    padding: '6px 16px', borderRadius: '20px', border: '1px solid',
                    borderColor: filtreSecteur === s ? (secteurColors[s] || '#0A3D2E') : '#E8E4DC',
                    backgroundColor: filtreSecteur === s ? (secteurColors[s] || '#0A3D2E') : '#FFFFFF',
                    color: filtreSecteur === s ? '#FFFFFF' : '#4A4A4A',
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '500',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >{s}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste projets */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A', marginBottom: '32px' }}>
            {projetsFiltres.length} projet{projetsFiltres.length > 1 ? 's' : ''} trouvé{projetsFiltres.length > 1 ? 's' : ''}
            {filtreStatut !== 'Tous' && ` · ${filtreStatut}`}
            {filtreSecteur !== 'Tous' && ` · ${filtreSecteur}`}
          </div>

          {projetsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun projet trouvé</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres filtres</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
              {projetsFiltres.map(p => (
                <ProjetCard key={p.id} projet={p} onOpen={() => setModalProjet(p)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {modalProjet && <Modal projet={modalProjet} onClose={() => setModalProjet(null)} />}
    </main>
  )
}