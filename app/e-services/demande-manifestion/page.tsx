'use client'

import React from 'react'

declare global {
  interface Window {
    FedaPay: {
      init: (options: Record<string, unknown>) => { open: () => void }
    }
  }
}

const TARIF_JOURNALIER = 5000

const typesEvenement = [
  'Fete familiale (mariage, bapteme, funerailles)',
  'Evenement culturel (festival, concert, spectacle)',
  'Evenement sportif (tournoi, match, competition)',
  'Reunion politique ou associative',
  'Marche / foire commerciale',
  'Evenement religieux',
  'Defile ou procession',
  'Autre manifestation publique',
]

const lieuxTypes = [
  'Espace public (place, rue, esplanade)',
  'Terrain communal',
  'Stade ou espace sportif',
  'Salle communautaire',
  'Lieu prive ouvert au public',
  'Autre',
]

const arrondissements = ['Adja-Ouere', 'Ikpinle', 'Kpoulou', 'Masse', 'Oko-Akare', 'Tatonnonkon']

type ModePaiement = 'en_ligne' | 'caisse'

type FormData = {
  nom: string
  prenom: string
  email: string
  telephone: string
  organisation: string
  adresse: string
  type_evenement: string
  titre_evenement: string
  description: string
  lieu_type: string
  lieu_adresse: string
  arrondissement: string
  date_debut: string
  heure_debut: string
  date_fin: string
  heure_fin: string
  nombre_participants: string
  presence_sonorisation: string
  presence_vente_boissons: string
  mesures_securite: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function ErrorMsg({ field, errors }: { field: keyof FormData; errors: FormErrors }) {
  return errors[field]
    ? <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '4px' }}>{errors[field]}</div>
    : null
}

function calculerJours(debut: string, fin: string): number {
  if (!debut || !fin) return 0
  const d = new Date(debut)
  const f = new Date(fin)
  if (f < d) return 0
  return Math.ceil((f.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)) + 1
}

export default function DemandeManifestion() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [paymentError, setPaymentError] = React.useState('')
  const [fedapayReady, setFedapayReady] = React.useState(false)
  const [files, setFiles] = React.useState<File[]>([])
  const [dragOver, setDragOver] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [montantPaye, setMontantPaye] = React.useState(0)
  const [modePaiement, setModePaiement] = React.useState<ModePaiement>('en_ligne')
  const [recu, setRecu] = React.useState<File | null>(null)
  const [recuDragOver, setRecuDragOver] = React.useState(false)
  const [recuError, setRecuError] = React.useState('')

  const [form, setForm] = React.useState<FormData>({
    nom: '', prenom: '', email: '', telephone: '', organisation: '', adresse: '',
    type_evenement: '', titre_evenement: '', description: '', lieu_type: '',
    lieu_adresse: '', arrondissement: '', date_debut: '', heure_debut: '',
    date_fin: '', heure_fin: '', nombre_participants: '',
    presence_sonorisation: 'non', presence_vente_boissons: 'non', mesures_securite: '',
  })

  const nbJours = calculerJours(form.date_debut, form.date_fin)
  const montant = nbJours * TARIF_JOURNALIER

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  React.useEffect(() => {
    if (document.getElementById('fedapay-script')) { setFedapayReady(true); return }
    const s = document.createElement('script')
    s.id = 'fedapay-script'
    s.src = 'https://cdn.fedapay.com/checkout.js'
    s.async = true
    s.onload = () => setFedapayReady(true)
    document.body.appendChild(s)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }))
    setPaymentError('')
  }

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return
    setFiles(prev => [...prev, ...Array.from(fileList).filter(f => f.size <= 10 * 1024 * 1024)].slice(0, 5))
  }

  const handleRecu = (fileList: FileList | null) => {
    if (!fileList || !fileList[0]) return
    setRecu(fileList[0])
    setRecuError('')
  }

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.nom.trim()) e.nom = 'Le nom est requis'
    if (!form.prenom.trim()) e.prenom = 'Le prenom est requis'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email invalide'
    if (!form.telephone.trim()) e.telephone = 'Le telephone est requis'
    if (!form.type_evenement) e.type_evenement = 'Le type evenement est requis'
    if (!form.titre_evenement.trim()) e.titre_evenement = 'Le titre est requis'
    if (!form.lieu_adresse.trim()) e.lieu_adresse = 'Le lieu est requis'
    if (!form.arrondissement) e.arrondissement = 'Arrondissement requis'
    if (!form.date_debut) e.date_debut = 'Date de debut requise'
    if (!form.date_fin) e.date_fin = 'Date de fin requise'
    if (form.date_debut && form.date_fin && new Date(form.date_fin) < new Date(form.date_debut))
      e.date_fin = 'La date de fin doit etre apres la date de debut'
    if (!form.nombre_participants.trim()) e.nombre_participants = 'Le nombre de participants est requis'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setPaymentError('')
    setRecuError('')

    // ── Mode caisse ────────────────────────────────────────────────────────
    if (modePaiement === 'caisse') {
      if (!recu) {
        setRecuError('Veuillez joindre votre recu de paiement de la caisse')
        return
      }
      setLoading(true)
      await new Promise(r => setTimeout(r, 800))
      setMontantPaye(montant)
      setSubmitted(true)
      setLoading(false)
      window.scrollTo(0, 0)
      return
    }

    // ── Mode en ligne (FedaPay) ────────────────────────────────────────────
    if (!fedapayReady) {
      setPaymentError('Le module de paiement est en cours de chargement. Patientez quelques secondes.')
      return
    }
    if (montant <= 0) {
      setPaymentError('Veuillez renseigner les dates de debut et de fin avant de payer.')
      return
    }

    // Titre ASCII uniquement pour FedaPay
    const titre = form.titre_evenement
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-zA-Z0-9\s\-_.]/g, '')
      .trim()
      .slice(0, 60)

    const description = `Autorisation manifestation - ${titre || 'Evenement'} (${nbJours} jour${nbJours > 1 ? 's' : ''} x ${TARIF_JOURNALIER} FCFA)`
    const telephone = form.telephone.replace(/[\s\-().+]/g, '')

    window.FedaPay.init({
      public_key: process.env.NEXT_PUBLIC_FEDAPAY_PUBLIC_KEY,
      environment: 'sandbox',
      transaction: {
        amount: montant,
        description,
      },
      customer: {
        email: form.email,
        firstname: form.prenom,
        lastname: form.nom,
        phone_number: { number: telephone, country: 'BJ' },
      },
      onComplete(obj: { reason: string; transaction?: { status: string } }) {
        if (obj.reason === 'DIALOG DISMISSED') return
        if (obj.transaction?.status === 'approved') {
          setMontantPaye(montant)
          setSubmitted(true)
          window.scrollTo(0, 0)
        } else {
          setPaymentError('Le paiement a echoue ou a ete annule. Veuillez reessayer.')
        }
      },
    }).open()
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

  const cardStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    backgroundColor: '#FFFFFF', borderRadius: '16px',
    border: '1px solid #E8E4DC', padding: isMobile ? '24px' : '36px',
    marginBottom: '24px', ...extra,
  })

  // ─── Confirmation ────────────────────────────────────────────────────────
  if (submitted) {
    const payeEnLigne = modePaiement === 'en_ligne'
    return (
      <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px' }}>
            {payeEnLigne ? '✅' : '🧾'}
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            {payeEnLigne ? 'Paiement confirme !' : 'Demande soumise !'}
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 24px 0' }}>
            {payeEnLigne
              ? <>Votre paiement de <strong>{montantPaye.toLocaleString('fr-FR')} FCFA</strong> a bien ete recu. Votre demande est transmise au service administratif.</>
              : <>Votre demande a ete soumise avec le recu de caisse joint. Le service administratif verifiera votre paiement.</>
            }
            {' '}Une reponse vous sera envoyee par <strong>email</strong> dans un delai de <strong>7 a 10 jours ouvrables</strong>.
          </p>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '20px 24px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Frais {payeEnLigne ? 'regle en ligne' : 'regle en caisse'}
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E' }}>
                {montantPaye.toLocaleString('fr-FR')} FCFA
              </div>
            </div>
            <div style={{ padding: '8px 16px', backgroundColor: '#E8F5E9', borderRadius: '20px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: '#1B5E20' }}>
                {payeEnLigne ? '✓ Approuve via FedaPay' : '✓ Recu joint'}
              </span>
            </div>
          </div>

          <div style={{ padding: '16px 20px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '12px', border: '1px solid rgba(10,61,46,0.15)', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#0A3D2E', fontWeight: '600' }}>
              📧 Verifiez vos spams si vous ne recevez pas de reponse dans ce delai.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => { setSubmitted(false); setMontantPaye(0); setRecu(null) }}
              style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#0A3D2E', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
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

  // ─── Formulaire ──────────────────────────────────────────────────────────
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
            🎉 Autorisation de manifestation
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '600px' }}>
            Demandez l'autorisation officielle pour organiser un evenement public sur le territoire de la Commune d'Adja-Ouere. Une reponse vous sera envoyee par email dans le delai indique.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ padding: '12px 20px', backgroundColor: 'rgba(201,168,76,0.12)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C', fontWeight: '600' }}>⏱ Delai : 7 a 10 jours ouvrables</span>
            </div>
            <div style={{ padding: '12px 20px', backgroundColor: 'rgba(201,168,76,0.12)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C', fontWeight: '600' }}>💳 Frais : 5 000 FCFA / jour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>

            {/* Identite */}
            <div style={cardStyle()}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                👤 Identite du demandeur
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'nom', label: 'Nom *', placeholder: 'Nom de famille' },
                  { name: 'prenom', label: 'Prenom *', placeholder: 'Prenom' },
                  { name: 'email', label: 'Email *', placeholder: 'email@exemple.com', type: 'email' },
                  { name: 'telephone', label: 'Telephone *', placeholder: '+229 XX XX XX XX', type: 'tel' },
                  { name: 'organisation', label: 'Organisation / Association', placeholder: 'Nom de votre structure' },
                  { name: 'adresse', label: 'Adresse de residence', placeholder: 'Ville, quartier' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={labelStyle}>{f.label}</label>
                    <input type={f.type || 'text'} name={f.name}
                      value={form[f.name as keyof FormData]} onChange={handleChange}
                      placeholder={f.placeholder}
                      style={inputStyle(errors[f.name as keyof FormData])}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors[f.name as keyof FormData] ? '#D32F2F' : '#E8E4DC' }}
                    />
                    <ErrorMsg field={f.name as keyof FormData} errors={errors} />
                  </div>
                ))}
              </div>
            </div>

            {/* Description evenement */}
            <div style={cardStyle()}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                🎪 Description de l'evenement
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Type d'evenement *</label>
                  <select name="type_evenement" value={form.type_evenement} onChange={handleChange} style={{ ...inputStyle(errors.type_evenement), cursor: 'pointer' }}>
                    <option value="">-- Selectionner --</option>
                    {typesEvenement.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ErrorMsg field="type_evenement" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Titre / Nom de l'evenement *</label>
                  <input name="titre_evenement" value={form.titre_evenement} onChange={handleChange}
                    placeholder="ex: Mariage de M. Adjovi"
                    style={inputStyle(errors.titre_evenement)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.titre_evenement ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="titre_evenement" errors={errors} />
                </div>
                <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <label style={labelStyle}>Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange}
                    placeholder="Decrivez brievement l'evenement, son objet, le programme..."
                    rows={3} style={{ ...inputStyle(), resize: 'vertical' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
              </div>
            </div>

            {/* Lieu et dates */}
            <div style={cardStyle()}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0' }}>
                📍 Lieu et dates
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Type de lieu</label>
                  <select name="lieu_type" value={form.lieu_type} onChange={handleChange} style={{ ...inputStyle(), cursor: 'pointer' }}>
                    <option value="">-- Selectionner --</option>
                    {lieuxTypes.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Arrondissement *</label>
                  <select name="arrondissement" value={form.arrondissement} onChange={handleChange} style={{ ...inputStyle(errors.arrondissement), cursor: 'pointer' }}>
                    <option value="">-- Selectionner --</option>
                    {arrondissements.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                  <ErrorMsg field="arrondissement" errors={errors} />
                </div>
                <div style={{ gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <label style={labelStyle}>Adresse precise du lieu *</label>
                  <input name="lieu_adresse" value={form.lieu_adresse} onChange={handleChange}
                    placeholder="Nom du lieu, village, quartier..."
                    style={inputStyle(errors.lieu_adresse)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.lieu_adresse ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="lieu_adresse" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Date de debut *</label>
                  <input type="date" name="date_debut" value={form.date_debut} onChange={handleChange}
                    style={inputStyle(errors.date_debut)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.date_debut ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="date_debut" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Heure de debut</label>
                  <input type="time" name="heure_debut" value={form.heure_debut} onChange={handleChange}
                    style={inputStyle()}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Date de fin *</label>
                  <input type="date" name="date_fin" value={form.date_fin} onChange={handleChange}
                    style={inputStyle(errors.date_fin)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.date_fin ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="date_fin" errors={errors} />
                </div>
                <div>
                  <label style={labelStyle}>Heure de fin</label>
                  <input type="time" name="heure_fin" value={form.heure_fin} onChange={handleChange}
                    style={inputStyle()}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Nombre de participants *</label>
                  <input type="number" name="nombre_participants" value={form.nombre_participants} onChange={handleChange}
                    placeholder="ex: 200"
                    style={inputStyle(errors.nombre_participants)}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.nombre_participants ? '#D32F2F' : '#E8E4DC' }}
                  />
                  <ErrorMsg field="nombre_participants" errors={errors} />
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                {[
                  { name: 'presence_sonorisation', label: 'Presence de sonorisation / scene ?' },
                  { name: 'presence_vente_boissons', label: 'Presence de boissons alcoolisees ?' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={labelStyle}>{f.label}</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {['oui', 'non'].map(val => (
                        <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
                          <input type="radio" name={f.name} value={val}
                            checked={form[f.name as keyof FormData] === val}
                            onChange={handleChange}
                          />
                          {val.charAt(0).toUpperCase() + val.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={labelStyle}>Mesures de securite prevues</label>
                <textarea name="mesures_securite" value={form.mesures_securite} onChange={handleChange}
                  placeholder="Decrivez les dispositifs de securite prevus..."
                  rows={3} style={{ ...inputStyle(), resize: 'vertical' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E8E4DC' }}
                />
              </div>
            </div>

            {/* Pieces jointes */}
            <div style={cardStyle()}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>📎 Pieces jointes</h2>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A', margin: '0 0 16px 0' }}>
                Plan du lieu, attestation d'assurance, programme. Max 5 fichiers, 10 MB chacun.
              </p>
              <div onDragOver={e => { e.preventDefault(); setDragOver(true) }} onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files) }}
                onClick={() => document.getElementById('file-input-man')?.click()}
                style={{ border: `2px dashed ${dragOver ? '#0A3D2E' : '#E8E4DC'}`, borderRadius: '12px', padding: '28px', textAlign: 'center', cursor: 'pointer', backgroundColor: dragOver ? 'rgba(10,61,46,0.03)' : '#FAFAF8', marginBottom: files.length > 0 ? '16px' : '0' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>📁</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#4A4A4A' }}>Glissez vos fichiers ici ou cliquez pour parcourir</div>
              </div>
              <input id="file-input-man" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
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

            {/* ── Mode de reglement ──────────────────────────────────────────── */}
            <div style={cardStyle({ border: nbJours > 0 ? '1px solid rgba(201,168,76,0.4)' : '1px solid #E8E4DC' })}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 6px 0' }}>
                💳 Mode de reglement
              </h2>

              {/* Recap montant */}
              {nbJours > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', backgroundColor: 'rgba(201,168,76,0.08)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.25)', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E' }}>
                      {montant.toLocaleString('fr-FR')} FCFA
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>
                      {nbJours} jour{nbJours > 1 ? 's' : ''} x 5 000 FCFA
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'right' }}>
                    <div>Soumettez au moins 15 jours avant</div>
                  </div>
                </div>
              )}

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: modePaiement === 'caisse' ? '20px' : '0' }}>
                {([
                  {
                    value: 'en_ligne' as ModePaiement,
                    icon: '💳',
                    label: 'Payer en ligne maintenant',
                    desc: 'Mobile Money (MTN, Moov) ou carte bancaire — Paiement securise via FedaPay',
                  },
                  {
                    value: 'caisse' as ModePaiement,
                    icon: '🧾',
                    label: "J'ai deja paye a la caisse de la mairie",
                    desc: 'Joignez votre recu de caisse pour valider votre demande',
                  },
                ] as const).map(opt => (
                  <label key={opt.value}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 18px', borderRadius: '12px', cursor: 'pointer', border: `2px solid ${modePaiement === opt.value ? '#0A3D2E' : '#E8E4DC'}`, backgroundColor: modePaiement === opt.value ? 'rgba(10,61,46,0.03)' : '#FAFAF8', transition: 'all 0.2s ease' }}>
                    <input type="radio" name="mode_paiement" value={opt.value}
                      checked={modePaiement === opt.value}
                      onChange={() => { setModePaiement(opt.value); setPaymentError(''); setRecuError('') }}
                      style={{ marginTop: '3px', accentColor: '#0A3D2E' }}
                    />
                    <div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E', marginBottom: '3px' }}>
                        {opt.icon} {opt.label}
                      </div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>
                        {opt.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Upload recu si caisse */}
              {modePaiement === 'caisse' && (
                <div>
                  <label style={{ ...labelStyle, color: recuError ? '#D32F2F' : '#4A4A4A' }}>Recu de paiement *</label>
                  {recu ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#F0FFF4', borderRadius: '10px', border: '1px solid #A5D6A7' }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#1B5E20', fontWeight: '600' }}>
                        ✅ {recu.name} <span style={{ color: '#6A9A6A', fontWeight: '400' }}>({(recu.size / 1024).toFixed(0)} KB)</span>
                      </span>
                      <button type="button" onClick={() => setRecu(null)} style={{ backgroundColor: 'transparent', border: 'none', color: '#D32F2F', cursor: 'pointer', fontSize: '16px' }}>✕</button>
                    </div>
                  ) : (
                    <div onDragOver={e => { e.preventDefault(); setRecuDragOver(true) }}
                      onDragLeave={() => setRecuDragOver(false)}
                      onDrop={e => { e.preventDefault(); setRecuDragOver(false); handleRecu(e.dataTransfer.files) }}
                      onClick={() => document.getElementById('file-recu')?.click()}
                      style={{ border: `2px dashed ${recuError ? '#D32F2F' : recuDragOver ? '#0A3D2E' : '#E8E4DC'}`, borderRadius: '10px', padding: '22px', textAlign: 'center', cursor: 'pointer', backgroundColor: recuDragOver ? 'rgba(10,61,46,0.03)' : '#FAFAF8' }}>
                      <div style={{ fontSize: '24px', marginBottom: '4px' }}>🧾</div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#4A4A4A' }}>Glissez le recu ici ou cliquez</div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginTop: '4px' }}>PDF, JPG, PNG — Max 10 MB</div>
                    </div>
                  )}
                  <input id="file-recu" type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => handleRecu(e.target.files)} />
                  {recuError && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D32F2F', marginTop: '6px' }}>{recuError}</div>}
                </div>
              )}
            </div>

            {/* Erreur paiement */}
            {paymentError && (
              <div style={{ padding: '14px 18px', backgroundColor: '#FFF5F5', border: '1px solid #FFCDD2', borderRadius: '10px', marginBottom: '16px', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C62828', fontWeight: '600' }}>
                ⚠️ {paymentError}
              </div>
            )}

            {/* Bouton */}
            <button
              type="submit"
              disabled={loading || (modePaiement === 'en_ligne' && !fedapayReady)}
              style={{
                width: '100%', padding: '18px',
                backgroundColor: loading || (modePaiement === 'en_ligne' && !fedapayReady) ? '#9A9A9A' : '#0A3D2E',
                color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700',
                borderRadius: '10px', border: 'none',
                cursor: loading || (modePaiement === 'en_ligne' && !fedapayReady) ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#156840' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = loading || (modePaiement === 'en_ligne' && !fedapayReady) ? '#9A9A9A' : '#0A3D2E' }}
            >
              {loading
                ? '⏳ Traitement en cours...'
                : modePaiement === 'en_ligne'
                  ? fedapayReady
                    ? nbJours > 0
                      ? `💳 Payer ${montant.toLocaleString('fr-FR')} FCFA et soumettre`
                      : '✉ Soumettre (renseignez les dates pour voir le montant)'
                    : '⏳ Chargement du module de paiement...'
                  : '🧾 Soumettre avec mon recu de caisse'
              }
            </button>

            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', textAlign: 'center', marginTop: '12px' }}>
              {modePaiement === 'en_ligne'
                ? nbJours > 0 ? `${nbJours} jour${nbJours > 1 ? 's' : ''} x 5 000 FCFA — Paiement securise via FedaPay` : 'Frais : 5 000 FCFA par jour de manifestation'
                : 'Le recu de caisse sera verifie par le service administratif avant traitement de votre demande.'}
            </div>

          </form>
        </div>
      </section>

    </main>
  )
}
