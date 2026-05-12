'use client'

import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '@/src/hooks/useIsMobile'

export default function MotMaire() {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useIsMobile(1024)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const motComplet = `C'est avec un immense honneur et une profonde fierté que je vous souhaite la bienvenue sur le site officiel de la Commune d'Adja-Ouèrè.

Notre commune, riche de son histoire et de sa diversité culturelle, s'engage résolument dans la voie du développement durable et de la bonne gouvernance. Chaque jour, nous œuvrons pour améliorer le cadre de vie de nos populations, renforcer les infrastructures et promouvoir l'épanouissement de chaque citoyen.

Ce portail numérique est le vôtre. Il a été conçu pour rapprocher l'administration de ses administrés, faciliter l'accès aux services municipaux et vous tenir informés de toutes les actions menées par votre commune.

Ensemble, construisons une Adja-Ouèrè prospère, solidaire et tournée vers l'avenir.`

  const motCourt = motComplet.substring(0, 300) + '...'

  const Badge = () => (
    <div style={{
      backgroundColor: '#0A3D2E',
      padding: '20px 28px',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(10,61,46,0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    }}>
      <div style={{
        width: '4px',
        height: '48px',
        backgroundColor: '#C9A84C',
        borderRadius: '2px',
        flexShrink: 0,
      }} />
      <div>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '20px',
          fontWeight: '700',
          color: '#FFFFFF',
        }}>Nom Prénom</div>
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '11px',
          color: '#C9A84C',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginTop: '6px',
        }}>Maire de la Commune</div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} style={{
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '60px 24px' : '100px 40px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '420px 1fr',
        gap: isMobile ? '40px' : '80px',
        alignItems: 'start',
      }}>

        {/* COLONNE GAUCHE — Photo uniquement */}
        <div style={{
          padding: isMobile ? '0' : '20px 0 0 20px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
            alt="Maire"
            style={{
              width: '100%',
              aspectRatio: '3/4',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              borderRadius: '12px',
              outline: '3px solid #C9A84C',
              outlineOffset: '-3px',
              boxShadow: isMobile ? 'none' : '-12px -12px 0px 0px #C9A84C',
            }}
          />
        </div>

        {/* COLONNE DROITE — Texte + Badge */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(40px)',
          transition: 'opacity 0.8s ease 0.18s, transform 0.8s ease 0.18s',
        }}>

          {/* Label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: '#C9A84C',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>Mot du Maire</span>
          </div>

          {/* Titre */}
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: isMobile ? '32px' : 'clamp(32px, 3vw, 52px)',
            fontWeight: '700',
            color: '#0A3D2E',
            lineHeight: '1.2',
            marginBottom: '24px',
            marginTop: 0,
          }}>Bienvenue dans notre commune</h2>

          {/* Guillemet */}
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '80px',
            color: '#C9A84C',
            lineHeight: '0.5',
            marginBottom: '20px',
            opacity: 0.4,
          }}>"</div>

          {/* Texte */}
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#4A4A4A',
            marginBottom: '28px',
            marginTop: 0,
            whiteSpace: 'pre-line',
          }}>
            {expanded ? motComplet : motCourt}
          </p>

          {/* Bouton lire plus */}
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'transparent',
              border: '2px solid #0A3D2E',
              color: '#0A3D2E',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginBottom: '36px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#0A3D2E'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#0A3D2E'
            }}
          >{expanded ? 'Réduire ↑' : 'Lire la suite ↓'}</button>

          {/* Badge — sous le bouton sur desktop ET mobile */}
          <Badge />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
      `}</style>
    </section>
  )
}