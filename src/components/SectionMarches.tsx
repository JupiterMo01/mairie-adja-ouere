'use client'

import Link from 'next/link'
import React from 'react'
import { marches as tousMarches } from '@/app/opportunites/marches/page'

const marches = tousMarches
  .filter(m => m.statut === 'ouvert')
  .slice(0, 4)

type Marche = typeof tousMarches[0]

const typeConfig: { [key: string]: { label: string } } = {
  fourniture: { label: "Fourniture" },
  service: { label: "Service" },
  prestation_intellectuelle: { label: "Prestation intellectuelle" },
  appel_manifestation_interet: { label: "AMI" },
  travaux: { label: "Travaux" },
  autre: { label: "Autre" },
}

function formatDateLong(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} a ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`
}

function formatDateShort(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
}

function getJoursRestants(dateStr: string) {
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

type FormEntreprise = { nom: string; prenom: string; nomEntreprise: string; ifu: string; rccm: string; siege: string; contact: string; email: string }
type FormErrors = Partial<Record<keyof FormEntreprise, string>>

function ModalFormulaireDAO({ marche, onClose }: { marche: Marche; onClose: () => void }) {
  const [form, setForm] = React.useState<FormEntreprise>({ nom: '', prenom: '', nomEntreprise: '', ifu: '', rccm: '', siege: '', contact: '', email: '' })
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
    setLoading(true); setServerError('')
    try {
      const res = await fetch('/api/telecharger-dao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ entreprise: form, marche }) })
      if (!res.ok) { const data = await res.json(); setServerError(data.error || 'Une erreur est survenue.') }
      else setSuccess(true)
    } catch { setServerError('Erreur reseau. Veuillez reessayer.') }
    setLoading(false)
  }

  const inputStyle = (error?: string): React.CSSProperties => ({ width: '100%', padding: '10px 12px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', border: `1px solid ${error ? '#D32F2F' : '#E8E4DC'}`, borderRadius: '6px', outline: 'none', backgroundColor: '#FAFAF8', color: '#1C1C1C', boxSizing: 'border-box', transition: 'border-color 0.15s ease' })
  const labelStyle: React.CSSProperties = { display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', maxWidth: '600px', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.25)', maxHeight: '92vh', overflowY: 'auto' }}>
        <div style={{ backgroundColor: '#0A3D2E', padding: '20px 24px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Retrait du DAO</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.3', paddingRight: '40px' }}>{marche.titre}</div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#C9A84C', marginTop: '6px', fontWeight: '600' }}>Réf : {marche.reference}</div>
        </div>
        {success ? (
          <div style={{ padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>✅</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>Dossier envoye !</h3>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 8px 0' }}>Le DAO a ete envoye a <strong>{form.email}</strong>.</p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#9A9A9A', margin: '0 0 28px 0' }}>Verifiez votre boite mail (et vos spams si necessaire).</p>
            <button onClick={onClose} style={{ padding: '11px 28px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>Fermer</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 20px 0', lineHeight: '1.6' }}>Renseignez les informations de votre entreprise pour recevoir le DAO par email. Les champs <span style={{ color: '#D32F2F' }}>*</span> sont obligatoires.</p>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', paddingBottom: '6px', borderBottom: '1px solid #F0EDE6' }}>Representant legal</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom de famille" style={inputStyle(errors.nom)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.nom ? '#D32F2F' : '#E8E4DC' }} />
                  {errors.nom && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.nom}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Prenom <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prenom" style={inputStyle(errors.prenom)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.prenom ? '#D32F2F' : '#E8E4DC' }} />
                  {errors.prenom && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.prenom}</div>}
                </div>
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', paddingBottom: '6px', borderBottom: '1px solid #F0EDE6' }}>Informations de l&apos;entreprise</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom de l&apos;entreprise <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="nomEntreprise" value={form.nomEntreprise} onChange={handleChange} placeholder="Raison sociale complete" style={inputStyle(errors.nomEntreprise)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.nomEntreprise ? '#D32F2F' : '#E8E4DC' }} />
                  {errors.nomEntreprise && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.nomEntreprise}</div>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>IFU <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="ifu" value={form.ifu} onChange={handleChange} placeholder="Identifiant Fiscal Unique" style={inputStyle(errors.ifu)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.ifu ? '#D32F2F' : '#E8E4DC' }} />
                    {errors.ifu && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.ifu}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>RCCM <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="rccm" value={form.rccm} onChange={handleChange} placeholder="N° Registre de Commerce" style={inputStyle(errors.rccm)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.rccm ? '#D32F2F' : '#E8E4DC' }} />
                    {errors.rccm && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.rccm}</div>}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Siege social <span style={{ color: '#D32F2F' }}>*</span></label>
                  <input name="siege" value={form.siege} onChange={handleChange} placeholder="Adresse du siege social" style={inputStyle(errors.siege)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.siege ? '#D32F2F' : '#E8E4DC' }} />
                  {errors.siege && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.siege}</div>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Contact telephonique</label>
                    <input name="contact" value={form.contact} onChange={handleChange} placeholder="+229 XX XX XX XX" type="tel" style={inputStyle()} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: '#D32F2F' }}>*</span></label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="email@entreprise.com" type="email" style={inputStyle(errors.email)} onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }} onBlur={e => { e.currentTarget.style.borderColor = errors.email ? '#D32F2F' : '#E8E4DC' }} />
                    {errors.email && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D32F2F', marginTop: '3px' }}>{errors.email}</div>}
                  </div>
                </div>
              </div>
            </div>
            {serverError && <div style={{ padding: '12px 16px', backgroundColor: '#FFEBEE', borderRadius: '8px', border: '1px solid #FFCDD2', marginBottom: '16px' }}><span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C62828' }}>⚠ {serverError}</span></div>}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" onClick={onClose} style={{ padding: '11px 20px', borderRadius: '8px', backgroundColor: 'transparent', color: '#4A4A4A', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', border: '1px solid #E8E4DC', cursor: 'pointer' }}>Annuler</button>
              <button type="submit" disabled={loading} style={{ padding: '11px 24px', borderRadius: '8px', backgroundColor: loading ? '#9A9A9A' : '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#C9A84C' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#0A3D2E' }}
              >{loading ? '⏳ Envoi...' : '⬇ Recevoir le DAO par email'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function MarcheCard({ marche, animDelay }: { marche: Marche; animDelay: number }) {
  const [popup, setPopup] = React.useState(false)
  const [formDAO, setFormDAO] = React.useState(false)
  const joursRestants = getJoursRestants(marche.date_limite)
  const urgent = joursRestants <= 7

  return (
    <>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E8E4DC', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', animation: 'fadeSlide 0.4s ease both', animationDelay: `${animDelay}s` }}>
        <div style={{ backgroundColor: '#0A3D2E', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Ref</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#FFFFFF' }}>{marche.reference}</div>
          </div>
          <div style={{ backgroundColor: urgent ? '#F44336' : '#4CAF50', color: '#FFFFFF', borderRadius: '20px', padding: '6px 14px', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: '600', letterSpacing: '0.5px' }}>Delai</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700' }}>{joursRestants} Jours</div>
          </div>
        </div>
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Objet</div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#1C1C1C', lineHeight: '1.5' }}>{marche.titre}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#0A3D2E', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Autorite contractante</div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>{marche.autorite}</div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(10,61,46,0.06)', padding: '4px 10px', borderRadius: '6px', alignSelf: 'flex-start' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#0A3D2E', textTransform: 'uppercase' }}>{typeConfig[marche.type_marche]?.label || 'Autre'}</span>
          </div>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <button onClick={() => setPopup(true)} style={{ width: '100%', padding: '11px 20px', backgroundColor: 'transparent', border: '2px solid #0A3D2E', borderRadius: '8px', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
          >Consulter</button>
        </div>
      </div>

      {popup && (
        <div onClick={() => setPopup(false)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', maxWidth: '700px', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#0A3D2E', padding: '16px 24px', position: 'relative' }}>
              <button onClick={() => setPopup(false)} style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>x</button>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', paddingRight: '44px' }}>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Autorite contractante</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#FFFFFF' }}>{marche.autorite}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Date limite de depot</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#C9A84C' }}>{formatDateLong(marche.date_limite)}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Delai</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: urgent ? '#F44336' : '#4CAF50' }}>{joursRestants} jours</div>
                </div>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 20px 0', lineHeight: '1.3' }}>{marche.titre}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Date de publication</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{marche.date_publication ? formatDateShort(marche.date_publication) : '—'}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Date d&apos;ouverture des offres</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{marche.date_ouverture_offres ? formatDateLong(marche.date_ouverture_offres) : '—'}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Reference</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C' }}>{marche.reference}</div>
                </div>
              </div>
              {marche.lieu_dossier && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Lieu d&apos;acquisition du dossier</div>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#1C1C1C', lineHeight: '1.6' }}>{marche.lieu_dossier}</div>
                </div>
              )}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <button onClick={() => { setPopup(false); setFormDAO(true) }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', padding: '11px 22px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.color = '#0A3D2E' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
                >Telecharger</button>
                <button onClick={() => { if (navigator.share) { navigator.share({ title: marche.titre, url: window.location.href }) } }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', padding: '11px 22px', borderRadius: '8px', border: '2px solid #0A3D2E', cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0A3D2E' }}
                >Partager</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {formDAO && <ModalFormulaireDAO marche={marche} onClose={() => setFormDAO(false)} />}
    </>
  )
}

export default function SectionMarches() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Commande publique</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>Marches publics en cours</h2>
          </div>
          <Link href="/opportunites/marches" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#156840'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0A3D2E'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Voir tous les marches →</Link>
        </div>

        {marches.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#F8F6F1', borderRadius: '16px', border: '1px solid #E8E4DC' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏗️</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '600', color: '#0A3D2E', margin: '0 0 8px 0' }}>Aucun marché ouvert</p>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#9A9A9A', margin: 0 }}>Les appels d&apos;offres en cours seront affichés ici.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {marches.map((marche, i) => <MarcheCard key={marche.id} marche={marche} animDelay={i * 0.08} />)}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
