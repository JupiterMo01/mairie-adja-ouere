import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import SectionNewsletter from '@/src/components/SectionNewsletter'
import CookieBanner from '@/src/components/CookieBanner'
import BackToTop from '@/src/components/BackToTop'
import ScrollRestoration from '@/src/components/ScrollRestoration'

export const metadata: Metadata = {
  title: "Commune d'Adja-Ouèrè — Site officiel",
  description: "Site officiel de la Commune d'Adja-Ouèrè — Département du Plateau, République du Bénin. Actualités, services, marchés publics et participation citoyenne.",
  openGraph: {
    title: "Commune d'Adja-Ouèrè — Site officiel",
    description: "Site officiel de la Commune d'Adja-Ouèrè, Bénin.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#F8F6F1',
        paddingTop: '74px',
      }}>
        {/* Lien d'évitement pour la navigation clavier */}
        <a
          href="#contenu-principal"
          style={{
            position: 'absolute',
            top: '-48px',
            left: '16px',
            zIndex: 99999,
            padding: '12px 20px',
            backgroundColor: '#C9A84C',
            color: '#0A3D2E',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '14px',
            fontWeight: '700',
            borderRadius: '0 0 8px 8px',
            textDecoration: 'none',
            transition: 'top 0.2s ease',
          }}
          onFocus={e => { e.currentTarget.style.top = '0' }}
          onBlur={e => { e.currentTarget.style.top = '-48px' }}
        >
          Passer au contenu principal
        </a>

        <Navbar />

        <div id="contenu-principal">
          {children}
        </div>

        <SectionNewsletter />
        <Footer />

        {/* Bandeau drapeau du Bénin */}
        <div style={{ display: 'flex', width: '100%', height: '10px' }}>
          <div style={{ flex: 1, backgroundColor: '#008751' }} />
          <div style={{ flex: 1, backgroundColor: '#FCD116' }} />
          <div style={{ flex: 1, backgroundColor: '#E8112D' }} />
        </div>

        <CookieBanner />
        <BackToTop />
        <ScrollRestoration />

        <style>{`
          /* Focus visible pour navigation clavier */
          :focus-visible {
            outline: 3px solid #C9A84C !important;
            outline-offset: 3px !important;
          }
          /* Reset focus pour la souris */
          :focus:not(:focus-visible) {
            outline: none;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </body>
    </html>
  )
}
