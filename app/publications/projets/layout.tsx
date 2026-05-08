import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Projets — Commune d'Adja-Ouèrè",
  description: "Projets de développement en cours et réalisés dans la Commune d'Adja-Ouèrè. Infrastructures, social, éducation et développement local.",
  openGraph: {
    title: "Projets — Commune d'Adja-Ouèrè",
    description: "Projets de développement en cours et réalisés dans la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Publications', href: '/publications' },
        { label: 'Projets', href: '/publications/projets' },
      ]} />
      {children}
    </>
  )
}
