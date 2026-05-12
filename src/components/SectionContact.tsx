'use client'

import React from 'react'
import { useIsMobile } from '@/src/hooks/useIsMobile'

export default function SectionContact() {
  const [form, setForm] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [fichiers, setFichiers] = React.useState<File[]>([])
  const [submitted, setSubmitted] = React.useState(false)
  const [btnHovered, setBtnHovered] = React.useState(false)
  const [dragOver, setDragOver] = React.useState(false)
  const isMobile = useIsMobile(1024)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFichiers = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const nouveaux = Array.from(e.target.files)
    const total = [...fichiers, ...nouveaux]
    if (total.length > 5) {
      alert('Maximum 5 fichiers autorises')
      return
    }
    setFichiers(total)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const dropped = Array.from(e.dataTransfer.files)
    const total = [...fichiers, ...dropped]
    if (total.length > 5) {
      alert('Maximum 5 fichiers autorises')
      return
    }
    setFichiers(total)
  }

  const retirerFichier = (index: number) => {
    setFichiers(fichiers.filter((_, i) => i !== index))
  }

  const formatTaille = (bytes: number) => {
    if (bytes < 1024) return `${bytes} o`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
  }

  const getIcone = (nom: string) => {
    const ext = nom.split('.').pop()?.toLowerCase()
    if (ext === 'pdf') return '📄'
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return '🖼️'
    if (['doc', 'docx'].includes(ext || '')) return '📝'
    if (['xls', 'xlsx'].includes(ext || '')) return '📊'
    return '📎'
  }

  const sujets = [
    'Demande d\'information',
    'Reclamation',
    'Signalement',
    'Partenariat',
    'Demande de document',
    'Probleme administratif',
    'Tourisme',
    'Autre',
  ]

  const isValid = form.nom && form.prenom && form.email && form.telephone && form.sujet && form.message

  const handleSubmit = () => {
    if (!isValid) return
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '14px',
    color: '#1C1C1C',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E4DC',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border 0.2s ease',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '12px',
    fontWeight: '600' as const,
    color: '#4A4A4A',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'start',
        }}>

          {/* Colonne gauche — Infos */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Nous contacter
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 24px 0', lineHeight: '1.2' }}>
              Ecrivez-nous
            </h2>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.8', color: '#4A4A4A', margin: '0 0 40px 0' }}>
              Notre equipe est disponible pour repondre a toutes vos questions et vous accompagner dans vos demarches administratives.
            </p>

            {/* Infos contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📍', label: 'Adresse', value: "Adja-Ouere, Departement du Plateau, Benin" },
                { icon: '📞', label: 'Telephone', value: '+229 01 XX XX XX XX' },
                { icon: '✉️', label: 'Email', value: 'contact@mairie-adja-ouere.bj' },
                { icon: '🕐', label: 'Horaires', value: 'Lun - Ven : 08h00 - 17h00' },
              ].map((info) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    backgroundColor: '#F8F6F1', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '20px', flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#1C1C1C', fontWeight: '500' }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Encart info pieces jointes */}
            <div style={{
              marginTop: '40px',
              backgroundColor: '#F8F6F1',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #E8E4DC',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', marginBottom: '8px' }}>
                📎 Pieces jointes acceptees
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#6A6A6A', lineHeight: '1.6' }}>
                PDF, Word, Excel, Images (JPG, PNG)<br />
                Maximum 5 fichiers — 10 Mo par fichier
              </div>
            </div>
          </div>

          {/* Colonne droite — Formulaire */}
          <div style={{ backgroundColor: '#F8F6F1', borderRadius: '20px', padding: isMobile ? '24px' : '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 12px 0' }}>
                  Message envoye !
                </h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#6A6A6A', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                  Nous avons bien recu votre message{fichiers.length > 0 ? ` et vos ${fichiers.length} fichier(s) joint(s)` : ''}. Notre equipe vous repondra dans les meilleurs delais.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '' })
                    setFichiers([])
                  }}
                  style={{
                    backgroundColor: '#0A3D2E', color: '#FFFFFF',
                    fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600',
                    padding: '12px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
                  Formulaire de contact
                </h3>

                {/* Nom + Prenom */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Prenom *</label>
                    <input type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prenom" style={inputStyle} />
                  </div>
                </div>

                {/* Email + Telephone */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telephone *</label>
                    <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+229 01 XX XX XX XX" style={inputStyle} />
                  </div>
                </div>

                {/* Sujet deroulant */}
                <div>
                  <label style={labelStyle}>Sujet *</label>
                  <select
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      appearance: 'none' as const,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%234A4A4A'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: '40px',
                    }}
                  >
                    <option value="">-- Choisissez un sujet --</option>
                    {sujets.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                  />
                </div>

                {/* Zone pieces jointes */}
                <div>
                  <label style={labelStyle}>
                    Pieces jointes <span style={{ fontWeight: '400', color: '#9A9A9A' }}>(optionnel — max 5 fichiers)</span>
                  </label>

                  {/* Zone drag & drop */}
                  <div
                    onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      border: `2px dashed ${dragOver ? '#0A3D2E' : '#D0CBC0'}`,
                      borderRadius: '10px',
                      padding: '20px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      backgroundColor: dragOver ? 'rgba(10,61,46,0.04)' : '#FFFFFF',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>📎</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#4A4A4A', fontWeight: '500' }}>
                      Glissez vos fichiers ici ou <span style={{ color: '#0A3D2E', fontWeight: '700', textDecoration: 'underline' }}>parcourir</span>
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A', marginTop: '4px' }}>
                      PDF, Word, Excel, Images — Max 10 Mo par fichier
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp"
                      onChange={handleFichiers}
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Liste fichiers */}
                  {fichiers.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {fichiers.map((f, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '10px 14px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '8px',
                            border: '1px solid #E8E4DC',
                            gap: '8px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                            <span style={{ fontSize: '18px', flexShrink: 0 }}>{getIcone(f.name)}</span>
                            <div style={{ minWidth: 0 }}>
                              <div style={{
                                fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
                                color: '#1C1C1C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}>
                                {f.name}
                              </div>
                              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A' }}>
                                {formatTaille(f.size)}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => retirerFichier(i)}
                            style={{
                              width: '24px', height: '24px', borderRadius: '50%',
                              backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
                              color: '#9A9A9A', cursor: 'pointer', fontSize: '14px',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0, transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.backgroundColor = '#F44336'
                              e.currentTarget.style.color = '#FFFFFF'
                              e.currentTarget.style.borderColor = '#F44336'
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.backgroundColor = '#F8F6F1'
                              e.currentTarget.style.color = '#9A9A9A'
                              e.currentTarget.style.borderColor = '#E8E4DC'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bouton envoyer */}
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  disabled={!isValid}
                  style={{
                    width: '100%', padding: '14px 24px',
                    backgroundColor: !isValid ? '#C8C8C8' : btnHovered ? '#C9A84C' : '#0A3D2E',
                    color: !isValid ? '#FFFFFF' : btnHovered ? '#0A3D2E' : '#FFFFFF',
                    fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700',
                    borderRadius: '8px', border: 'none',
                    cursor: !isValid ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease', letterSpacing: '0.5px',
                  }}
                >
                  {isValid ? `Envoyer le message${fichiers.length > 0 ? ` + ${fichiers.length} fichier(s)` : ''} →` : 'Remplissez tous les champs'}
                </button>

                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', margin: 0, textAlign: 'center' }}>
                  * Tous les champs sont obligatoires
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}