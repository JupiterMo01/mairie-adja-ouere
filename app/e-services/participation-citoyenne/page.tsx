'use client'

import React from 'react'

const domaines = [
  'Infrastructure et routes',
  'Eau et assainissement',
  'Santé et hygiène publique',
  'Éducation et formation',
  'Agriculture et élevage',
  'Environnement et cadre de vie',
  'Économie locale et emploi',
  'Culture, sport et jeunesse',
  'Gouvernance et transparence',
  'Numérique et innovation',
  'Autre',
]

const arrondissements = ['Adja-Ouere', 'Ikpinle', 'Kpoulou', 'Massè', 'Oko-Akare', 'Tatonnonkon', 'Toute la commune']

type FormData = {
  domaine: string
  titre: string
  description: string
  arrondissement: string
  nom: string
  email: string
  telephone: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function ErrorMsg({ field, errors }: { field: keyof FormData; errors: FormErrors }) {
  return errors[field] ? <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors[field]}</div> : null
}

export default function ParticipationCitoyenne() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [files, setFiles] = React.useState<File[]>([])
  const [dragOver, setDragOver] = React.useState(false)

  const [form, setForm] = React.useState<FormData>({
    domaine: '', titre: '', description: '', arrondissement: '',
    nom: '', email: '', telephone: '',
  })

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return
    const newFiles = Array.from(fileList).filter(f => f.size <= 10 * 1024 * 1024)
    setFiles(prev => [...prev, ...newFiles].slice(0, 5))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.domaine) newErrors.domaine = 'Le domaine est requis'
    if (!form.titre.trim()) newErrors.titre = 'Le titre est requis'
    if (!form.description.trim() || form.description.trim().length < 50)
      newErrors.description = 'La description doit comporter au moins 50 caractères'
    if (!form.arrondissement) newErrors.arrondissement = "L'arrondissement est requis"
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
    borderRadius: '8px', outline: 'none', boxShadow: 'none',
    backgroundColor: '#FFFFFF', color: '#1C1C1C',
    boxSizing: 'border-box', transition: 'border-color 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: 'Outfit, sans-serif',
    fontSize: '12px', fontWeight: '600', color: '#4A4A4A',
    textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px',
  }

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px' }}>
            🌱
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            Merci pour votre contribution !
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 28px 0' }}>
            Votre idée a été transmise aux équipes de la Mairie. Chaque contribution compte pour faire avancer notre commune. Si vous avez fourni votre email, nous vous tiendrons informé(e) de la suite donnée à votre proposition.
          </p>
          <div style={{ padding: '20px 24px', backgroundColor: 'rgba(201,168,76,0.08)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.25)', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#8B6914', fontWeight: '600' }}>
              💡 Ensemble, construisons une Adja-Ouèrè meilleure pour tous.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSubmitted(false); setForm({ domaine: '', titre: '', description: '', arrondissement: '', nom: '', email: '', telephone: '' }); setFiles([]) }}
              style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
            >
              Soumettre une autre idée
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
            🌱 Participation citoyenne
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '640px' }}>
            Vous avez des idées pour améliorer votre commune ? Partagez vos propositions de développement, vos suggestions ou vos préoccupations. La mairie vous écoute.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['Ouverte à tous', 'Sans inscription requise', 'Idées examinées par la mairie'].map(tag => (
              <span key={tag} style={{ padding: '8px 16px', backgroundColor: 'rgba(201,168,76,0.12)', borderRadius: '20px', border: '1px solid rgba(201,168,76,0.3)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#C9A84C', fontWeight: '600' }}>
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '40px 24px' : '56px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '🏘️', titre: 'Infrastructure', desc: 'Routes, eau, électricité, bâtiments publics' },
              { icon: '🌿', titre: 'Environnement', desc: 'Cadre de vie, assainissement, espaces verts' },
              { icon: '📚', titre: 'Social', desc: 'Éducation, santé, emploi, jeunesse' },
              { icon: '💼', titre: 'Économie', desc: 'Agriculture, commerce, développement local' },
            ].map(item => (
              <div key={item.titre} style={{ textAlign: 'center', padding: '24px 16px', borderRadius: '16px', backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E', marginBottom: '6px' }}>{item.titre}</div>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#6A6A6A' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>

            {/* Votre idée */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                💡 Votre proposition
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Domaine concerné *</label>
                  <select name="domaine" value={form.domaine} onChange={handleChange} style={{ ...inputStyle(errors.domaine), cursor: 'pointer' }}>
                    <option value="">-- Sélectionner un domaine --</option>
                    {domaines.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <ErrorMsg field="domaine" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Titre de votre proposition *</label>
                  <input
                    name="titre" value={form.titre} onChange={handleChange}
                    placeholder="Résumez votre idée en une phrase claire"
                    style={inputStyle(errors.titre)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.titre ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="titre" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>
                    Description détaillée *
                    <span style={{ fontWeight: '400', color: '#9A9A9A', marginLeft: '8px' }}>
                      ({form.description.length} / min. 50 caractères)
                    </span>
                  </label>
                  <textarea
                    name="description" value={form.description} onChange={handleChange}
                    placeholder="Décrivez votre idée en détail : quel est le problème constaté, quelle solution proposez-vous, qui en bénéficierait, comment la mettre en œuvre ?"
                    rows={6}
                    style={{ ...inputStyle(errors.description), resize: 'vertical' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.description ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="description" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Arrondissement concerné *</label>
                  <select name="arrondissement" value={form.arrondissement} onChange={handleChange} style={{ ...inputStyle(errors.arrondissement), cursor: 'pointer' }}>
                    <option value="">-- Sélectionner --</option>
                    {arrondissements.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                  <ErrorMsg field="arrondissement" errors={errors} />
                </div>
              </div>
            </div>

            {/* Vos coordonnées */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                👤 Vos coordonnées <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '400', color: '#9A9A9A' }}>(optionnel)</span>
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 20px 0' }}>
                Si vous souhaitez être informé(e) des suites données à votre proposition, laissez vos coordonnées. Sinon, vous pouvez soumettre anonymement.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'nom', label: 'Nom complet', placeholder: 'Votre nom' },
                  { name: 'telephone', label: 'Téléphone', placeholder: '+229 XX XX XX XX', type: 'tel' },
                  { name: 'email', label: 'Email', placeholder: 'email@exemple.com', type: 'email', fullWidth: true },
                ].map(f => (
                  <div key={f.name} style={{ gridColumn: f.fullWidth && !isMobile ? '1 / -1' : '1' }}>
                    <label style={labelStyle}>{f.label}</label>
                    <input
                      type={f.type || 'text'} name={f.name}
                      value={form[f.name as keyof FormData]} onChange={handleChange}
                      placeholder={f.placeholder}
                      style={inputStyle()}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pièces jointes */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                📎 Documents ou photos <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '400', color: '#9A9A9A' }}>(optionnel)</span>
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 16px 0' }}>
                Joignez des photos, plans ou documents pour illustrer votre proposition. Max 5 fichiers, 10 MB chacun.
              </p>
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files) }}
                onClick={() => document.getElementById('file-input-part')?.click()}
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
                  PDF, JPG, PNG, DOC — Max 10 MB par fichier
                </div>
              </div>
              <input id="file-input-part" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
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
              {loading ? '⏳ Envoi en cours...' : '🌱 Soumettre ma proposition'}
            </button>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '12px' }}>
              Toutes les propositions sont examinées par les équipes de la Mairie.
            </div>
          </form>
        </div>
      </section>

    </main>
  )
}
