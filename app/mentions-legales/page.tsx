'use client'

import React from 'react'
import Link from 'next/link'

const sections = [
  {
    id: 'editeur',
    titre: '1. Éditeur du site',
    contenu: [
      {
        type: 'texte',
        valeur: 'Le présent site internet est édité par la Commune d\'Adja-Ouèrè, collectivité territoriale de la République du Bénin.',
      },
      {
        type: 'liste',
        items: [
          { label: 'Dénomination', valeur: 'Mairie de la Commune d\'Adja-Ouèrè' },
          { label: 'Statut juridique', valeur: 'Collectivité territoriale décentralisée' },
          { label: 'Siège social', valeur: 'Adja-Ouèrè, Département du Plateau, République du Bénin' },
          { label: 'Téléphone', valeur: '+229 XX XX XX XX' },
          { label: 'Email', valeur: 'contact@mairie-adja-ouere.bj' },
          { label: 'Représentant légal', valeur: 'Le Maire de la Commune d\'Adja-Ouèrè' },
        ],
      },
    ],
  },
  {
    id: 'hebergement',
    titre: '2. Hébergement',
    contenu: [
      {
        type: 'texte',
        valeur: 'Ce site est hébergé par un prestataire technique désigné par la Mairie d\'Adja-Ouèrè. Les coordonnées précises de l\'hébergeur sont disponibles sur demande auprès du service informatique de la mairie.',
      },
    ],
  },
  {
    id: 'propriete',
    titre: '3. Propriété intellectuelle',
    contenu: [
      {
        type: 'texte',
        valeur: 'L\'ensemble des contenus présents sur ce site (textes, images, photographies, vidéos, logos, graphismes, documents) est la propriété exclusive de la Commune d\'Adja-Ouèrè ou de ses partenaires ayant concédé les droits correspondants.',
      },
      {
        type: 'texte',
        valeur: 'Toute reproduction, représentation, diffusion ou utilisation, même partielle, de ces contenus, sans l\'autorisation préalable et écrite de la Mairie d\'Adja-Ouèrè, est strictement interdite et constituerait une contrefaçon sanctionnée par les lois en vigueur.',
      },
      {
        type: 'texte',
        valeur: 'Les demandes d\'autorisation doivent être adressées à : contact@mairie-adja-ouere.bj',
      },
    ],
  },
  {
    id: 'donnees',
    titre: '4. Protection des données personnelles',
    contenu: [
      {
        type: 'texte',
        valeur: 'La Mairie d\'Adja-Ouèrè s\'engage à protéger vos données personnelles conformément aux lois applicables en République du Bénin, notamment la loi n° 2009-09 du 22 mai 2009 portant protection des données à caractère personnel.',
      },
      {
        type: 'texte',
        valeur: 'Les données collectées via les formulaires de ce site (demandes de stage, autorisation de manifestation, participation citoyenne, etc.) sont utilisées exclusivement pour le traitement de vos demandes. Elles ne sont ni vendues, ni cédées à des tiers.',
      },
      {
        type: 'texte',
        valeur: 'Conformément à la réglementation en vigueur, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : contact@mairie-adja-ouere.bj',
      },
    ],
  },
  {
    id: 'cookies',
    titre: '5. Cookies',
    contenu: [
      {
        type: 'texte',
        valeur: 'Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée à caractère personnel et ne sont pas utilisés à des fins publicitaires ou de profilage.',
      },
      {
        type: 'texte',
        valeur: 'Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.',
      },
    ],
  },
  {
    id: 'responsabilite',
    titre: '6. Limitation de responsabilité',
    contenu: [
      {
        type: 'texte',
        valeur: 'La Mairie d\'Adja-Ouèrè s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, elle ne peut garantir l\'exhaustivité, l\'exactitude ou l\'actualité des informations publiées et décline toute responsabilité pour les erreurs ou omissions.',
      },
      {
        type: 'texte',
        valeur: 'Les liens hypertextes vers des sites externes sont fournis à titre informatif. La Mairie d\'Adja-Ouèrè n\'est pas responsable du contenu de ces sites tiers.',
      },
    ],
  },
  {
    id: 'droit',
    titre: '7. Droit applicable',
    contenu: [
      {
        type: 'texte',
        valeur: 'Le présent site et ses mentions légales sont soumis au droit de la République du Bénin. Tout litige relatif à l\'utilisation de ce site sera soumis à la compétence des juridictions béninoises compétentes.',
      },
    ],
  },
  {
    id: 'contact',
    titre: '8. Nous contacter',
    contenu: [
      {
        type: 'texte',
        valeur: 'Pour toute question relative aux présentes mentions légales ou à l\'utilisation de ce site, vous pouvez nous contacter :',
      },
      {
        type: 'liste',
        items: [
          { label: 'Par email', valeur: 'contact@mairie-adja-ouere.bj' },
          { label: 'Par courrier', valeur: 'Mairie d\'Adja-Ouèrè, Département du Plateau, République du Bénin' },
          { label: 'Par téléphone', valeur: '+229 XX XX XX XX' },
        ],
      },
    ],
  },
]

export default function MentionsLegalesPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState(sections[0].id)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    sections.forEach(sec => { const el = document.getElementById(sec.id); if (el) observer.observe(el) })
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

      {/* Hero compact */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px 48px' : '80px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Légal
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            Mentions légales
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '600px' }}>
            Informations légales relatives au site officiel de la Commune d&apos;Adja-Ouèrè.
            Dernière mise à jour : mai 2025.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '260px 1fr', gap: '48px', alignItems: 'start' }}>

          {/* Sommaire — sidebar */}
          {!isMobile && (<div style={{ position: 'sticky', top: '108px' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '20px', overflow: 'hidden' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                Sommaire
              </div>
              {sections.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} style={{
                  display: 'block', padding: '9px 10px 9px 12px', borderRadius: '8px', marginBottom: '4px', textDecoration: 'none',
                  backgroundColor: activeSection === sec.id ? 'rgba(10,61,46,0.07)' : 'transparent',
                  borderLeft: `3px solid ${activeSection === sec.id ? '#C9A84C' : 'transparent'}`,
                  fontFamily: 'Outfit, sans-serif', fontSize: '13px',
                  fontWeight: activeSection === sec.id ? '700' : '400',
                  color: activeSection === sec.id ? '#0A3D2E' : '#6A6A6A',
                  transition: 'all 0.2s ease',
                }}>
                  {sec.titre}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '16px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '20px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                Voir aussi
              </div>
              <Link href="/politique-confidentialite" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500', marginBottom: '10px' }}>
                Politique de confidentialité →
              </Link>
              <Link href="/politique-cookies" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}>
                Politique des cookies →
              </Link>
            </div>
          </div>)}

          {/* Corps du document */}
          <div>
            {sections.map((section, idx) => (
              <div key={section.id} id={section.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E8E4DC',
                  padding: isMobile ? '24px' : '36px',
                  marginBottom: idx < sections.length - 1 ? '24px' : '0',
                  scrollMarginTop: '100px',
                }}
              >
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700',
                  color: '#0A3D2E', margin: '0 0 20px 0', lineHeight: '1.2',
                  paddingBottom: '16px', borderBottom: '2px solid #F8F6F1',
                }}>
                  {section.titre}
                </h2>
                {section.contenu.map((bloc, i) => {
                  if (bloc.type === 'texte') {
                    return <p key={i} style={textStyle}>{bloc.valeur}</p>
                  }
                  if (bloc.type === 'liste' && bloc.items) {
                    return (
                      <div key={i} style={{ backgroundColor: '#F8F6F1', borderRadius: '10px', padding: '20px', border: '1px solid #E8E4DC' }}>
                        {bloc.items.map((item, j) => (
                          <div key={j} style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '4px' : '12px',
                            alignItems: 'flex-start',
                            paddingBottom: j < bloc.items!.length - 1 ? '12px' : '0',
                            marginBottom: j < bloc.items!.length - 1 ? '12px' : '0',
                            borderBottom: j < bloc.items!.length - 1 ? '1px solid #E8E4DC' : 'none',
                          }}>
                            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: isMobile ? 'auto' : '140px', paddingTop: '2px' }}>
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

            {/* Documents liés */}
            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#0A3D2E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  Documents liés
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>
                  Informations légales
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/politique-confidentialite" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '11px 22px', borderRadius: '8px', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
                    Confidentialité →
                  </button>
                </Link>
                <Link href="/politique-cookies" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '11px 22px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                    Cookies →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
