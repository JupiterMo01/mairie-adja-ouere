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
        {item.submenu && (
          <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
        )}
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
  const [scrolled, setScrolled] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Presentation',
      href: '/presentation/commune',
      submenu: [
        { label: 'La commune', href: '/presentation/commune' },
        { label: 'Instances et Services', href: '/presentation/instances' },
        { label: 'Arrondissements', href: '/presentation/arrondissements' },
        { label: 'Les sites touristiques', href: '/presentation/sites-touristiques'},
        { label: 'Nos marchés', href: '/presentation/marches' },
        { label: 'Nos gares routières', href: '/presentation/gares' },
      ]
    },
    {
      label: 'Publications',
      href: '/publications',
      submenu: [
        { label: 'Actualites', href: '/publications/actualites' },
        { label: 'Projets', href: '/publications/projets' },
        { label: 'Evenements', href: '/publications/evenements' },
        { label: 'Documents', href: '/publications/documents' },
        { label: 'Galerie photos', href: '/publications/photos' },
        { label: 'Videos', href: '/publications/videos' },
        { label: "Bulletins d'information", href: '/publications/bulletins' },
      ]
    },
    {
      label: 'Opportunites',
      href: '/opportunites',
      submenu: [
        { label: 'Marches publics', href: '/opportunites/marches' },
        { label: 'Recrutements', href: '/opportunites/recrutements' },
      ]
    },
    {
      label: 'E-Services',
      href: '/e-services',
      submenu: [
        { label: 'Demande de stage', href: '/e-services/demande-stage' },
        { label: 'Autorisation manifestation', href: '/e-services/demande-manifestion' },
        { label: 'Denonciation', href: '/e-services/denonciation' },
        { label: 'Participation citoyenne', href: '/e-services/participation-citoyenne' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ]

  const mobileItems = [
    { label: 'Accueil', href: '/', indent: false },
    { label: 'Presentation', href: '/presentation/commune', indent: false },
    { label: 'La commune', href: '/presentation/commune', indent: true },
    { label: 'Instances et Services', href: '/presentation/instances', indent: true },
    { label: 'Arrondissements', href: '/presentation/arrondissements', indent: true },
    { label: 'Les sites touristiques', href: '/presentation/sites-touristiques', indent: true },
    { label: 'Nos marchés', href: '/presentation/marches', indent: true },
    { label: 'Nos gares routières', href: '/presentation/gares' , indent: true },
    { label: 'Publications', href: '/publications/actualites', indent: false },
    { label: 'Actualites', href: '/publications/actualites', indent: true },
    { label: 'Projets', href: '/publications/projets', indent: true },
    { label: 'Evenements', href: '/publications/evenements', indent: true },
    { label: 'Documents', href: '/publications/documents', indent: true },
    { label: 'Galerie photos', href: '/publications/photos', indent: true },
    { label: 'Videos', href: '/publications/videos', indent: true },
    { label: 'Bulletins', href: '/publications/bulletins', indent: true },
    { label: 'Opportunites', href: '/opportunites', indent: false },
    { label: 'Marches publics', href: '/opportunites/marches', indent: true },
    { label: 'Recrutements', href: '/opportunites/recrutements', indent: true },
    { label: 'E-Services', href: '/e-services', indent: false },
    { label: 'Demande de stage', href: '/e-services/demande-stage', indent: true },
    { label: 'Autorisation manifestation', href: '/e-services/demande-manifestion', indent: true },
    { label: 'Denonciation', href: '/e-services/denonciation', indent: true },
    { label: 'Participation citoyenne', href: '/e-services/participation-citoyenne', indent: true },
    { label: 'Contact', href: '/contact', indent: false },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(10, 61, 46, 0.97)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.3)',
      transition: 'all 0.4s ease',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              backgroundColor: '#C9A84C',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: '700',
              fontSize: '18px',
              color: '#0A3D2E',
            }}>
              AO
            </div>
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '16px',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.5px',
                lineHeight: '1.2',
              }}>
                Commune d'Adja-Ouere
              </div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '11px',
                color: '#C9A84C',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                Republique du Benin
              </div>
            </div>
          </div>
        </Link>

        {/* Menu Desktop */}
        <div
          className="desktop-menu"
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>

        {/* Bouton Don + Burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/don"
            className="don-btn"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0A3D2E',
              textDecoration: 'none',
              padding: '10px 20px',
              backgroundColor: '#C9A84C',
              borderRadius: '6px',
              letterSpacing: '0.3px',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#B8973B'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#C9A84C'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Faire un don
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="burger-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <div style={{ width: '24px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: '24px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: '24px', height: '2px', backgroundColor: '#FFFFFF', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(10, 61, 46, 0.98)',
          padding: '12px 24px 24px',
          borderTop: '1px solid rgba(201, 168, 76, 0.3)',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          {mobileItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: item.indent ? '14px' : '15px',
                fontWeight: item.indent ? '400' : '600',
                color: item.indent ? 'rgba(255,255,255,0.7)' : '#FFFFFF',
                textDecoration: 'none',
                padding: item.indent ? '9px 0 9px 20px' : '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {item.indent && (
                <span style={{ color: '#C9A84C', fontSize: '10px' }}>▸</span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .burger-btn { display: flex !important; }
          .don-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
