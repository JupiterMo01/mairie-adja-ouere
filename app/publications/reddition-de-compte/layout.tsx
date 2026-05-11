import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Reddition de compte — Commune d'Adja-Ouèrè",
  description: "Rapports de reddition de compte de la Commune d'Adja-Ouèrè. Transparence et bonne gouvernance dans la gestion des ressources publiques locales.",
  openGraph: {
    title: "Reddition de compte — Commune d'Adja-Ouèrè",
    description: "Rapports annuels et semestriels de reddition de compte de la Commune d'Adja-Ouèrè.",
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
        { label: 'Reddition de compte', href: '/publications/reddition-de-compte' },
      ]} />
      {children}
    </>
  )
}
