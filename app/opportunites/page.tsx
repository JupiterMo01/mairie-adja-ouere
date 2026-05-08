'use client'

import React from 'react'
import Link from 'next/link'

const categories = [
  {
    icon: '🏗️',
    titre: 'Marchés publics',
    description: 'Consultez les appels d\'offres et marchés publics de la commune. Participez aux procédures d\'attribution des travaux, fournitures et services.',
    href: '/opportunites/marches',
    stats: '12 marchés actifs',
    color: '#0A3D2E',
  },
  {
    icon: '💼',
    titre: 'Recrutements',
    description: 'Découvrez les postes ouverts au sein de la mairie et des structures communales. Rejoignez notre équipe au service des citoyens d\'Adja-Ouèrè.',
    href: '/opportunites/recrutements',
    stats: '3 postes ouverts',
    color: '#156840',
  },
]


export default function OpportunitesPage() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '250px', height: '250px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.07)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Opportunités
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Opportunités de la commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Marchés publics, appels d'offres et recrutements — toutes les opportunités offertes par la Commune d'Adja-Ouèrè aux entreprises et aux citoyens.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Explorer</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Toutes les opportunités
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                <OpportuniteCard cat={cat} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Procédure */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Comment participer</span>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.2' }}>
              Processus de participation
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { num: '01', titre: 'Consulter', desc: 'Parcourez les avis de marchés et offres d\'emploi publiés sur cette page.' },
              { num: '02', titre: 'Préparer', desc: 'Rassemblez les documents requis : statuts, attestations fiscales, CV, lettres de motivation...' },
              { num: '03', titre: 'Soumettre', desc: 'Déposez votre dossier sous pli fermé au secrétariat de la mairie avant la date limite indiquée.' },
              { num: '04', titre: 'Être contacté', desc: 'Les candidats retenus seront contactés directement par la mairie par téléphone ou par courrier officiel.' },
            ].map(step => (
              <div key={step.num} style={{ padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(201,168,76,0.2)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: '700', color: '#C9A84C', lineHeight: '1', marginBottom: '12px', opacity: 0.7 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 10px 0' }}>{step.titre}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>📞</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0' }}>
            Une question sur un marché ou un poste ?
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 32px 0' }}>
            Le service des marchés publics et des ressources humaines est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#0A3D2E', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
                padding: '14px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              }}>
                Nous contacter
              </button>
            </Link>
            <Link href="/e-services/participation-citoyenne" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: 'transparent', color: '#0A3D2E',
                fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
                padding: '14px 28px', borderRadius: '8px', border: '2px solid #0A3D2E', cursor: 'pointer',
              }}>
                Participation citoyenne
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

function OpportuniteCard({ cat }: { cat: { icon: string; titre: string; description: string; href: string; stats: string; color: string } }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#C9A84C' : '#E8E4DC'}`,
        boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{
        backgroundColor: hovered ? cat.color : '#F8F6F1',
        padding: '40px 32px',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'flex-start', gap: '20px',
      }}>
        <div style={{ fontSize: '48px', flexShrink: 0 }}>{cat.icon}</div>
        <div>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '28px', fontWeight: '700',
            color: hovered ? '#FFFFFF' : '#0A3D2E',
            margin: '0 0 8px 0',
            transition: 'color 0.3s ease',
          }}>
            {cat.titre}
          </h3>
          <span style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
            color: hovered ? '#C9A84C' : '#9A9A9A',
            transition: 'color 0.3s ease',
          }}>
            {cat.stats}
          </span>
        </div>
      </div>
      <div style={{ padding: '28px 32px' }}>
        <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 24px 0' }}>
          {cat.description}
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: hovered ? '#C9A84C' : '#0A3D2E',
          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
          transition: 'color 0.3s ease',
        }}>
          Voir les opportunités
          <span style={{ fontSize: '16px', transition: 'transform 0.2s ease', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
        </div>
      </div>
    </div>
  )
}
