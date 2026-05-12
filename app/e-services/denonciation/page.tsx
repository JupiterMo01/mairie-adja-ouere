'use client'

import React from 'react'

const categories = [
  'Corruption ou détournement de fonds publics',
  'Abus de pouvoir ou harcèlement par un agent public',
  'Non-respect des procédures administratives',
  'Mauvaise gestion des marchés publics',
  'Occupation illégale du domaine public',
  'Destruction ou dégradation de biens communaux',
  'Pollution de l\'environnement',
  'Fraude à l\'état civil',
  'Autre infraction',
]

const arrondissements = ['Adja-Ouere', 'Ikpinle', 'Kpoulou', 'Massè', 'Oko-Akare', 'Tatonnonkon', 'Hors commune']

type FormData = {
  categorie: string
  description: string
  lieu: string
  arrondissement: string
  date_faits: string
  personnes_impliquees: string
  anonyme: string
  nom: string
  prenom: string
  email: string
  telephone: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function Denonciation() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [files, setFiles] = React.useState<File[]>([])
  const [dragOver, setDragOver] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})

  const [form, setForm] = React.useState<FormData>({
    categorie: '', description: '', lieu: '', arrondissement: '', date_faits: '',
    personnes_impliquees: '', anonyme: 'non', nom: '', prenom: '', email: '', telephone: '',
  })

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return
    const newFiles = Array.from(fileList).filter(f => f.size <= 10 * 1024 * 1024)
    setFiles(prev => [...prev, ...newFiles].slice(0, 5))
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.categorie) newErrors.categorie = 'La catégorie est requise'
    if (!form.description.trim() || form.description.trim().length < 50)
      newErrors.description = 'La description doit comporter au moins 50 caractères'
    if (!form.arrondissement) newErrors.arrondissement = 'L\'arrondissement est requis'
    if (form.anonyme === 'non') {
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email invalide'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setLoading(false)
    window.scrollTo(0, 0)
  }

  const inputStyle = (error?: string): React.CSSProperties => ({
    width: '100%', padding: '11px 14px',
    fontFamily: 'Outfit, sans-serif', fontSize: '14px',
    border: `1px solid ${error ? '#D32F2F' : '#E8E4DC'}`,
    borderRadius: '8px', outline: 'none',
    backgroundColor: '#FFFFFF', color: '#1C1C1C',
    boxSizing: 'border-box', transition: 'border-color 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: 'Outfit, sans-serif',
    fontSize: '12px', fontWeight: '600', color: '#4A4A4A',
    textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px',
  }

  const ErrorMsg = ({ field }: { field: keyof FormData }) =>
    errors[field] ? <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors[field]}</div> : null

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px' }}>
            ✅
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            Signalement enregistré
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 28px 0' }}>
            Votre signalement a été transmis au responsable compétent. Il sera traité en toute confidentialité dans un délai de <strong>15 jours ouvrables</strong>. Si vous avez fourni votre email, vous recevrez un retour à cette adresse.
          </p>
          <div style={{ padding: '16px 20px', backgroundColor: '#FFF8E1', borderRadius: '10px', border: '1px solid #FFE082', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#E65100', fontWeight: '600' }}>
              🔒 Vos informations sont strictement confidentielles et ne seront pas divulguées aux personnes visées par le signalement.
            </span>
          </div>
          <div style={{ padding: '16px 20px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '10px', border: '1px solid rgba(10,61,46,0.15)', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', fontWeight: '600' }}>
              📧 Pensez à vérifier vos spams si vous ne recevez pas de réponse dans ce délai.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setSubmitted(false)} style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
              Nouveau signalement
            </button>
            <a href="/e-services" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: 'transparent', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: '1px solid #0A3D2E', cursor: 'pointer' }}>
                Retour aux e-services
              </button>
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '80px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>E-Services</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            📢 Signalement citoyen
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '640px' }}>
            Signalez une infraction ou un dysfonctionnement au sein des services communaux. Votre signalement sera traité avec sérieux et en toute confidentialité.
          </p>
          <div style={{ marginTop: '24px', padding: '16px 20px', backgroundColor: 'rgba(201,168,76,0.12)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.3)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>🔒</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C', fontWeight: '600' }}>
              Confidentialité garantie — Signalement anonyme possible
            </span>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>

            {/* Objet du signalement */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                📋 Objet du signalement
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Catégorie de l'infraction *</label>
                  <select name="categorie" value={form.categorie} onChange={handleChange} style={{ ...inputStyle(errors.categorie), cursor: 'pointer' }}>
                    <option value="">-- Sélectionner la catégorie --</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ErrorMsg field="categorie" />
                </div>
                <div>
                  <label style={labelStyle}>
                    Description détaillée des faits *
                    <span style={{ fontWeight: '400', color: '#9A9A9A', marginLeft: '8px' }}>
                      ({form.description.length} / min. 50 caractères)
                    </span>
                  </label>
                  <textarea
                    name="description" value={form.description} onChange={handleChange}
                    placeholder="Décrivez précisément les faits : quoi, quand, comment, qui était présent... Plus votre description est précise, plus l'enquête sera efficace."
                    rows={6}
                    style={{ ...inputStyle(errors.description), resize: 'vertical' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.description ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="description" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Arrondissement concerné *</label>
                    <select name="arrondissement" value={form.arrondissement} onChange={handleChange} style={{ ...inputStyle(errors.arrondissement), cursor: 'pointer' }}>
                      <option value="">-- Sélectionner --</option>
                      {arrondissements.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    <ErrorMsg field="arrondissement" />
                  </div>
                  <div>
                    <label style={labelStyle}>Date approximative des faits</label>
                    <input type="date" name="date_faits" value={form.date_faits} onChange={handleChange}
                      style={inputStyle()}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                    />
                  </div>
                  <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                    <label style={labelStyle}>Lieu précis (optionnel)</label>
                    <input name="lieu" value={form.lieu} onChange={handleChange}
                      placeholder="Village, quartier, nom du bâtiment..."
                      style={inputStyle()}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                    />
                  </div>
                  <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                    <label style={labelStyle}>Personnes ou entités impliquées (optionnel)</label>
                    <input name="personnes_impliquees" value={form.personnes_impliquees} onChange={handleChange}
                      placeholder="Noms ou fonctions des personnes impliquées (si connu)"
                      style={inputStyle()}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pièces jointes */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                📎 Preuves et documents (optionnel)
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 16px 0' }}>
                Joignez toute preuve utile : photos, documents, enregistrements. Max 5 fichiers, 10 MB chacun.
              </p>
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files) }}
                onClick={() => document.getElementById('file-input-den')?.click()}
                style={{
                  border: `2px dashed ${dragOver ? '#0A3D2E' : '#E8E4DC'}`,
                  borderRadius: '12px', padding: '28px', textAlign: 'center', cursor: 'pointer',
                  backgroundColor: dragOver ? 'rgba(10,61,46,0.03)' : '#FAFAF8',
                  marginBottom: files.length > 0 ? '16px' : '0',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>📁</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#4A4A4A' }}>
                  Glissez vos fichiers ici ou cliquez pour parcourir
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginTop: '4px' }}>
                  PDF, DOC, JPG, PNG — Max 10 MB par fichier
                </div>
              </div>
              <input id="file-input-den" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mp3" style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
              {files.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {files.map((file, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F8F6F1', borderRadius: '8px', border: '1px solid #E8E4DC' }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#4A4A4A' }}>📄 {file.name} <span style={{ color: '#9A9A9A', fontSize: '11px' }}>({(file.size / 1024).toFixed(0)} KB)</span></span>
                      <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} style={{ backgroundColor: 'transparent', border: 'none', color: '#D32F2F', cursor: 'pointer', fontSize: '16px' }}>✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Identité */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>
                👤 Vos coordonnées
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>Souhaitez-vous rester anonyme ?</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  {[
                    { val: 'oui', label: 'Oui — signalement anonyme' },
                    { val: 'non', label: 'Non — je fournis mes coordonnées' },
                  ].map(opt => (
                    <label key={opt.val} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
                      <input type="radio" name="anonyme" value={opt.val} checked={form.anonyme === opt.val} onChange={handleChange} />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {form.anonyme === 'oui' && (
                <div style={{ padding: '16px 20px', backgroundColor: '#FFF8E1', borderRadius: '10px', border: '1px solid #FFE082', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#E65100', fontWeight: '600' }}>
                    ℹ️ En choisissant l'anonymat, vous ne pourrez pas être informé(e) du suivi de votre signalement.
                  </span>
                </div>
              )}

              {form.anonyme === 'non' && (
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                  {[
                    { name: 'nom', label: 'Nom', placeholder: 'Votre nom' },
                    { name: 'prenom', label: 'Prénom', placeholder: 'Votre prénom' },
                    { name: 'email', label: 'Email *', placeholder: 'email@exemple.com', type: 'email' },
                    { name: 'telephone', label: 'Téléphone', placeholder: '+229 XX XX XX XX', type: 'tel' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={labelStyle}>{f.label}</label>
                      <input
                        type={f.type || 'text'} name={f.name}
                        value={form[f.name as keyof FormData]} onChange={handleChange}
                        placeholder={f.placeholder}
                        style={inputStyle(errors[f.name as keyof FormData])}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                        onBlur={e => { e.currentTarget.style.borderColor = errors[f.name as keyof FormData] ? '#D32F2F' : '#E8E4DC' }}
                      />
                      <ErrorMsg field={f.name as keyof FormData} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', padding: '16px',
                backgroundColor: loading ? '#9A9A9A' : '#0A3D2E', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700',
                borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#156840' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#0A3D2E' }}
            >
              {loading ? '⏳ Envoi en cours...' : '📢 Soumettre le signalement'}
            </button>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '12px' }}>
              Ce formulaire est sécurisé. Vos données ne seront jamais partagées avec les personnes visées.
            </div>
          </form>
        </div>
      </section>

    </main>
  )
}
