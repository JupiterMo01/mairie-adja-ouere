'use client'

import { useState, useEffect } from 'react'
import { useIsMobile } from '@/src/hooks/useIsMobile'
import Link from 'next/link'
import { actualites as toutesActualites } from '@/app/publications/actualites/page'

const categorieColors: { [key: string]: string } = {
  "Réunion": "#2196F3",
  "Événement": "#9C27B0",
  "Projet": "#4CAF50",
  "Session": "#FF9800",
  "Reddition de compte": "#F44336",
  "Communiqué": "#00BCD4",
  "Annonce": "#009688",
}

const slides = toutesActualites.slice(0, 5)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const isMobile = useIsMobile()

  const goToNext = () => {
    if (animating || slides.length === 0) return
    setAnimating(true)
    setTimeout(() => { setCurrent(p => (p + 1) % slides.length); setAnimating(false) }, 500)
  }
  const goToPrev = () => {
    if (animating || slides.length === 0) return
    setAnimating(true)
    setTimeout(() => { setCurrent(p => (p - 1 + slides.length) % slides.length); setAnimating(false) }, 500)
  }
  const goTo = (index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => { setCurrent(index); setAnimating(false) }, 500)
  }

  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => { setCurrent(p => (p + 1) % slides.length); setAnimating(false) }, 500)
    }, 6000)
    return () => clearInterval(timer)
  }, [current])

  if (slides.length === 0) {
    return (
      <div style={{ position: 'relative', height: '100vh', minHeight: '600px', width: '100%', overflow: 'hidden', backgroundColor: '#0A3D2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📰</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0' }}>Aucune actualité disponible</h2>
          <Link href="/publications/actualites" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Voir les publications →
          </Link>
        </div>
      </div>
    )
  }

  const slide = slides[current]

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '600px', width: '100%', overflow: 'hidden', backgroundColor: '#0A3D2E' }}>

      {/* Image de fond */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center center', opacity: animating ? 0 : 1, transition: 'opacity 0.5s ease' }} />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,61,46,0.75)' }} />

      {/* Flèche gauche */}
      <button onClick={goToPrev} style={{ position: 'absolute', left: isMobile ? '10px' : '24px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '50%', width: isMobile ? '38px' : '52px', height: isMobile ? '38px' : '52px', cursor: 'pointer', color: '#FFFFFF', fontSize: isMobile ? '16px' : '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', backdropFilter: 'blur(4px)' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.borderColor = '#C9A84C' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
      >❮</button>

      {/* Flèche droite */}
      <button onClick={goToNext} style={{ position: 'absolute', right: isMobile ? '10px' : '24px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '50%', width: isMobile ? '38px' : '52px', height: isMobile ? '38px' : '52px', cursor: 'pointer', color: '#FFFFFF', fontSize: isMobile ? '16px' : '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', backdropFilter: 'blur(4px)' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.borderColor = '#C9A84C' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
      >❯</button>

      {/* Contenu centré */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: isMobile ? '0 60px' : '0 120px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px', opacity: animating ? 0 : 1, transform: animating ? 'translateY(20px)' : 'translateY(0)', transition: 'all 0.5s ease 0.1s' }}>
          <span style={{ backgroundColor: categorieColors[slide.categorie] || '#C9A84C', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', padding: '5px 16px', borderRadius: '20px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{slide.categorie}</span>
          {slide.date && <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif', fontSize: '13px' }}>{slide.date}</span>}
        </div>

        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: isMobile ? '30px' : 'clamp(40px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', maxWidth: '800px', lineHeight: '1.2', marginBottom: '36px', marginTop: 0, opacity: animating ? 0 : 1, transform: animating ? 'translateY(20px)' : 'translateY(0)', transition: 'all 0.5s ease 0.2s' }}>
          {slide.titre}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', opacity: animating ? 0 : 1, transform: animating ? 'translateY(20px)' : 'translateY(0)', transition: 'all 0.5s ease 0.3s' }}>
          <Link href={`/publications/actualites/${slide.id}`} style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.5px', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B8973B'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Lire la suite →</Link>
          <Link href="/publications/actualites" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '500', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.5)', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#FFFFFF' }}
          >Toutes les actualités</Link>
        </div>
      </div>

      {/* Indicateurs */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, index) => (
          <button key={index} onClick={() => goTo(index)} style={{ width: index === current ? '28px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: index === current ? '#C9A84C' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
        ))}
      </div>

      {/* Numéro slide */}
      <div style={{ position: 'absolute', bottom: '28px', right: isMobile ? '16px' : '40px', zIndex: 10, fontFamily: 'Cormorant Garamond, serif', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
        <span style={{ color: '#C9A84C', fontSize: isMobile ? '18px' : '24px', fontWeight: '700' }}>{String(current + 1).padStart(2, '0')}</span>
        /{String(slides.length).padStart(2, '0')}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}
