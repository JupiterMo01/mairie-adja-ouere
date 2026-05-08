import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Événements — Commune d'Adja-Ouèrè",
  description: "Agenda des événements, cérémonies, foires et manifestations officielles de la Commune d'Adja-Ouèrè.",
  openGraph: {
    title: "Événements — Commune d'Adja-Ouèrè",
    description: "Agenda des événements et manifestations de la Commune d'Adja-Ouèrè.",
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
        { label: 'Événements', href: '/publications/evenements' },
      ]} />
      {children}
    </>
  )
}
