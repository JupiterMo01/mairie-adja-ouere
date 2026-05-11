'use client'

import React from 'react'
import { createPortal } from 'react-dom'

// ─── Données marchés ──────────────────────────────────────────────────────────
export const marches = [
  {
    id: 1,
    reference: "F_MAIRIE_ADJ_2026_001",
    titre: "Construction de trois salles de classe a l'EPP d'Ikpinle",
    description: "Travaux de construction de trois salles de classe equipees avec latrines et point d'eau dans l'arrondissement d'Ikpinle.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-03-01",
    date_limite: "2026-06-30T17:00:00",
    date_ouverture_offres: "2026-06-30T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ouvert",
    budget: "45 000 000",
    type_marche: "travaux",
    dossier_url: "",
  },
  {
    id: 2,
    reference: "F_MAIRIE_ADJ_2026_002",
    titre: "Fourniture de materiels informatiques pour la mairie",
    description: "Acquisition d'equipements informatiques pour la modernisation des services administratifs de la commune.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-03-05",
    date_limite: "2026-06-15T17:00:00",
    date_ouverture_offres: "2026-06-15T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ouvert",
    budget: "12 500 000",
    type_marche: "fourniture",
    dossier_url: "",
  },
  {
    id: 3,
    reference: "F_MAIRIE_ADJ_2026_003",
    titre: "Rehabilitation de la piste Kpoulou-Masse",
    description: "Travaux de rehabilitation et d'entretien de la piste reliant les arrondissements de Kpoulou et Masse.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-03-10",
    date_limite: "2026-06-20T17:00:00",
    date_ouverture_offres: "2026-06-20T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ferme",
    budget: "28 000 000",
    type_marche: "travaux",
    dossier_url: "",
  },
  {
    id: 4,
    reference: "F_MAIRIE_ADJ_2026_004",
    titre: "Construction d'un centre de sante dans l'arrondissement de Masse",
    description: "Construction et equipement d'un centre de sante de type CSC dans l'arrondissement de Masse.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-03-20",
    date_limite: "2026-07-05T17:00:00",
    date_ouverture_offres: "2026-07-05T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ouvert",
    budget: "95 000 000",
    type_marche: "travaux",
    dossier_url: "",
  },
  {
    id: 5,
    reference: "F_MAIRIE_ADJ_2026_005",
    titre: "Audit financier de la Commune d'Adja-Ouere – Exercice 2025",
    description: "Recrutement d'un cabinet d'audit agree pour la certification des comptes de la commune pour l'exercice budgetaire 2025.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-04-01",
    date_limite: "2026-06-10T17:00:00",
    date_ouverture_offres: "2026-06-10T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "suspendu",
    budget: "6 500 000",
    type_marche: "prestation_intellectuelle",
    dossier_url: "",
  },
  {
    id: 6,
    reference: "F_MAIRIE_ADJ_2026_006",
    titre: "Adduction d'eau potable dans l'arrondissement d'Oko-Akare",
    description: "Extension du reseau d'eau potable vers 8 villages de l'arrondissement d'Oko-Akare pour desservir environ 4 500 habitants.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2026-04-10",
    date_limite: "2026-07-15T17:00:00",
    date_ouverture_offres: "2026-07-15T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ouvert",
    budget: "67 000 000",
    type_marche: "travaux",
    dossier_url: "",
  },
  {
    id: 7,
    reference: "F_MAIRIE_ADJ_2025_009",
    titre: "Amenagement de la place publique centrale d'Adja-Ouere",
    description: "Travaux d'amenagement paysager et de viabilisation de la place publique centrale de la commune.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2025-09-12",
    date_limite: "2025-11-30T17:00:00",
    date_ouverture_offres: "2025-11-30T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ferme",
    budget: "18 000 000",
    type_marche: "travaux",
    dossier_url: "",
  },
  {
    id: 8,
    reference: "F_MAIRIE_ADJ_2025_010",
    titre: "Fourniture de mobilier scolaire pour les EPP de la commune",
    description: "Acquisition de tables-bancs, bureaux enseignants et armoires pour l'ensemble des ecoles primaires publiques de la commune.",
    autorite: "Commune d'Adja-Ouere",
    date_publication: "2025-10-03",
    date_limite: "2025-12-15T17:00:00",
    date_ouverture_offres: "2025-12-15T10:30:00",
    lieu_dossier: "Secretariat de la PRMP sise au Rez-de-chaussee de la Mairie d'Adja-Ouere",
    statut: "ferme",
    budget: "22 500 000",
    type_marche: "fourniture",
    dossier_url: "",
  },
]

// ─── Config statuts marchés ───────────────────────────────────────────────────
const statutMarcheConfig: Record<string, { label: string; bg: string; color: string; badgeBg: string }> = {
  ouvert:   { label: 'Ouvert',    bg: '#4CAF50', color: '#FFFFFF', badgeBg: '#E8F5E9' },
  ferme:    { label: 'Fermé',     bg: '#D32F2F', color: '#FFFFFF', badgeBg: '#FFEBEE' },
  suspendu: { label: 'Suspendu',  bg: '#FF6F00', color: '#FFFFFF', badgeBg: '#FFF3E0' },
}

// ─── Config types marchés ─────────────────────────────────────────────────────
const typeConfig: { [key: string]: { label: string } } = {
  fourniture: { label: "Fourniture" },
  service: { label: "Service" },
  prestation_intellectuelle: { label: "Prestation intellectuelle" },
  appel_manifestation_interet: { label: "AMI" },
  travaux: { label: "Travaux" },
  autre: { label: "Autre" },
}

const typesFiltres = ['Tous', 'travaux', 'fourniture', 'service', 'prestation_intellectuelle']

// ─── Utilitaires ──────────────────────────────────────────────────────────────
function formatDateLong(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} a ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`
}

function formatDateShort(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
}

function getJoursRestants(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function getAnnee(dateStr: string) {
  return new Date(dateStr).getFullYear()
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface Marche {
  id: number
  reference: string
  titre: string
  description: string
  autorite: string
  date_publication: string
  date_limite: string
  date_ouverture_offres: string
  lieu_dossier: string
  statut: string
  budget: string
  type_marche: string
  dossier_url: string
}

type FormEntreprise = {
  nom: string
  prenom: string
  nomEntreprise: string
  ifu: string
  rccm: string
  siege: string
  contact: string
  email: string
}

type FormErrors = Partial<Record<keyof FormEntreprise, string>>

// ─── Modal formulaire de retrait DAO ─────────────────────────────────────────
function ModalFormulaireDAO({ marche, onClose }: { marche: Marche; onClose: () => void }) {
  const [form, setForm] = React.useState<FormEntreprise>({
    nom: '', prenom: '', nomEntreprise: '', ifu: '', rccm: '', siege: '', contact: '', email: '',
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [serverError, setServerError] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormEntreprise]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.nom.trim()) newErrors.nom = 'Requis'
    if (!form.prenom.trim()) newErrors.prenom = 'Requis'
    if (!form.nomEntreprise.trim()) newErrors.nomEntreprise = 'Requis'
    if (!form.ifu.trim()) newErrors.ifu = 'Requis'
    if (!form.rccm.trim()) newErrors.rccm = 'Requis'
    if (!form.siege.trim()) newErrors.siege = 'Requis'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email invalide'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/telecharger-dao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entreprise: form, marche }),
      })
      if (!res.ok) {
        const data = await res.json()
        setServerError(data.error || 'Une erreur est survenue.')
      } else {
        setSuccess(true)
      }
    } catch {
      setServerError('Erreur réseau. Veuillez réessayer.')
    }
    setLoading(false)
  }

  const inputStyle = (error?: string): React.CSSProperties => ({
    width: '100%',
    padding: '10px 12px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '13px',
    border: `1px solid ${error ? '#D32F2F' : '#E8E4DC'}`,
    borderRadius: '6px',
    outline: 'none',
    backgroundColor: '#FAFAF8',
    color: '#1C1C1C',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '11px',
    fontWeight: '700',
    color: '#4A4A4A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '5px',
  }

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

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.55)',
        zIndex: 10000,
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
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
          maxHeight: '92vh',
          overflowY: 'auto',
        }}
      >
        <div style={{ backgroundColor: '#0A3D2E', padding: '20px 24px', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '12px', right: '12px',
              width: '30px', height: '30px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)', border: 'none',
              color: '#FFFFFF', fontSize: '15px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ×
          </button>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
            Retrait du DAO
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.3', paddingRight: '40px' }}>
            {marche.titre}
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#C9A84C', marginTop: '6px', fontWeight: '600' }}>
            Réf : {marche.reference}
          </div>
        </div>

        {success ? (
          <div style={{ padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              ✅
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>
              Dossier envoyé !
            </h3>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 8px 0' }}>
              Le DAO a été envoyé à <strong>{form.email}</strong>.
            </p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#9A9A9A', margin: '0 0 28px 0' }}>
              Vérifiez votre boîte mail (et vos spams si nécessaire).
            </p>
            <button
              onClick={onClose}
              style={{
                padding: '11px 28px', borderRadius: '8px',
                backgroundColor: '#0A3D2E', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                border: 'none', cursor: 'pointer',
              }}
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 20px 0', lineHeight: '1.6' }}>
              Renseignez les informations de votre entreprise pour recevoir le Dossier d'Appel d'Offres par email. Les champs marqués <span style={{ color: '#D32F2F' }}>*</span> sont obligatoires.
            </p>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', paddingBottom: '6px', borderBottom: '1px solid #F0EDE6' }}>
                Représentant légal
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom de famille"
                    style={inputStyle(errors.nom)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.nom ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.nom && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.nom}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Prénom <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom"
                    style={inputStyle(errors.prenom)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.prenom ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.prenom && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.prenom}</div>}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', paddingBottom: '6px', borderBottom: '1px solid #F0EDE6' }}>
                Informations de l'entreprise
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom de l'entreprise <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="nomEntreprise" value={form.nomEntreprise} onChange={handleChange} placeholder="Raison sociale complète"
                    style={inputStyle(errors.nomEntreprise)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.nomEntreprise ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.nomEntreprise && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.nomEntreprise}</div>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>IFU <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="ifu" value={form.ifu} onChange={handleChange} placeholder="Identifiant Fiscal Unique"
                      style={inputStyle(errors.ifu)}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.ifu ? '#D32F2F' : '#E8E4DC' }}
                    />
                    {errors.ifu && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.ifu}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>RCCM <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="rccm" value={form.rccm} onChange={handleChange} placeholder="N° Registre de Commerce"
                      style={inputStyle(errors.rccm)}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.rccm ? '#D32F2F' : '#E8E4DC' }}
                    />
                    {errors.rccm && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.rccm}</div>}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Siège social <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="siege" value={form.siege} onChange={handleChange} placeholder="Adresse du siège social"
                    style={inputStyle(errors.siege)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.siege ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.siege && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.siege}</div>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Contact téléphonique</label>
                    <input name="contact" value={form.contact} onChange={handleChange} placeholder="+229 XX XX XX XX" type="tel"
                      style={inputStyle()}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="email@entreprise.com" type="email"
                      style={inputStyle(errors.email)}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.email ? '#D32F2F' : '#E8E4DC' }}
                    />
                    {errors.email && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.email}</div>}
                  </div>
                </div>
              </div>
            </div>

            {serverError && (
              <div style={{ padding: '12px 16px', backgroundColor: '#FFEBEE', borderRadius: '8px', border: '1px solid #FFCDD2', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C62828' }}>⚠ {serverError}</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '4px' }}>
              <button
                type="button" onClick={onClose}
                style={{
                  padding: '11px 20px', borderRadius: '8px',
                  backgroundColor: 'transparent', color: '#4A4A4A',
                  fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                  border: '1px solid #E8E4DC', cursor: 'pointer',
                }}
              >
                Annuler
              </button>
              <button
                type="submit" disabled={loading}
                style={{
                  padding: '11px 24px', borderRadius: '8px',
                  backgroundColor: loading ? '#9A9A9A' : '#0A3D2E', color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
                  border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#C9A84C' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#0A3D2E' }}
              >
                {loading ? '⏳ Envoi...' : '⬇ Recevoir le DAO par email'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  )
}

// ─── Carte marché ─────────────────────────────────────────────────────────────
function MarchePopup({ marche, statut, estOuvert, joursRestants, urgent, onClose, onOpenDAO }: {
  marche: Marche; statut: { label: string; bg: string; color: string; badgeBg: string };
  estOuvert: boolean; joursRestants: number; urgent: boolean;
  onClose: () => void; onOpenDAO: () => void;
}) {
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

  return createPortal(
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', maxWidth: '700px', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div style={{ backgroundColor: '#0A3D2E', padding: '16px 24px', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >×</button>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span style={{ backgroundColor: statut.bg, color: statut.color, fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px' }}>{statut.label}</span>
            <span style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
              {typeConfig[marche.type_marche]?.label || 'Autre'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', paddingRight: '44px' }}>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Autorite contractante</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>{marche.autorite}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Date limite de depot</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#C9A84C' }}>{formatDateLong(marche.date_limite)}</div>
            </div>
            {estOuvert && (
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Delai</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: urgent ? '#F44336' : '#4CAF50' }}>{joursRestants} jours</div>
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: '24px' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 20px 0', lineHeight: '1.3' }}>{marche.titre}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Date de publication</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{formatDateShort(marche.date_publication)}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Date d'ouverture des offres</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{formatDateLong(marche.date_ouverture_offres)}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Reference</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{marche.reference}</div>
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Lieu d'acquisition du dossier</div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#1C1C1C', lineHeight: '1.6' }}>{marche.lieu_dossier}</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button
              onClick={() => { onClose(); onOpenDAO() }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', padding: '11px 22px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.color = '#0A3D2E' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            >Telecharger</button>
            <button
              onClick={() => { if (navigator.share) { navigator.share({ title: marche.titre, url: window.location.href }) } }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', padding: '11px 22px', borderRadius: '8px', border: '2px solid #0A3D2E', cursor: 'pointer', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
            >Partager</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

function MarcheCard({ marche }: { marche: Marche }) {
  const [popup, setPopup] = React.useState(false)
  const [formDAO, setFormDAO] = React.useState(false)
  const joursRestants = getJoursRestants(marche.date_limite)
  const urgent = joursRestants <= 7 && marche.statut === 'ouvert'
  const statut = statutMarcheConfig[marche.statut] ?? statutMarcheConfig.ouvert
  const estOuvert = marche.statut === 'ouvert'

  return (
    <>
      <div style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #E8E4DC',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        opacity: estOuvert ? 1 : 0.85,
      }}>
        {/* En-tête */}
        <div style={{
          backgroundColor: '#0A3D2E',
          padding: '16px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
              Ref
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#FFFFFF' }}>
              {marche.reference}
            </div>
          </div>
          {/* Badge statut/délai */}
          {estOuvert ? (
            <div style={{ backgroundColor: urgent ? '#F44336' : '#4CAF50', color: '#FFFFFF', borderRadius: '20px', padding: '6px 14px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', letterSpacing: '0.5px' }}>Delai</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700' }}>{joursRestants} Jours</div>
            </div>
          ) : (
            <div style={{ backgroundColor: statut.bg, color: statut.color, borderRadius: '20px', padding: '6px 14px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px' }}>{statut.label}</div>
            </div>
          )}
        </div>

        {/* Corps */}
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Objet
            </div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#1C1C1C', lineHeight: '1.5' }}>
              {marche.titre}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Autorite contractante
            </div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
              {marche.autorite}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(10,61,46,0.06)', padding: '4px 10px', borderRadius: '6px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#0A3D2E', textTransform: 'uppercase' }}>
                {typeConfig[marche.type_marche]?.label || 'Autre'}
              </span>
            </div>
          </div>
        </div>

        {/* Bouton Consulter */}
        <div style={{ padding: '0 20px 20px' }}>
          <button
            onClick={() => setPopup(true)}
            style={{
              width: '100%', padding: '11px 20px',
              backgroundColor: 'transparent', border: '2px solid #0A3D2E', borderRadius: '8px',
              color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
              letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
          >
            Consulter
          </button>
        </div>
      </div>

      {popup && (
        <MarchePopup
          marche={marche} statut={statut} estOuvert={estOuvert}
          joursRestants={joursRestants} urgent={urgent}
          onClose={() => setPopup(false)}
          onOpenDAO={() => setFormDAO(true)}
        />
      )}

      {formDAO && <ModalFormulaireDAO marche={marche} onClose={() => setFormDAO(false)} />}
    </>
  )
}

// ─── Options filtres statut ───────────────────────────────────────────────────
const statutFiltreOptions = [
  { value: 'tous',     label: 'Tous',      activeBg: '#0A3D2E' },
  { value: 'ouvert',   label: 'Ouvert',    activeBg: '#1B5E20' },
  { value: 'ferme',    label: 'Fermé',     activeBg: '#B71C1C' },
  { value: 'suspendu', label: 'Suspendu',  activeBg: '#BF360C' },
]

// ─── Page principale ──────────────────────────────────────────────────────────
export default function MarchesPublicsPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreType, setFiltreType] = React.useState('Tous')
  const [filtreStatut, setFiltreStatut] = React.useState('tous')
  const [filtreAnnee, setFiltreAnnee] = React.useState('toutes')
  const [recherche, setRecherche] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const anneesDisponibles = [...new Set(marches.map(m => getAnnee(m.date_publication)))].sort((a, b) => b - a)

  const marchesFiltres = marches.filter(m => {
    const matchType = filtreType === 'Tous' || m.type_marche === filtreType
    const matchStatut = filtreStatut === 'tous' || m.statut === filtreStatut
    const matchAnnee = filtreAnnee === 'toutes' || getAnnee(m.date_publication) === Number(filtreAnnee)
    const matchSearch = recherche === '' ||
      m.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      m.reference.toLowerCase().includes(recherche.toLowerCase())
    return matchType && matchStatut && matchAnnee && matchSearch
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
              Commande publique
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Marches publics
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Consultez les avis de marches en cours, telechargez les dossiers d'appel d'offres et soumissionnez en ligne.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1' }}>
                {marches.filter(m => m.statut === 'ouvert').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Ouverts</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', lineHeight: '1' }}>
                {marches.filter(m => m.statut === 'ferme').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Fermés</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: '700', color: '#C9A84C', lineHeight: '1', opacity: 0.55 }}>
                {marches.filter(m => m.statut === 'suspendu').length}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Suspendus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre filtres — sticky */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '12px 24px' : '14px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>

          {/* Ligne 1 : Statut + Année */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Statut */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>Statut :</span>
              {statutFiltreOptions.map(opt => {
                const actif = filtreStatut === opt.value
                const nb = opt.value === 'tous'
                  ? marches.length
                  : marches.filter(m => m.statut === opt.value).length
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFiltreStatut(opt.value)}
                    style={{
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '12px',
                      fontWeight: actif ? '700' : '500',
                      border: `${actif ? '2px' : '1px'} solid ${actif ? opt.activeBg : '#E8E4DC'}`,
                      backgroundColor: actif ? opt.activeBg : '#F8F6F1',
                      color: actif ? '#FFFFFF' : '#4A4A4A',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    {opt.label}
                    <span style={{
                      backgroundColor: actif ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.08)',
                      color: actif ? '#FFFFFF' : '#6A6A6A',
                      fontSize: '10px', fontWeight: '700',
                      padding: '1px 6px', borderRadius: '10px',
                    }}>
                      {nb}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Séparateur */}
            <div style={{ width: '1px', height: '20px', backgroundColor: '#E8E4DC', flexShrink: 0, alignSelf: 'center' }} />

            {/* Année */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>Année :</span>
              <button
                onClick={() => setFiltreAnnee('toutes')}
                style={{
                  padding: '4px 14px', borderRadius: '20px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px',
                  fontWeight: filtreAnnee === 'toutes' ? '700' : '500',
                  border: `${filtreAnnee === 'toutes' ? '2px' : '1px'} solid ${filtreAnnee === 'toutes' ? '#0A3D2E' : '#E8E4DC'}`,
                  backgroundColor: filtreAnnee === 'toutes' ? '#0A3D2E' : '#F8F6F1',
                  color: filtreAnnee === 'toutes' ? '#FFFFFF' : '#4A4A4A',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}
              >
                Toutes
              </button>
              {anneesDisponibles.map(annee => (
                <button
                  key={annee}
                  onClick={() => setFiltreAnnee(String(annee))}
                  style={{
                    padding: '4px 14px', borderRadius: '20px',
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px',
                    fontWeight: filtreAnnee === String(annee) ? '700' : '500',
                    border: `${filtreAnnee === String(annee) ? '2px' : '1px'} solid ${filtreAnnee === String(annee) ? '#0A3D2E' : '#E8E4DC'}`,
                    backgroundColor: filtreAnnee === String(annee) ? '#0A3D2E' : '#F8F6F1',
                    color: filtreAnnee === String(annee) ? '#FFFFFF' : '#4A4A4A',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {annee}
                </button>
              ))}
            </div>
          </div>

          {/* Ligne 2 : Type + Recherche + Compteur */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px' }}>Type :</span>
              {typesFiltres.map(t => (
                <button key={t} onClick={() => setFiltreType(t)} style={{
                  padding: '4px 12px', borderRadius: '20px',
                  border: `${filtreType === t ? '2px' : '1px'} solid ${filtreType === t ? '#0A3D2E' : '#E8E4DC'}`,
                  backgroundColor: filtreType === t ? '#0A3D2E' : '#FFFFFF',
                  color: filtreType === t ? '#FFFFFF' : '#4A4A4A',
                  fontFamily: 'Outfit, sans-serif', fontSize: '12px',
                  fontWeight: filtreType === t ? '700' : '400',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}>
                  {t === 'Tous' ? 'Tous' : typeConfig[t]?.label || t}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: isMobile ? '100%' : 'auto' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', whiteSpace: 'nowrap' }}>
                {marchesFiltres.length} résultat{marchesFiltres.length > 1 ? 's' : ''}
              </span>
              <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', pointerEvents: 'none' }}>🔍</span>
                <input
                  type="text" placeholder="Rechercher..." value={recherche}
                  onChange={e => setRecherche(e.target.value)}
                  style={{ padding: '6px 14px 6px 34px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: '20px', outline: 'none', backgroundColor: '#F8F6F1', width: '100%', boxSizing: 'border-box' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {marchesFiltres.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>Aucun marche trouve</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>Essayez avec d'autres filtres</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {marchesFiltres.map(m => <MarcheCard key={m.id} marche={m} />)}
            </div>
          )}
        </div>
      </section>

      {/* Info procédure */}
      <section style={{ backgroundColor: '#1C3557', padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 20px 0' }}>
              Comment soumissionner ?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Cliquez sur « Consulter » pour voir les details du marche',
                'Cliquez sur « Telecharger » et renseignez les infos de votre entreprise',
                'Recevez le DAO par email et preparez votre offre',
                'Deposez votre dossier sous pli ferme avant la date limite',
              ].map((step, i) => (
                <div key={step} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E' }}>{i + 1}</span>
                  </div>
                  <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', paddingTop: '2px' }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '28px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', border: '1px solid rgba(201,168,76,0.2)' }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700', color: '#C9A84C', margin: '0 0 20px 0' }}>Contact Marches Publics</h3>
            {[
              { icon: '🏛️', label: 'Adresse', value: 'PRMP – Rez-de-chaussee de la Mairie d\'Adja-Ouere' },
              { icon: '📞', label: 'Telephone', value: '+229 21 XX XX XX' },
              { icon: '✉️', label: 'Email', value: 'marches@mairie-adja-ouere.bj' },
              { icon: '🕐', label: 'Horaires', value: 'Lun–Ven, 8h–17h' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '14px' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                  {item.icon} {item.label}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
