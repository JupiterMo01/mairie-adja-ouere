'use client'

import Link from 'next/link'
import React from 'react'

// ─── Données enrichies ────────────────────────────────────────────────────────
export const recrutements = [
  {
    id: 1,
    titre: "Recrutement d'un comptable communal",
    description: "La commune d'Adja-Ouere recrute un comptable qualifie pour renforcer son service financier et assurer la gestion rigoureuse des ressources.",
    date_limite: "2026-06-30T17:00:00",
    statut: "ouvert",
    fichier: "#",
    direction: "Service des Finances et Budget",
    type_contrat: "CDI",
    niveau: "BAC+3 minimum",
    lieu: "Mairie d'Adja-Ouere",
    missions: [
      "Tenir la comptabilité générale et analytique de la commune",
      "Préparer les états financiers mensuels et annuels",
      "Assurer le suivi de l'exécution du budget communal",
      "Contrôler les pièces justificatives de dépenses",
      "Produire les rapports financiers à destination des partenaires",
    ],
    profil: [
      "Licence ou BTS en comptabilité, finance ou gestion",
      "Minimum 2 ans d'expérience en comptabilité",
      "Maîtrise des logiciels comptables (SAGE, Excel)",
      "Rigueur, intégrité et sens des responsabilités",
      "Connaissance de la comptabilité publique souhaitée",
    ],
    dossier: [
      "Lettre de motivation adressée au Maire",
      "CV détaillé avec photo",
      "Copies certifiées des diplômes",
      "Attestations d'expériences professionnelles",
      "Extrait de casier judiciaire (bulletin n°3)",
    ],
  },
  {
    id: 2,
    titre: "Recrutement d'un agent de developpement local",
    description: "Poste d'agent de developpement local charge de coordonner les projets de developpement et d'appuyer les populations dans leurs initiatives.",
    date_limite: "2026-07-10T17:00:00",
    statut: "ouvert",
    fichier: "#",
    direction: "Service de la Planification",
    type_contrat: "CDD 2 ans renouvelable",
    niveau: "BAC+3 minimum",
    lieu: "Terrain – Arrondissements",
    missions: [
      "Coordonner la mise en œuvre du Plan de Développement Communal",
      "Animer les cadres de concertation villageois et communautaires",
      "Identifier et formuler des projets de développement local",
      "Assurer le suivi-évaluation des projets en cours",
      "Rédiger des rapports d'activités mensuels et trimestriels",
    ],
    profil: [
      "Licence en sciences sociales, développement ou gestion de projet",
      "Bonne connaissance du milieu rural béninois",
      "Aptitude à la mobilité sur le terrain",
      "Maîtrise du Fon ou Yoruba appréciée",
      "Capacité à travailler en équipe et à communiquer",
    ],
    dossier: [
      "Lettre de motivation adressée au Maire",
      "CV détaillé avec photo",
      "Copies certifiées des diplômes",
      "Attestations d'expériences professionnelles",
      "Permis de conduire catégorie A ou B (souhaité)",
    ],
  },
  {
    id: 3,
    titre: "Recrutement de deux agents d'etat civil",
    description: "La mairie recrute deux agents d'etat civil pour renforcer ses capacites d'enregistrement des actes de naissance, mariage et deces.",
    date_limite: "2026-02-20T17:00:00",
    statut: "ferme",
    fichier: "#",
    direction: "Service de l'État Civil",
    type_contrat: "CDI",
    niveau: "BAC+2 minimum",
    lieu: "Mairie d'Adja-Ouere",
    missions: [
      "Enregistrer les actes de naissance, mariage et décès",
      "Délivrer les extraits d'actes et livrets de famille",
      "Tenir les registres d'état civil dans le respect des procédures",
      "Accueillir et orienter les usagers au guichet",
      "Assurer la mise à jour des archives d'état civil",
    ],
    profil: [
      "BTS en secrétariat, droit ou administration publique",
      "Bonne maîtrise du Pack Office (Word, Excel)",
      "Sens du service public et de l'accueil",
      "Rigueur dans la gestion des documents officiels",
      "Connaissance du code des personnes et de la famille appréciée",
    ],
    dossier: [
      "Lettre de motivation adressée au Maire",
      "CV détaillé avec photo",
      "Copies certifiées des diplômes",
      "Extrait de casier judiciaire (bulletin n°3)",
      "Certificat de résidence dans la commune",
    ],
  },
  {
    id: 4,
    titre: "Recrutement d'un charge de communication",
    description: "La mairie d'Adja-Ouere recrute un charge de communication pour renforcer sa visibilite institutionnelle et la relation avec les citoyens.",
    date_limite: "2026-09-05T17:00:00",
    statut: "suspendu",
    fichier: "#",
    direction: "Cabinet du Maire",
    type_contrat: "CDI",
    niveau: "BAC+4/5",
    lieu: "Mairie d'Adja-Ouere",
    missions: [
      "Élaborer et mettre en œuvre la stratégie de communication",
      "Gérer le site web et les réseaux sociaux officiels de la mairie",
      "Rédiger les communiqués de presse et discours officiels",
      "Organiser les événements institutionnels et cérémonies",
      "Assurer les relations avec les médias locaux et nationaux",
    ],
    profil: [
      "Master ou Licence en communication, journalisme ou sciences politiques",
      "Excellentes compétences rédactionnelles en français",
      "Maîtrise des outils numériques et réseaux sociaux",
      "Expérience dans le secteur public souhaitée",
      "Capacité à travailler sous pression et à respecter les délais",
    ],
    dossier: [
      "Lettre de motivation adressée au Maire",
      "CV détaillé avec photo et portfolio",
      "Copies certifiées des diplômes",
      "Attestations d'expériences professionnelles",
      "Extrait de casier judiciaire (bulletin n°3)",
    ],
  },
]

// ─── Utilitaires (identiques à SectionRecrutements) ──────────────────────────
const moisLongs = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']

function getJoursRestants(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getDate()} ${moisLongs[date.getMonth()]} ${date.getFullYear()}`
}

type Recrutement = typeof recrutements[0]

// ─── Popup détails poste ──────────────────────────────────────────────────────
function PopupDetails({ rec, onClose }: { rec: Recrutement; onClose: () => void }) {
  const joursRestants = getJoursRestants(rec.date_limite)
  const urgent = joursRestants <= 7

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: '720px',
          width: '100%',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* En-tête */}
        <div style={{ backgroundColor: '#0A3D2E', padding: '20px 24px', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '12px', right: '12px',
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
              color: '#FFFFFF', fontSize: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ×
          </button>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span style={{
              backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C',
              fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
              padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px',
            }}>
              {rec.type_contrat}
            </span>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
              padding: '3px 10px', borderRadius: '20px',
            }}>
              {rec.niveau}
            </span>
            <span style={{
              backgroundColor: urgent ? 'rgba(244,67,54,0.2)' : 'rgba(76,175,80,0.2)',
              color: urgent ? '#FF6B6B' : '#66BB6A',
              fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
              padding: '3px 10px', borderRadius: '20px',
              border: `1px solid ${urgent ? 'rgba(244,67,54,0.4)' : 'rgba(76,175,80,0.4)'}`,
            }}>
              {urgent ? `Urgent — ${joursRestants}j` : `${joursRestants} jours restants`}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700',
            color: '#FFFFFF', margin: '0 0 8px 0', lineHeight: '1.3', paddingRight: '40px',
          }}>
            {rec.titre}
          </h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
              🏛️ {rec.direction}
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
              📍 {rec.lieu}
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#C9A84C', fontWeight: '600' }}>
              📅 Limite : {formatDate(rec.date_limite)}
            </span>
          </div>
        </div>

        {/* Corps */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Description */}
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px',
            lineHeight: '1.7', color: '#4A4A4A', margin: 0,
            padding: '16px 20px', backgroundColor: '#F8F6F1',
            borderRadius: '10px', borderLeft: '4px solid #C9A84C',
          }}>
            {rec.description}
          </p>

          {/* Missions + Profil côte à côte */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

            <div>
              <div style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700',
                color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ width: '20px', height: '2px', backgroundColor: '#C9A84C' }} />
                Missions principales
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {rec.missions.map((m, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C9A84C', flexShrink: 0, fontWeight: '700', fontSize: '14px', marginTop: '1px' }}>›</span>
                    <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#4A4A4A' }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700',
                color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ width: '20px', height: '2px', backgroundColor: '#C9A84C' }} />
                Profil recherché
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {rec.profil.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C9A84C', flexShrink: 0, fontWeight: '700', fontSize: '14px', marginTop: '1px' }}>›</span>
                    <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#4A4A4A' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dossier à fournir */}
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700',
              color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px',
              marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{ width: '20px', height: '2px', backgroundColor: '#C9A84C' }} />
              Dossier de candidature
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {rec.dossier.map((doc, i) => (
                <span key={i} style={{
                  backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
                  borderRadius: '6px', padding: '5px 12px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#4A4A4A',
                }}>
                  📄 {doc}
                </span>
              ))}
            </div>
          </div>

          {/* Boutons d'action */}
          <div style={{
            display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap',
            paddingTop: '8px', borderTop: '1px solid #F0EDE6',
          }}>
            <button
              onClick={onClose}
              style={{
                padding: '11px 20px', borderRadius: '8px',
                backgroundColor: 'transparent', color: '#4A4A4A',
                fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                border: '1px solid #E8E4DC', cursor: 'pointer',
              }}
            >
              Fermer
            </button>
            <button
              onClick={() => window.open(rec.fichier, '_blank')}
              style={{
                padding: '11px 24px', borderRadius: '8px',
                backgroundColor: '#0A3D2E', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.color = '#0A3D2E' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            >
              ⬇ Telecharger l'offre
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Config statuts ───────────────────────────────────────────────────────────
const statutConfig: Record<string, { label: string; bg: string; color: string; barColor: string }> = {
  ouvert:   { label: 'En cours',  bg: '#E8F5E9', color: '#1B5E20', barColor: '#0A3D2E' },
  ferme:    { label: 'Fermé',     bg: '#FFEBEE', color: '#B71C1C', barColor: '#D32F2F' },
  suspendu: { label: 'Suspendu',  bg: '#FFF3E0', color: '#BF360C', barColor: '#FF6F00' },
}

// ─── Carte recrutement (format IDENTIQUE à SectionRecrutements) ───────────────
function RecrutementCard({ recrutement }: { recrutement: Recrutement }) {
  const [hovered, setHovered] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)
  const [popup, setPopup] = React.useState(false)
  const joursRestants = getJoursRestants(recrutement.date_limite)
  const urgent = joursRestants <= 7 && recrutement.statut === 'ouvert'
  const statut = statutConfig[recrutement.statut] ?? statutConfig.ouvert
  const estOuvert = recrutement.statut === 'ouvert'

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
          boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.10)' : '0 2px 16px rgba(0,0,0,0.06)',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          opacity: estOuvert ? 1 : 0.8,
        }}
      >
        {/* Barre coloree en haut */}
        <div style={{ height: '4px', backgroundColor: urgent ? '#F44336' : statut.barColor }} />

        {/* Corps */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>

          {/* Statut + délai */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{
              backgroundColor: statut.bg, color: statut.color,
              fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700',
              padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase',
            }}>
              {statut.label}
            </span>
            {estOuvert && (
              <span style={{
                backgroundColor: urgent ? 'rgba(244,67,54,0.1)' : 'rgba(76,175,80,0.1)',
                color: urgent ? '#F44336' : '#4CAF50',
                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700',
                padding: '4px 12px', borderRadius: '20px',
                border: `1px solid ${urgent ? '#F44336' : '#4CAF50'}`,
              }}>
                {urgent ? `Urgent — ${joursRestants}j` : `${joursRestants} jours restants`}
              </span>
            )}
          </div>

          {/* Titre */}
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700',
            color: '#0A3D2E', margin: 0, lineHeight: '1.3',
          }}>
            {recrutement.titre}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px',
            color: '#6A6A6A', margin: 0, lineHeight: '1.6', flex: 1,
          }}>
            {recrutement.description}
          </p>

          {/* Date limite */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '12px 16px', backgroundColor: '#F8F6F1', borderRadius: '8px',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: urgent ? '#F44336' : '#0A3D2E', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
              Date limite de depot :
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: urgent ? '#F44336' : '#0A3D2E' }}>
              {formatDate(recrutement.date_limite)}
            </span>
          </div>
        </div>

        {/* Boutons */}
        <div style={{ padding: '0 24px 24px', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => window.open(recrutement.fichier, '_blank')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              flex: 1, padding: '11px 16px',
              backgroundColor: btnHovered ? '#C9A84C' : '#0A3D2E',
              color: btnHovered ? '#0A3D2E' : '#FFFFFF',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
              borderRadius: '8px', border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Telecharger l'offre
          </button>
          <button
            onClick={() => setPopup(true)}
            style={{
              flex: 1, padding: '11px 16px',
              backgroundColor: 'transparent', color: '#0A3D2E',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
              borderRadius: '8px', border: '2px solid #0A3D2E',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
          >
            En savoir plus
          </button>
        </div>
      </div>

      {/* Popup détails */}
      {popup && <PopupDetails rec={recrutement} onClose={() => setPopup(false)} />}
    </>
  )
}

const filtreOptions = [
  { value: 'tous',     label: 'Tous',      activeBg: '#0A3D2E', activeBorder: '#0A3D2E', count: (s: string[]) => s.length },
  { value: 'ouvert',   label: 'En cours',  activeBg: '#1B5E20', activeBorder: '#1B5E20', count: (s: string[]) => s.filter(x => x === 'ouvert').length },
  { value: 'ferme',    label: 'Fermés',    activeBg: '#B71C1C', activeBorder: '#B71C1C', count: (s: string[]) => s.filter(x => x === 'ferme').length },
  { value: 'suspendu', label: 'Suspendus', activeBg: '#BF360C', activeBorder: '#BF360C', count: (s: string[]) => s.filter(x => x === 'suspendu').length },
]

// ─── Page principale ──────────────────────────────────────────────────────────
export default function RecrutementsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [recherche, setRecherche] = React.useState('')
  const [filtreStatut, setFiltreStatut] = React.useState('tous')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const statuts = recrutements.map(r => r.statut)

  const recrutementsFiltres = recrutements.filter(r => {
    const matchStatut = filtreStatut === 'tous' || r.statut === filtreStatut
    const matchRecherche = recherche === '' ||
      r.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      r.direction.toLowerCase().includes(recherche.toLowerCase()) ||
      r.type_contrat.toLowerCase().includes(recherche.toLowerCase())
    return matchStatut && matchRecherche
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
              Opportunites
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Recrutements en cours
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Rejoignez l'equipe de la Commune d'Adja-Ouere. Consultez les postes ouverts, telechargez les offres et candidatez.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>
                {recrutements.filter(r => r.statut === 'ouvert').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>En cours</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', lineHeight: '1' }}>
                {recrutements.filter(r => r.statut === 'ferme').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Fermés</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1', opacity: 0.6 }}>
                {recrutements.filter(r => r.statut === 'suspendu').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Suspendus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre filtres + recherche — sticky */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '14px 24px' : '16px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>

          {/* Filtres statut */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {filtreOptions.map(opt => {
              const actif = filtreStatut === opt.value
              const nb = opt.count(statuts)
              return (
                <button
                  key={opt.value}
                  onClick={() => setFiltreStatut(opt.value)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    fontWeight: actif ? '700' : '500',
                    border: `${actif ? '2px' : '1px'} solid ${actif ? opt.activeBorder : '#E8E4DC'}`,
                    backgroundColor: actif ? opt.activeBg : '#F8F6F1',
                    color: actif ? '#FFFFFF' : '#4A4A4A',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {opt.label}
                  <span style={{
                    backgroundColor: actif ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.08)',
                    color: actif ? '#FFFFFF' : '#6A6A6A',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '1px 7px',
                    borderRadius: '10px',
                  }}>
                    {nb}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Recherche + compteur */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', whiteSpace: 'nowrap' }}>
              {recrutementsFiltres.length} résultat{recrutementsFiltres.length > 1 ? 's' : ''}
            </span>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', pointerEvents: 'none' }}>🔍</span>
              <input
                type="text" placeholder="Rechercher..." value={recherche}
                onChange={e => setRecherche(e.target.value)}
                style={{ padding: '7px 14px 7px 34px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: '20px', outline: 'none', backgroundColor: '#F8F6F1', width: '200px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille — format identique à l'accueil */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {recrutementsFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👔</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun poste trouve</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres termes</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {recrutementsFiltres.map(r => <RecrutementCard key={r.id} recrutement={r} />)}
            </div>
          )}
        </div>
      </section>

      {/* CTA candidature spontanée */}
      <section style={{ backgroundColor: '#1C3557', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>📩</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0' }}>
            Candidature spontanee
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px 0' }}>
            Vous ne trouvez pas un poste correspondant a votre profil ? Envoyez votre candidature spontanee. Nous l'archiverons pour vous contacter lors de prochaines ouvertures.
          </p>
          <a href="mailto:rh@mairie-adja-ouere.bj?subject=Candidature%20spontanée%20-%20Mairie%20Adja-Ouère" style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#C9A84C', color: '#0A3D2E',
                fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700',
                padding: '16px 32px', borderRadius: '10px', border: 'none', cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B8973B' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C' }}
            >
              ✉ Envoyer ma candidature
            </button>
          </a>
          <div style={{ marginTop: '14px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            rh@mairie-adja-ouere.bj
          </div>
        </div>
      </section>

    </main>
  )
}
