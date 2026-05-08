import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Actualités — Commune d'Adja-Ouèrè",
  description: "Toutes les actualités et dernières nouvelles de la Commune d'Adja-Ouèrè. Informations officielles, communiqués et annonces de la mairie.",
  openGraph: {
    title: "Actualités — Commune d'Adja-Ouèrè",
    description: "Dernières actualités et informations officielles de la Commune d'Adja-Ouèrè.",
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
        { label: 'Actualités', href: '/publications/actualites' },
      ]} />
      {children}
    </>
  )
}
