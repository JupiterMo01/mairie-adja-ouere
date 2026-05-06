'use client'

import React from 'react'

const services = [
  'Cabinet du Maire',
  'Secrétariat Général',
  'Service des Finances et Budget',
  'Service Technique et Infrastructures',
  'Service de la Planification et du Développement',
  'Service des Affaires Sociales',
  'Service de l\'État Civil',
  'Service de Communication',
  'Service des Ressources Humaines',
  'Service de l\'Environnement',
  'Service de l\'Agriculture',
  'Service des Marchés Publics',
]

const periodes = [
  '1 mois',
  '2 mois',
  '3 mois',
  '4 mois',
  '5 mois',
  '6 mois',
]

type FormData = {
  nom: string
  prenom: string
  email: string
  telephone: string
  date_naissance: string
  adresse: string
  etablissement: string
  niveau: string
  filiere: string
  service_souhaite: string
  date_debut: string
  duree: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function DemandeStage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [files, setFiles] = React.useState<File[]>([])
  const [dragOver, setDragOver] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})

  const [form, setForm] = React.useState<FormData>({
    nom: '', prenom: '', email: '', telephone: '',
    date_naissance: '', adresse: '', etablissement: '',
    niveau: '', filiere: '', service_souhaite: '',
    date_debut: '', duree: '', message: '',
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
    if (!form.nom.trim()) newErrors.nom = 'Le nom est requis'
    if (!form.prenom.trim()) newErrors.prenom = 'Le prénom est requis'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email invalide'
    if (!form.telephone.trim()) newErrors.telephone = 'Le téléphone est requis'
    if (!form.etablissement.trim()) newErrors.etablissement = 'L\'établissement est requis'
    if (!form.niveau.trim()) newErrors.niveau = 'Le niveau d\'études est requis'
    if (!form.filiere.trim()) newErrors.filiere = 'La filière est requise'
    if (!form.service_souhaite) newErrors.service_souhaite = 'Choisissez un service'
    if (!form.date_debut) newErrors.date_debut = 'La date de début est requise'
    if (!form.duree) newErrors.duree = 'La durée est requise'
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
  }

  const inputStyle = (error?: string): React.CSSProperties => ({
    width: '100%',
    padding: '11px 14px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '14px',
    border: `1px solid ${error ? '#D32F2F' : '#E8E4DC'}`,
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    color: '#1C1C1C',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '12px',
    fontWeight: '600',
    color: '#4A4A4A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  }

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px' }}>
            ✅
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            Demande envoyée !
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 28px 0' }}>
            Votre demande de stage a été transmise avec succès. Notre service des ressources humaines étudiera votre dossier et vous enverra une réponse par <strong>email</strong> dans un délai de <strong>5 à 7 jours ouvrables</strong>.
          </p>
          <div style={{ padding: '20px 24px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '12px', border: '1px solid rgba(10,61,46,0.15)', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#0A3D2E', fontWeight: '600' }}>
              📧 Pensez à vérifier vos spams si vous ne recevez pas de réponse dans ce délai.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSubmitted(false); setForm({ nom: '', prenom: '', email: '', telephone: '', date_naissance: '', adresse: '', etablissement: '', niveau: '', filiere: '', service_souhaite: '', date_debut: '', duree: '', message: '' }); setFiles([]) }}
              style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
            >
              Nouvelle demande
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
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              E-Services
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            🎓 Demande de stage
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '600px' }}>
            Remplissez ce formulaire pour déposer votre demande de stage au sein de la Mairie d'Adja-Ouèrè. Une réponse vous sera envoyée par email dans le délai indiqué.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <form onSubmit={handleSubmit}>

            {/* Informations personnelles */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                👤 Informations personnelles
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'nom', label: 'Nom *', placeholder: 'Votre nom de famille' },
                  { name: 'prenom', label: 'Prénom *', placeholder: 'Votre prénom' },
                  { name: 'email', label: 'Email *', placeholder: 'exemple@email.com', type: 'email' },
                  { name: 'telephone', label: 'Téléphone *', placeholder: '+229 XX XX XX XX', type: 'tel' },
                  { name: 'date_naissance', label: 'Date de naissance', placeholder: '', type: 'date' },
                  { name: 'adresse', label: 'Adresse de résidence', placeholder: 'Ville, quartier...' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      value={form[field.name as keyof FormData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={inputStyle(errors[field.name as keyof FormData])}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors[field.name as keyof FormData] ? '#D32F2F' : '#E8E4DC' }}
                    />
                    {errors[field.name as keyof FormData] && (
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>
                        {errors[field.name as keyof FormData]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Informations académiques */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                🎓 Informations académiques
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Établissement *</label>
                  <input
                    name="etablissement" value={form.etablissement} onChange={handleChange}
                    placeholder="Nom de votre école / université"
                    style={inputStyle(errors.etablissement)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.etablissement ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.etablissement && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.etablissement}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Niveau d'études *</label>
                  <input
                    name="niveau" value={form.niveau} onChange={handleChange}
                    placeholder="ex: Licence 3, Master 1..."
                    style={inputStyle(errors.niveau)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.niveau ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.niveau && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.niveau}</div>}
                </div>
                <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <label style={labelStyle}>Filière / Spécialité *</label>
                  <input
                    name="filiere" value={form.filiere} onChange={handleChange}
                    placeholder="ex: Gestion, Droit, Informatique, Génie Civil..."
                    style={inputStyle(errors.filiere)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.filiere ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.filiere && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.filiere}</div>}
                </div>
              </div>
            </div>

            {/* Informations du stage */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                🏛️ Informations du stage
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '16px' }}>
                <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <label style={labelStyle}>Service souhaité *</label>
                  <select
                    name="service_souhaite" value={form.service_souhaite} onChange={handleChange}
                    style={{ ...inputStyle(errors.service_souhaite), cursor: 'pointer' }}
                  >
                    <option value="">-- Sélectionner un service --</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service_souhaite && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.service_souhaite}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Date de début souhaitée *</label>
                  <input
                    type="date" name="date_debut" value={form.date_debut} onChange={handleChange}
                    style={inputStyle(errors.date_debut)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.date_debut ? '#D32F2F' : '#E8E4DC' }}
                  />
                  {errors.date_debut && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.date_debut}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Durée souhaitée *</label>
                  <select
                    name="duree" value={form.duree} onChange={handleChange}
                    style={{ ...inputStyle(errors.duree), cursor: 'pointer' }}
                  >
                    <option value="">-- Sélectionner --</option>
                    {periodes.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.duree && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors.duree}</div>}
                </div>
                <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <label style={labelStyle}>Motivation (optionnel)</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Expliquez pourquoi vous souhaitez effectuer votre stage à la Mairie d'Adja-Ouèrè..."
                    rows={4}
                    style={{ ...inputStyle(), resize: 'vertical' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
              </div>
            </div>

            {/* Pièces jointes */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                📎 Pièces jointes
              </h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 16px 0' }}>
                Joignez : lettre de motivation, CV, carte d'étudiant, lettre de recommandation. Maximum 5 fichiers, 10 MB chacun.
              </p>

              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files) }}
                onClick={() => document.getElementById('file-input-stage')?.click()}
                style={{
                  border: `2px dashed ${dragOver ? '#0A3D2E' : '#E8E4DC'}`,
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: dragOver ? 'rgba(10,61,46,0.03)' : '#FAFAF8',
                  transition: 'all 0.2s ease',
                  marginBottom: files.length > 0 ? '16px' : '0',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📁</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#4A4A4A', marginBottom: '4px' }}>
                  Glissez vos fichiers ici ou cliquez pour parcourir
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>
                  PDF, DOC, DOCX, JPG, PNG — Max 10 MB par fichier
                </div>
              </div>
              <input
                id="file-input-stage" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                style={{ display: 'none' }}
                onChange={e => handleFiles(e.target.files)}
              />

              {files.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {files.map((file, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F8F6F1', borderRadius: '8px', border: '1px solid #E8E4DC' }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#4A4A4A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        📄 {file.name}
                        <span style={{ color: '#9A9A9A', fontSize: '11px' }}>({(file.size / 1024).toFixed(0)} KB)</span>
                      </span>
                      <button
                        type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))}
                        style={{ backgroundColor: 'transparent', border: 'none', color: '#D32F2F', cursor: 'pointer', fontSize: '16px', padding: '0 4px' }}
                      >✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', padding: '16px',
                backgroundColor: loading ? '#9A9A9A' : '#0A3D2E',
                color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700',
                borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#156840' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#0A3D2E' }}
            >
              {loading ? '⏳ Envoi en cours...' : '✉ Soumettre ma demande de stage'}
            </button>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '12px' }}>
              Une réponse vous sera envoyée par email dans le délai indiqué.
            </div>

          </form>
        </div>
      </section>

    </main>
  )
}
