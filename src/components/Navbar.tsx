'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  item: {
    label: string
    href: string
    submenu?: { label: string; href: string }[]
  }
}

function NavItem({ item }: NavItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '13px',
          fontWeight: '500',
          color: '#FFFFFF',
          textDecoration: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          letterSpacing: '0.3px',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'rgba(201, 168, 76, 0.15)'
          e.currentTarget.style.color = '#C9A84C'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#FFFFFF'
        }}
      >
        {item.label}
        {item.submenu && <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>}
      </Link>

      {item.submenu && open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: '#0A3D2E',
          borderRadius: '10px',
          padding: '8px',
          minWidth: '220px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
          border: '1px solid rgba(201,168,76,0.2)',
          zIndex: 100,
        }}>
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              style={{
                display: 'block',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '10px 14px',
                borderRadius: '6px',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.12)'
                e.currentTarget.style.color = '#C9A84C'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
              }}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navItems = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Présentation',
      href: '/presentation',
      submenu: [
        { label: 'La commune', href: '/presentation/commune' },
        { label: 'Instances et Services', href: '/presentation/instances' },
        { label: 'Arrondissements', href: '/presentation/arrondissements' },
        { label: 'Sites touristiques', href: '/presentation/sites-touristiques' },
        { label: 'Nos marchés', href: '/presentation/marches' },
        { label: 'Gares routières', href: '/presentation/gares' },
      ]
    },
    {
      label: 'Publications',
      href: '/publications',
      submenu: [
        { label: 'Actualités', href: '/publications/actualites' },
        { label: 'Reddition de compte', href: '/publications/reddition-de-compte' },
        { label: 'Projets', href: '/publications/projets' },
        { label: 'Événements', href: '/publications/evenements' },
        { label: 'Documents', href: '/publications/documents' },
        { label: 'Galerie photos', href: '/publications/photos' },
        { label: 'Vidéos', href: '/publications/videos' },
        { label: "Bulletins d'information", href: '/publications/bulletins' },
      ]
    },
    {
      label: 'Opportunités',
      href: '/opportunites',
      submenu: [
        { label: 'Marchés publics', href: '/opportunites/marches' },
        { label: 'Recrutements', href: '/opportunites/recrutements' },
      ]
    },
    {
      label: 'E-Services',
      href: '/e-services',
      submenu: [
        { label: 'Demande de stage', href: '/e-services/demande-stage' },
        { label: 'Autorisation manifestation', href: '/e-services/demande-manifestion' },
        { label: 'Dénonciation', href: '/e-services/denonciation' },
        { label: 'Participation citoyenne', href: '/e-services/participation-citoyenne' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ]

  const mobileGroups = [
    { label: 'Accueil', href: '/', indent: false },
    { label: 'Présentation', href: '/presentation', indent: false },
    { label: 'La commune', href: '/presentation/commune', indent: true },
    { label: 'Instances et Services', href: '/presentation/instances', indent: true },
    { label: 'Arrondissements', href: '/presentation/arrondissements', indent: true },
    { label: 'Sites touristiques', href: '/presentation/sites-touristiques', indent: true },
    { label: 'Nos marchés', href: '/presentation/marches', indent: true },
    { label: 'Gares routières', href: '/presentation/gares', indent: true },
    { label: 'Publications', href: '/publications', indent: false },
    { label: 'Actualités', href: '/publications/actualites', indent: true },
    { label: 'Reddition de compte', href: '/publications/reddition-de-compte', indent: true },
    { label: 'Projets', href: '/publications/projets', indent: true },
    { label: 'Événements', href: '/publications/evenements', indent: true },
    { label: 'Documents', href: '/publications/documents', indent: true },
    { label: 'Galerie photos', href: '/publications/photos', indent: true },
    { label: 'Vidéos', href: '/publications/videos', indent: true },
    { label: "Bulletins d'information", href: '/publications/bulletins', indent: true },
    { label: 'Opportunités', href: '/opportunites', indent: false },
    { label: 'Marchés publics', href: '/opportunites/marches', indent: true },
    { label: 'Recrutements', href: '/opportunites/recrutements', indent: true },
    { label: 'E-Services', href: '/e-services', indent: false },
    { label: 'Demande de stage', href: '/e-services/demande-stage', indent: true },
    { label: 'Autorisation manifestation', href: '/e-services/demande-manifestion', indent: true },
    { label: 'Dénonciation', href: '/e-services/denonciation', indent: true },
    { label: 'Participation citoyenne', href: '/e-services/participation-citoyenne', indent: true },
    { label: 'Contact', href: '/contact', indent: false },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(10, 61, 46, 0.98)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.3)',
      transition: 'padding 0.3s ease',
      padding: scrolled ? '10px 0' : '16px 0',
    }}>
      <div
        className="nav-inner"
        style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Armoirie */}
            <img
              src="/armoirie.png"
              alt="Armoirie du Bénin"
              style={{ width: isMobile ? '38px' : '56px', height: isMobile ? '38px' : '56px', objectFit: 'contain', flexShrink: 0 }}
            />
            {/* Bloc texte — masqué sur mobile */}
            {!isMobile && (
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1.3 }}>
                  République du Bénin
                </div>
                <div style={{ display: 'flex', height: '3px', borderRadius: '2px', overflow: 'hidden', margin: '4px 0' }}>
                  <div style={{ flex: 1, backgroundColor: '#008751' }} />
                  <div style={{ flex: 1, backgroundColor: '#FCD116' }} />
                  <div style={{ flex: 1, backgroundColor: '#E8112D' }} />
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1.3 }}>
                  Commune d&apos;Adja-Ouèrè
                </div>
              </div>
            )}
            {/* Logo commune */}
            <img
              src="/logo.jpeg"
              alt="Logo Commune d'Adja-Ouèrè"
              style={{ width: isMobile ? '38px' : '62px', height: isMobile ? '38px' : '62px', objectFit: 'contain', flexShrink: 0 }}
            />
          </div>
        </Link>

        {/* Menu Desktop */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {navItems.map((item) => <NavItem key={item.href} item={item} />)}
          </div>
        )}

        {/* Droite : Don (desktop) + Burger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {!isMobile && (
            <Link
              href="/don"
              style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
                color: '#0A3D2E', textDecoration: 'none', padding: '9px 18px',
                backgroundColor: '#C9A84C', borderRadius: '6px', whiteSpace: 'nowrap', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B8973B'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Faire un don
            </Link>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '6px',
                cursor: 'pointer',
                padding: '8px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <div style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(10, 61, 46, 0.99)',
          padding: '8px 20px 24px',
          borderTop: '1px solid rgba(201, 168, 76, 0.3)',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          {mobileGroups.map((item) => (
            <Link
              key={item.label + item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: item.indent ? '14px' : '15px',
                fontWeight: item.indent ? '400' : '700',
                color: item.indent ? 'rgba(255,255,255,0.65)' : '#FFFFFF',
                textDecoration: 'none',
                padding: item.indent ? '8px 0 8px 20px' : '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {item.indent && <span style={{ color: '#C9A84C', fontSize: '10px', flexShrink: 0 }}>▸</span>}
              {item.label}
            </Link>
          ))}

          {/* Bouton Faire un don dans le menu mobile */}
          <div style={{ paddingTop: '20px' }}>
            <Link
              href="/don"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#C9A84C', color: '#0A3D2E',
                fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '700',
                padding: '14px 24px', borderRadius: '8px', textDecoration: 'none',
                letterSpacing: '0.3px',
              }}
            >
              ♥ Faire un don à la commune
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>
    </nav>
  )
}
