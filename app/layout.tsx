import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import SectionNewsletter from '@/src/components/SectionNewsletter'

export const metadata: Metadata = {
  title: "Commune d'Adja-Ouère",
  description: "Site officiel de la Commune d'Adja-Ouère — Département du Plateau, Bénin",
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
        paddingTop: '80px',
      }}>
        <Navbar />
        {children}
        <SectionNewsletter />
        <Footer />
      </body>
    </html>
  )
}