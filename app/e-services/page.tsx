'use client'

import React from 'react'
import Link from 'next/link'

export const services = [
  {
    icon: '🎓',
    titre: 'Demande de stage',
    description: 'Déposez votre demande de stage au sein des services de la Mairie d\'Adja-Ouèrè. Remplissez le formulaire en ligne et joignez vos pièces justificatives.',
    href: '/e-services/demande-stage',
    delai: '5 à 7 jours ouvrables',
    pieces: ['Lettre de motivation', 'CV', 'Carte d\'étudiant', 'Convention de stage'],
    color: '#0A3D2E',
  },
  {
    icon: '🎉',
    titre: 'Autorisation de manifestation',
    description: 'Obtenez l\'autorisation pour organiser un événement public (fête, concert, rassemblement) sur le territoire de la commune.',
    href: '/e-services/demande-manifestion',
    delai: '7 à 10 jours ouvrables',
    pieces: ['Formulaire complété', 'Plan du lieu', 'Attestation d\'assurance', 'Programme détaillé'],
    color: '#156840',
  },
  {
    icon: '📢',
    titre: 'Dénonciation',
    description: 'Signalez une infraction, un abus ou un dysfonctionnement au sein des services communaux. Votre signalement sera traité en toute confidentialité.',
    href: '/e-services/denonciation',
    delai: 'Traitement sous 15 jours',
    pieces: ['Formulaire de signalement', 'Preuves (optionnel)'],
    color: '#C9A84C',
  },
  {
    icon: '🌱',
    titre: 'Participation citoyenne',
    description: 'Partagez vos idées et propositions pour le développement de la commune. Toute personne peut soumettre une suggestion, anonymement ou non.',
    href: '/e-services/participation-citoyenne',
    delai: 'Ouvert en permanence',
    pieces: ['Votre idée ou proposition', 'Coordonnées (optionnel)'],
    color: '#156840',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <Link href={service.href} style={{ textDecoration: 'none' }}>
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
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          backgroundColor: hovered ? service.color : '#F8F6F1',
          padding: '32px 28px',
          transition: 'all 0.3s ease',
          display: 'flex', gap: '16px', alignItems: 'flex-start',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
            backgroundColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(10,61,46,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px',
          }}>
            {service.icon}
          </div>
          <div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: '700',
              color: hovered ? '#FFFFFF' : '#0A3D2E',
              margin: '0 0 6px 0', lineHeight: '1.2',
              transition: 'color 0.3s ease',
            }}>
              {service.titre}
            </h3>
            <div style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
              color: hovered ? 'rgba(255,255,255,0.7)' : '#9A9A9A',
              transition: 'color 0.3s ease',
            }}>
              ⏱ {service.delai}
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 20px 0', flex: 1 }}>
            {service.description}
          </p>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Pièces requises
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {service.pieces.map(p => (
                <span key={p} style={{
                  backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC',
                  borderRadius: '6px', padding: '4px 10px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#4A4A4A',
                }}>
                  {p}
                </span>
              ))}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: hovered ? '#C9A84C' : '#0A3D2E',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700',
              transition: 'color 0.3s ease',
            }}>
              Accéder au service
              <span style={{ transition: 'transform 0.2s ease', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function EServicesPage() {
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
        <div style={{ position: 'absolute', bottom: '-80px', left: '5%', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Services en ligne
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            E-Services de la commune
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Accédez aux services administratifs de la Commune d'Adja-Ouèrè directement en ligne. Déposez vos demandes, soumettez vos idées citoyennes, 24h/24 et 7j/7.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '40px 24px' : '60px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '🕐', titre: '24h/24 disponible', desc: 'Déposez vos demandes à tout moment, même hors des horaires d\'ouverture' },
              { icon: '📱', titre: '100% en ligne', desc: 'Formulaires numériques, sans déplacement obligatoire à la mairie' },
              { icon: '🌱', titre: 'Participation citoyenne', desc: 'Soumettez vos idées de développement pour faire bouger la commune' },
              { icon: '🔒', titre: 'Données sécurisées', desc: 'Vos informations personnelles sont protégées et traitées confidentiellement' },
            ].map(item => (
              <div key={item.titre} style={{ textAlign: 'center', padding: '28px 20px', borderRadius: '16px', backgroundColor: '#F8F6F1', border: '1px solid #E8E4DC' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E', marginBottom: '8px' }}>{item.titre}</div>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#6A6A6A' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Catalogue</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
              Nos services en ligne
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '28px' }}>
            {services.map(s => <ServiceCard key={s.href} service={s} />)}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>Guide</span>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.2' }}>
              Comment utiliser les e-services ?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { num: '01', titre: 'Choisissez', desc: 'Sélectionnez le service dont vous avez besoin parmi notre catalogue.' },
              { num: '02', titre: 'Remplissez', desc: 'Complétez le formulaire en ligne avec vos informations et joignez les pièces requises.' },
              { num: '03', titre: 'Soumettez', desc: 'Envoyez votre demande. La mairie la prend en charge et vous répondra par email dans le délai indiqué.' },
              { num: '04', titre: 'Participez', desc: 'Soumettez vos idées citoyennes pour contribuer au développement et à la transformation de la commune.' },
            ].map(step => (
              <div key={step.num} style={{ padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(201,168,76,0.2)', backgroundColor: 'rgba(255,255,255,0.04)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: '700', color: '#C9A84C', lineHeight: '1', marginBottom: '12px', opacity: 0.6 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 10px 0' }}>{step.titre}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact aide */}
      <section style={{ padding: isMobile ? '60px 24px' : '80px 40px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>🤝</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#0A3D2E', margin: '0 0 14px 0' }}>
            Besoin d'aide ?
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: '#6A6A6A', margin: '0 0 28px 0' }}>
            Notre équipe est disponible pour vous accompagner dans l'utilisation des services en ligne ou pour répondre à vos questions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '13px 28px', borderRadius: '8px',
                backgroundColor: '#0A3D2E', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
                border: 'none', cursor: 'pointer',
              }}>
                Contacter la mairie
              </button>
            </Link>
            <a href="tel:+22921XXXXXX" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '13px 28px', borderRadius: '8px',
                backgroundColor: 'transparent', color: '#0A3D2E',
                fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
                border: '2px solid #0A3D2E', cursor: 'pointer',
              }}>
                📞 Appeler la mairie
              </button>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
