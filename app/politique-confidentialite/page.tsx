'use client'

import React from 'react'
import Link from 'next/link'

const sections = [
  {
    id: 'intro',
    titre: '1. Introduction',
    contenu: [
      {
        type: 'texte',
        valeur: 'La Mairie de la Commune d\'Adja-Ouèrè (ci-après « la Mairie ») s\'engage à protéger la vie privée des utilisateurs de son site internet. La présente politique de confidentialité décrit comment nous collectons, utilisons, conservons et protégeons vos données personnelles.',
      },
      {
        type: 'texte',
        valeur: 'En utilisant ce site et en soumettant des formulaires, vous acceptez les pratiques décrites dans la présente politique.',
      },
    ],
  },
  {
    id: 'collecte',
    titre: '2. Données collectées',
    contenu: [
      {
        type: 'texte',
        valeur: 'Nous collectons uniquement les données que vous nous transmettez volontairement via les formulaires disponibles sur ce site :',
      },
      {
        type: 'blocs',
        items: [
          {
            icon: '🎓',
            titre: 'Demande de stage',
            valeur: 'Nom, prénom, adresse email, numéro de téléphone, établissement scolaire, spécialité, dates souhaitées, lettre de motivation et pièces jointes.',
          },
          {
            icon: '🎉',
            titre: 'Autorisation de manifestation',
            valeur: 'Identité du demandeur (nom, prénom, email, téléphone), informations sur l\'événement (type, titre, dates, lieu, participants), informations de paiement via FedaPay.',
          },
          {
            icon: '📢',
            titre: 'Dénonciation',
            valeur: 'Catégorie du signalement, description des faits, preuves optionnelles. Les informations d\'identité sont facultatives.',
          },
          {
            icon: '🌱',
            titre: 'Participation citoyenne',
            valeur: 'Domaine d\'idée, titre et description de la proposition, arrondissement concerné. Les coordonnées (nom, téléphone, email) sont entièrement facultatives.',
          },
          {
            icon: '📧',
            titre: 'Newsletter',
            valeur: 'Adresse email uniquement, pour l\'envoi de bulletins d\'information communaux.',
          },
        ],
      },
    ],
  },
  {
    id: 'finalites',
    titre: '3. Finalités du traitement',
    contenu: [
      {
        type: 'texte',
        valeur: 'Les données personnelles collectées sont utilisées exclusivement pour les finalités suivantes :',
      },
      {
        type: 'puces',
        items: [
          'Traitement et suivi de vos demandes administratives (stage, autorisation de manifestation)',
          'Gestion des paiements en ligne via notre prestataire de paiement sécurisé FedaPay',
          'Transmission de vos signalements ou idées aux services compétents de la mairie',
          'Envoi de bulletins d\'information et actualités communales (newsletter)',
          'Amélioration de nos services numériques et de l\'expérience utilisateur',
          'Respect de nos obligations légales en tant que collectivité territoriale',
        ],
      },
    ],
  },
  {
    id: 'conservation',
    titre: '4. Durée de conservation',
    contenu: [
      {
        type: 'texte',
        valeur: 'Vos données sont conservées pour la durée strictement nécessaire à la finalité pour laquelle elles ont été collectées :',
      },
      {
        type: 'tableau',
        lignes: [
          { type: 'Demandes administratives', duree: '5 ans après clôture du dossier' },
          { type: 'Données de paiement', duree: 'Gérées par FedaPay selon leurs propres conditions' },
          { type: 'Signalements / dénonciations', duree: '3 ans après traitement' },
          { type: 'Participation citoyenne', duree: '2 ans ou jusqu\'à traitement de la proposition' },
          { type: 'Adresses email (newsletter)', duree: 'Jusqu\'à désinscription' },
        ],
      },
      {
        type: 'texte',
        valeur: 'À l\'expiration de ces délais, vos données sont supprimées de manière sécurisée ou anonymisées.',
      },
    ],
  },
  {
    id: 'partage',
    titre: '5. Partage des données',
    contenu: [
      {
        type: 'texte',
        valeur: 'La Mairie d\'Adja-Ouèrè ne vend, ne loue et ne cède aucune donnée personnelle à des tiers à des fins commerciales.',
      },
      {
        type: 'texte',
        valeur: 'Vos données peuvent être partagées uniquement avec :',
      },
      {
        type: 'puces',
        items: [
          'Les services internes de la mairie habilités à traiter votre demande',
          'FedaPay, notre prestataire de paiement en ligne, dans le cadre des transactions (voir leur politique de confidentialité sur fedapay.com)',
          'Les autorités compétentes, sur réquisition judiciaire ou légale',
        ],
      },
    ],
  },
  {
    id: 'securite',
    titre: '6. Sécurité des données',
    contenu: [
      {
        type: 'texte',
        valeur: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation accidentelle.',
      },
      {
        type: 'texte',
        valeur: 'Les transmissions de données sensibles (paiements) sont chiffrées via les protocoles SSL/TLS. Les paiements en ligne sont entièrement gérés par FedaPay, prestataire certifié.',
      },
    ],
  },
  {
    id: 'droits',
    titre: '7. Vos droits',
    contenu: [
      {
        type: 'texte',
        valeur: 'Conformément à la loi n° 2009-09 du 22 mai 2009 sur la protection des données personnelles en République du Bénin, vous disposez des droits suivants :',
      },
      {
        type: 'droits',
        items: [
          { icon: '👁', titre: 'Droit d\'accès', desc: 'Obtenir confirmation que des données vous concernant sont traitées et en obtenir une copie.' },
          { icon: '✏️', titre: 'Droit de rectification', desc: 'Corriger des données inexactes ou incomplètes vous concernant.' },
          { icon: '🗑', titre: 'Droit de suppression', desc: 'Demander la suppression de vos données dans les cas prévus par la loi.' },
          { icon: '⛔', titre: 'Droit d\'opposition', desc: 'Vous opposer au traitement de vos données pour des raisons légitimes.' },
        ],
      },
      {
        type: 'texte',
        valeur: 'Pour exercer l\'un de ces droits, contactez-nous à : contact@mairie-adja-ouere.bj en précisant votre identité et le droit que vous souhaitez exercer. Nous répondrons dans un délai de 30 jours.',
      },
    ],
  },
  {
    id: 'cookies',
    titre: '8. Cookies et traceurs',
    contenu: [
      {
        type: 'texte',
        valeur: 'Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de profilage n\'est utilisé.',
      },
      {
        type: 'texte',
        valeur: 'Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies. Cela peut toutefois affecter certaines fonctionnalités du site.',
      },
    ],
  },
  {
    id: 'modifications',
    titre: '9. Modifications de cette politique',
    contenu: [
      {
        type: 'texte',
        valeur: 'La Mairie d\'Adja-Ouèrè se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur ce site. Nous vous encourageons à consulter régulièrement cette page.',
      },
      {
        type: 'texte',
        valeur: 'Date de dernière mise à jour : mai 2025.',
      },
    ],
  },
  {
    id: 'contact',
    titre: '10. Contact',
    contenu: [
      {
        type: 'texte',
        valeur: 'Pour toute question relative à cette politique de confidentialité ou à la gestion de vos données personnelles :',
      },
      {
        type: 'liste',
        items: [
          { label: 'Email', valeur: 'contact@mairie-adja-ouere.bj' },
          { label: 'Courrier', valeur: 'Mairie d\'Adja-Ouèrè — Protection des données, Département du Plateau, République du Bénin' },
          { label: 'Téléphone', valeur: '+229 XX XX XX XX' },
        ],
      },
    ],
  },
]

export default function PolitiqueConfidentialitePage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const textStyle: React.CSSProperties = {
    fontFamily: 'Source Sans 3, sans-serif',
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#4A4A4A',
    margin: '0 0 16px 0',
  }

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section className="page-hero-section" style={{ backgroundColor: '#0A3D2E', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Légal
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '600px' }}>
            Comment la Commune d&apos;Adja-Ouèrè collecte, utilise et protège vos données personnelles.
            Dernière mise à jour : mai 2025.
          </p>
        </div>
      </section>

      {/* Résumé rapide */}
      <section className="page-resume-section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="page-stats-grid">
            {[
              { icon: '🔒', titre: 'Données protégées', desc: 'Chiffrement SSL et accès restreint' },
              { icon: '🚫', titre: 'Pas de revente', desc: 'Vos données ne sont jamais vendues' },
              { icon: '✅', titre: 'Vos droits garantis', desc: 'Accès, rectification, suppression' },
              { icon: '📋', titre: 'Usage limité', desc: 'Uniquement pour vos demandes' },
            ].map(item => (
              <div key={item.titre} style={{ padding: '20px 16px', backgroundColor: '#F8F6F1', borderRadius: '12px', border: '1px solid #E8E4DC', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', marginBottom: '4px' }}>{item.titre}</div>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '12px', color: '#6A6A6A' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="page-content-section">
        <div className="page-sidebar-grid">

          {/* Sommaire sticky */}
          <div className="page-sidebar-col" style={{ position: 'sticky', top: '90px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '24px' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                  Sommaire
                </div>
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`}
                    style={{
                      display: 'block',
                      fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: activeSection === s.id ? '700' : '400',
                      color: activeSection === s.id ? '#0A3D2E' : '#6A6A6A',
                      textDecoration: 'none',
                      padding: '7px 0 7px 12px',
                      borderLeft: `2px solid ${activeSection === s.id ? '#C9A84C' : 'transparent'}`,
                      transition: 'all 0.2s ease',
                      lineHeight: '1.3',
                    }}
                  >
                    {s.titre}
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '16px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(10,61,46,0.12)' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#0A3D2E', marginBottom: '8px' }}>📄 Voir aussi</div>
                <Link href="/mentions-legales" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', marginBottom: '6px', fontWeight: '500' }}>
                  Mentions légales →
                </Link>
                <Link href="/politique-cookies" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', marginBottom: '6px', fontWeight: '500' }}>
                  Politique des cookies →
                </Link>
                <Link href="/contact" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}>
                  Nous contacter →
                </Link>
              </div>
          </div>

          {/* Sections */}
          <div>
            {sections.map((section, idx) => (
              <div key={section.id} id={section.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E8E4DC',
                  padding: '36px',
                  marginBottom: idx < sections.length - 1 ? '24px' : '0',
                  scrollMarginTop: '100px',
                }}
              >
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700',
                  color: '#0A3D2E', margin: '0 0 20px 0',
                  paddingBottom: '16px', borderBottom: '2px solid #F8F6F1',
                }}>
                  {section.titre}
                </h2>

                {section.contenu.map((bloc: any, i: number) => {
                  if (bloc.type === 'texte') {
                    return <p key={i} style={textStyle}>{bloc.valeur}</p>
                  }

                  if (bloc.type === 'puces' && bloc.items) {
                    return (
                      <ul key={i} style={{ paddingLeft: '0', listStyle: 'none', margin: '0 0 16px 0' }}>
                        {bloc.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#4A4A4A', marginBottom: j < bloc.items!.length - 1 ? '10px' : '0' }}>
                            <span style={{ color: '#C9A84C', fontSize: '16px', marginTop: '2px', flexShrink: 0 }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  if (bloc.type === 'blocs' && bloc.items) {
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                        {bloc.items.map((item, j) => (
                          <div key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', backgroundColor: '#F8F6F1', borderRadius: '10px', border: '1px solid #E8E4DC' }}>
                            <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                            <div>
                              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', marginBottom: '4px' }}>{item.titre}</div>
                              <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#6A6A6A' }}>{item.valeur}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  }

                  if (bloc.type === 'tableau' && bloc.lignes) {
                    return (
                      <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E8E4DC', marginBottom: '16px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#0A3D2E', padding: '12px 16px' }}>
                          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '1px' }}>Type de données</span>
                          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '1px' }}>Durée de conservation</span>
                        </div>
                        {bloc.lignes.map((ligne, j) => (
                          <div key={j} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 16px', backgroundColor: j % 2 === 0 ? '#FFFFFF' : '#F8F6F1', borderTop: '1px solid #E8E4DC' }}>
                            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#1C1C1C', fontWeight: '500' }}>{ligne.type}</span>
                            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', color: '#6A6A6A' }}>{ligne.duree}</span>
                          </div>
                        ))}
                      </div>
                    )
                  }

                  if (bloc.type === 'droits' && bloc.items) {
                    return (
                      <div key={i} className="page-droits-grid" style={{ marginBottom: '16px' }}>
                        {bloc.items.map((item, j) => (
                          <div key={j} style={{ padding: '16px', backgroundColor: '#F8F6F1', borderRadius: '10px', border: '1px solid #E8E4DC' }}>
                            <div style={{ fontSize: '22px', marginBottom: '8px' }}>{item.icon}</div>
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: '#0A3D2E', marginBottom: '4px' }}>{item.titre}</div>
                            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#6A6A6A' }}>{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )
                  }

                  if (bloc.type === 'liste' && bloc.items) {
                    return (
                      <div key={i} style={{ backgroundColor: '#F8F6F1', borderRadius: '10px', padding: '20px', border: '1px solid #E8E4DC' }}>
                        {bloc.items.map((item, j) => (
                          <div key={j} style={{
                            display: 'flex', gap: '12px', alignItems: 'flex-start',
                            paddingBottom: j < bloc.items!.length - 1 ? '12px' : '0',
                            marginBottom: j < bloc.items!.length - 1 ? '12px' : '0',
                            borderBottom: j < bloc.items!.length - 1 ? '1px solid #E8E4DC' : 'none',
                          }}>
                            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: '80px', paddingTop: '2px' }}>
                              {item.label}
                            </span>
                            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#1C1C1C', flex: 1 }}>
                              {item.valeur}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  }

                  return null
                })}
              </div>
            ))}

            {/* Voir aussi — mobile uniquement */}
            <div className="page-voir-aussi-mobile" style={{ marginTop: '24px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(10,61,46,0.12)' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#0A3D2E', marginBottom: '10px' }}>📄 Voir aussi</div>
              <Link href="/mentions-legales" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', marginBottom: '8px', fontWeight: '500' }}>
                Mentions légales →
              </Link>
              <Link href="/politique-cookies" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', marginBottom: '8px', fontWeight: '500' }}>
                Politique des cookies →
              </Link>
              <Link href="/contact" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}>
                Nous contacter →
              </Link>
            </div>

            {/* Lien vers mentions légales */}
            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#0A3D2E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Document lié</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>Mentions légales</div>
              </div>
              <Link href="/mentions-legales" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '11px 22px', borderRadius: '8px', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
                  Consulter →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
