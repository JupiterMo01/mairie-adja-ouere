'use client'

import React from 'react'

type DemandeMock = {
  reference: string
  type: string
  statut: 'en_attente' | 'en_cours' | 'approuve' | 'refuse' | 'complement'
  date_soumission: string
  date_maj: string
  responsable: string
  message: string
  etapes: { label: string; date: string | null; fait: boolean }[]
}

const demandesMock: Record<string, DemandeMock> = {
  'STG-12345678': {
    reference: 'STG-12345678',
    type: 'Demande de stage',
    statut: 'en_cours',
    date_soumission: '2026-04-15',
    date_maj: '2026-04-22',
    responsable: 'Service des Ressources Humaines',
    message: 'Votre dossier est en cours d\'examen par le service des ressources humaines. Vous serez contacté(e) d\'ici le 30 avril 2026.',
    etapes: [
      { label: 'Dossier reçu', date: '2026-04-15', fait: true },
      { label: 'Vérification des pièces', date: '2026-04-17', fait: true },
      { label: 'Examen par le service', date: '2026-04-22', fait: true },
      { label: 'Décision du responsable', date: null, fait: false },
      { label: 'Notification au demandeur', date: null, fait: false },
    ],
  },
  'MAN-87654321': {
    reference: 'MAN-87654321',
    type: 'Autorisation de manifestation',
    statut: 'approuve',
    date_soumission: '2026-04-05',
    date_maj: '2026-04-18',
    responsable: 'Secrétariat Général',
    message: 'Votre demande d\'autorisation a été approuvée. Vous pouvez récupérer votre arrêté d\'autorisation au secrétariat général de la mairie.',
    etapes: [
      { label: 'Dossier reçu', date: '2026-04-05', fait: true },
      { label: 'Vérification des pièces', date: '2026-04-07', fait: true },
      { label: 'Examen par le service', date: '2026-04-12', fait: true },
      { label: 'Décision du responsable', date: '2026-04-18', fait: true },
      { label: 'Notification au demandeur', date: '2026-04-18', fait: true },
    ],
  },
  'DEN-11223344': {
    reference: 'DEN-11223344',
    type: 'Signalement citoyen',
    statut: 'complement',
    date_soumission: '2026-04-10',
    date_maj: '2026-04-20',
    responsable: 'Cabinet du Maire',
    message: 'Votre signalement est en cours d\'examen. Des informations complémentaires vous ont été demandées par email le 20 avril 2026. Merci de bien vouloir y répondre.',
    etapes: [
      { label: 'Signalement reçu', date: '2026-04-10', fait: true },
      { label: 'Enregistrement et attribution', date: '2026-04-12', fait: true },
      { label: 'Instruction du dossier', date: '2026-04-20', fait: true },
      { label: 'Complément d\'information demandé', date: '2026-04-20', fait: true },
      { label: 'Clôture de l\'instruction', date: null, fait: false },
    ],
  },
  'STG-00000001': {
    reference: 'STG-00000001',
    type: 'Demande de stage',
    statut: 'refuse',
    date_soumission: '2026-03-01',
    date_maj: '2026-03-18',
    responsable: 'Service des Ressources Humaines',
    message: 'Nous sommes au regret de vous informer que votre demande de stage n\'a pas pu être retenue pour la période demandée en raison du nombre limité de places disponibles. N\'hésitez pas à soumettre une nouvelle demande pour la prochaine période.',
    etapes: [
      { label: 'Dossier reçu', date: '2026-03-01', fait: true },
      { label: 'Vérification des pièces', date: '2026-03-03', fait: true },
      { label: 'Examen par le service', date: '2026-03-15', fait: true },
      { label: 'Décision du responsable', date: '2026-03-18', fait: true },
      { label: 'Notification au demandeur', date: '2026-03-18', fait: true },
    ],
  },
}

const statutConfig: Record<string, { label: string; color: string; bg: string; icon: string; desc: string }> = {
  en_attente: { label: 'En attente', color: '#E65100', bg: '#FFF3E0', icon: '⏳', desc: 'Votre dossier est en attente de traitement.' },
  en_cours: { label: 'En cours de traitement', color: '#1565C0', bg: '#E3F2FD', icon: '🔄', desc: 'Votre dossier est en cours d\'instruction.' },
  complement: { label: 'Complément requis', color: '#6A1B9A', bg: '#F3E5F5', icon: '📋', desc: 'Des informations supplémentaires vous ont été demandées.' },
  approuve: { label: 'Approuvé', color: '#2E7D32', bg: '#E8F5E9', icon: '✅', desc: 'Votre demande a été approuvée.' },
  refuse: { label: 'Non retenu', color: '#D32F2F', bg: '#FFEBEE', icon: '❌', desc: 'Votre demande n\'a pas pu être retenue.' },
}

export default function SuivreMaDemande() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [reference, setReference] = React.useState('')
  const [recherche, setRecherche] = React.useState('')
  const [demande, setDemande] = React.useState<DemandeMock | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [notFound, setNotFound] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const ref = reference.trim().toUpperCase()
    if (!ref) { setError('Veuillez saisir votre numéro de référence'); return }
    setError('')
    setLoading(true)
    setDemande(null)
    setNotFound(false)
    await new Promise(r => setTimeout(r, 1000))
    const found = demandesMock[ref]
    if (found) {
      setDemande(found)
      setNotFound(false)
    } else {
      setNotFound(true)
    }
    setLoading(false)
  }

  const statutInfo = demande ? statutConfig[demande.statut] : null

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
            🔍 Suivre ma demande
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '560px' }}>
            Consultez le statut de votre dossier en entrant le numéro de référence reçu lors de votre soumission.
          </p>
        </div>
      </section>

      {/* Recherche */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* Formulaire de recherche */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E8E4DC', padding: isMobile ? '28px 24px' : '40px', boxShadow: '0 4px 24px rgba(10,61,46,0.07)', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
              Entrez votre référence
            </h2>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#9A9A9A', margin: '0 0 24px 0' }}>
              Le numéro de référence vous a été communiqué à la soumission de votre demande. Format : STG-XXXXXXXX, MAN-XXXXXXXX ou DEN-XXXXXXXX.
            </p>
            <form onSubmit={handleSearch}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Numéro de référence *
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={e => { setReference(e.target.value); setError(''); setNotFound(false) }}
                  placeholder="ex: STG-12345678"
                  style={{
                    width: '100%', padding: '14px 18px',
                    fontFamily: 'Outfit, sans-serif', fontSize: '16px', letterSpacing: '1px',
                    border: `2px solid ${error ? '#D32F2F' : '#E8E4DC'}`, borderRadius: '10px',
                    outline: 'none', backgroundColor: '#FAFAF8', color: '#1C1C1C',
                    boxSizing: 'border-box', textTransform: 'uppercase',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0A3D2E' }}
                  onBlur={e => { e.currentTarget.style.borderColor = error ? '#D32F2F' : '#E8E4DC' }}
                />
                {error && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#D32F2F', marginTop: '6px' }}>{error}</div>}
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%', padding: '14px',
                  backgroundColor: loading ? '#9A9A9A' : '#0A3D2E', color: '#FFFFFF',
                  fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700',
                  borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#156840' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#0A3D2E' }}
              >
                {loading ? '⏳ Recherche en cours...' : '🔍 Rechercher mon dossier'}
              </button>
            </form>

            {/* Démo */}
            <div style={{ marginTop: '20px', padding: '14px 16px', backgroundColor: '#F0F7F4', borderRadius: '10px', border: '1px solid #C8E6C9' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                🧪 Références de démonstration disponibles :
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.keys(demandesMock).map(ref => (
                  <button
                    key={ref}
                    onClick={() => setReference(ref)}
                    style={{
                      backgroundColor: '#FFFFFF', border: '1px solid #C8E6C9',
                      borderRadius: '6px', padding: '4px 10px',
                      fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#2E7D32',
                      cursor: 'pointer', letterSpacing: '0.5px',
                    }}
                  >
                    {ref}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Résultat — non trouvé */}
          {notFound && (
            <div style={{ backgroundColor: '#FFEBEE', borderRadius: '16px', border: '1px solid #FFCDD2', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔎</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700', color: '#C62828', margin: '0 0 8px 0' }}>
                Dossier introuvable
              </h3>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#B71C1C', margin: 0 }}>
                Aucun dossier trouvé pour la référence <strong>{reference.toUpperCase()}</strong>. Vérifiez le numéro et réessayez.
              </p>
            </div>
          )}

          {/* Résultat — trouvé */}
          {demande && statutInfo && (
            <div>
              {/* Carte statut */}
              <div style={{
                backgroundColor: statutInfo.bg,
                borderRadius: '16px', border: `1px solid ${statutInfo.color}30`,
                padding: '24px 28px', marginBottom: '20px',
                display: 'flex', alignItems: 'flex-start', gap: '16px',
              }}>
                <div style={{ fontSize: '36px', flexShrink: 0 }}>{statutInfo.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: statutInfo.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                    {demande.type} · Réf. {demande.reference}
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: statutInfo.color, marginBottom: '8px' }}>
                    {statutInfo.label}
                  </div>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#4A4A4A', margin: '0 0 12px 0' }}>
                    {demande.message}
                  </p>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A' }}>
                    Soumis le {new Date(demande.date_soumission).toLocaleDateString('fr-FR')} · Mis à jour le {new Date(demande.date_maj).toLocaleDateString('fr-FR')} · {demande.responsable}
                  </div>
                </div>
              </div>

              {/* Timeline des étapes */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 24px 0' }}>
                  Avancement du dossier
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {demande.etapes.map((etape, i) => (
                    <div key={etape.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: i < demande.etapes.length - 1 ? '20px' : '0' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          backgroundColor: etape.fait ? '#0A3D2E' : '#E8E4DC',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}>
                          {etape.fait
                            ? <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                            : <span style={{ color: '#9A9A9A', fontSize: '12px' }}>○</span>
                          }
                        </div>
                        {i < demande.etapes.length - 1 && (
                          <div style={{
                            width: '2px', flex: 1, marginTop: '4px',
                            backgroundColor: etape.fait ? '#0A3D2E' : '#E8E4DC',
                            minHeight: '20px',
                          }} />
                        )}
                      </div>
                      <div style={{ paddingTop: '4px', flex: 1 }}>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: etape.fait ? '600' : '400', color: etape.fait ? '#1C1C1C' : '#9A9A9A', marginBottom: '2px' }}>
                          {etape.label}
                        </div>
                        {etape.date && (
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A' }}>
                            {new Date(etape.date).toLocaleDateString('fr-FR')}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '10px 20px', borderRadius: '8px',
                    backgroundColor: '#0A3D2E', color: '#FFFFFF',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                    border: 'none', cursor: 'pointer',
                  }}>
                    Contacter la mairie
                  </button>
                </a>
                <button
                  onClick={() => { setDemande(null); setReference(''); setNotFound(false) }}
                  style={{
                    padding: '10px 20px', borderRadius: '8px',
                    backgroundColor: 'transparent', color: '#0A3D2E',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                    border: '1px solid #0A3D2E', cursor: 'pointer',
                  }}
                >
                  Rechercher un autre dossier
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Types de demandes */}
      {!demande && !notFound && (
        <section style={{ padding: isMobile ? '20px 24px 60px' : '0 40px 80px' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 20px 0', textAlign: 'center' }}>
              Services pouvant être suivis
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { prefix: 'STG', icon: '🎓', label: 'Demande de stage', href: '/e-services/demande-stage' },
                { prefix: 'MAN', icon: '🎉', label: 'Autorisation manifestation', href: '/e-services/demande-manifestion' },
                { prefix: 'DEN', icon: '📢', label: 'Signalement citoyen', href: '/e-services/denonciation' },
              ].map(s => (
                <a key={s.prefix} href={s.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E8E4DC',
                    padding: '20px', textAlign: 'center', cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E4DC'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                      Référence : {s.prefix}-...
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: '#0A3D2E' }}>
                      {s.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
