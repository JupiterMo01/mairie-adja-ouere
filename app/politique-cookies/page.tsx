'use client'

import React from 'react'
import Link from 'next/link'

const sections = [
  {
    id: 'definition',
    titre: "1. Qu'est-ce qu'un cookie ?",
    contenu: [
      {
        type: 'texte',
        valeur: "Un cookie est un petit fichier texte enregistré sur votre ordinateur, tablette ou téléphone lors de votre visite sur un site web. Il permet au site de mémoriser vos actions et préférences (comme la langue, la taille des caractères et d'autres paramètres d'affichage) pendant une période donnée, de sorte que vous n'ayez pas à les indiquer à nouveau lorsque vous revenez sur le site ou naviguez d'une page à une autre.",
      },
    ],
  },
  {
    id: 'types',
    titre: '2. Quels cookies utilisons-nous ?',
    contenu: [
      {
        type: 'blocs',
        items: [
          {
            icon: '🔒',
            titre: 'Cookies strictement nécessaires',
            valeur: "Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies, certaines parties du site ne peuvent pas fonctionner.",
          },
          {
            icon: '📊',
            titre: "Cookies de performance et d'analyse",
            valeur: "Ces cookies collectent des informations sur la façon dont les visiteurs utilisent le site (pages visitées, messages d'erreur éventuels, etc.). Ces données sont utilisées uniquement pour améliorer le fonctionnement du site. Toutes les informations collectées sont anonymisées.",
          },
          {
            icon: '⚙️',
            titre: 'Cookies de fonctionnalité',
            valeur: "Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre préférence de langue) et de fournir des fonctionnalités améliorées et plus personnelles. Ils peuvent également être utilisés pour fournir des services que vous avez demandés.",
          },
        ],
      },
    ],
  },
  {
    id: 'gestion',
    titre: '3. Comment gérer les cookies ?',
    contenu: [
      {
        type: 'texte',
        valeur: "Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour qu'ils les bloquent. Toutefois, si vous faites cela, vous devrez peut-être indiquer manuellement certaines préférences chaque fois que vous visiterez le site.",
      },
      {
        type: 'texte',
        valeur: 'Pour gérer vos préférences de cookies directement depuis notre site, cliquez sur le bouton "Refuser" ou "Accepter" du bandeau qui s\'affiche lors de votre première visite. Pour modifier votre choix ultérieurement, supprimez les cookies de votre navigateur pour que le bandeau réapparaisse.',
      },
    ],
  },
  {
    id: 'suppression',
    titre: '4. Comment supprimer les cookies dans votre navigateur ?',
    contenu: [
      {
        type: 'liste',
        items: [
          { label: 'Google Chrome', valeur: 'Menu > Paramètres > Confidentialité et sécurité > Cookies et autres données des sites' },
          { label: 'Mozilla Firefox', valeur: 'Menu > Options > Vie privée et sécurité > Cookies et données de sites' },
          { label: 'Microsoft Edge', valeur: 'Menu > Paramètres > Cookies et autorisations de site' },
          { label: 'Safari (macOS/iOS)', valeur: 'Préférences > Confidentialité > Cookies et données de sites web' },
        ],
      },
    ],
  },
  {
    id: 'conservation',
    titre: '5. Conservation des données',
    contenu: [
      {
        type: 'texte',
        valeur: "Les cookies déposés sur votre terminal ont une durée de vie limitée. Les cookies de session expirent à la fermeture de votre navigateur. Les cookies persistants sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la Commission Nationale Informatique et Libertés (CNIL).",
      },
    ],
  },
  {
    id: 'contact',
    titre: '6. Contact',
    contenu: [
      {
        type: 'texte',
        valeur: "Pour toute question relative à notre politique des cookies, vous pouvez nous contacter à l'adresse suivante :",
      },
      {
        type: 'liste',
        items: [
          { label: 'Email', valeur: 'contact@mairie-adja-ouere.bj' },
          { label: 'Courrier', valeur: "Mairie d'Adja-Ouèrè, Département du Plateau, République du Bénin" },
        ],
      },
    ],
  },
]

export default function PolitiqueCookiesPage() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
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
            Politique des cookies
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '600px' }}>
            Comment la Commune d&apos;Adja-Ouèrè utilise les cookies sur son site officiel.
            Dernière mise à jour : mai 2025.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

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

                {section.contenu.map((bloc: any, i: number) => {
                  if (bloc.type === 'texte') {
                    return <p key={i} style={textStyle}>{bloc.valeur}</p>
                  }

                  if (bloc.type === 'blocs' && bloc.items) {
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                        {bloc.items.map((item: any, j: number) => (
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

                  if (bloc.type === 'liste' && bloc.items) {
                    return (
                      <div key={i} style={{ backgroundColor: '#F8F6F1', borderRadius: '10px', padding: '20px', border: '1px solid #E8E4DC' }}>
                        {bloc.items.map((item: any, j: number) => (
                          <div key={j} style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '4px' : '12px',
                            alignItems: 'flex-start',
                            paddingBottom: j < bloc.items.length - 1 ? '12px' : '0',
                            marginBottom: j < bloc.items.length - 1 ? '12px' : '0',
                            borderBottom: j < bloc.items.length - 1 ? '1px solid #E8E4DC' : 'none',
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
                <Link href="/mentions-legales" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '11px 22px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}>
                    Mentions légales →
                  </button>
                </Link>
                <Link href="/politique-confidentialite" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '11px 22px', borderRadius: '8px', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
                    Confidentialité →
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
