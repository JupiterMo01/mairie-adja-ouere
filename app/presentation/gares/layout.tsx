import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Gares routières — Commune d'Adja-Ouèrè",
  description: "Informations sur les gares routières de la Commune d'Adja-Ouèrè : horaires, destinations desservies et infrastructures de transport.",
  openGraph: {
    title: "Gares routières — Commune d'Adja-Ouèrè",
    description: "Gares routières, horaires et destinations desservies dans la Commune d'Adja-Ouèrè.",
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
        { label: 'Présentation', href: '/presentation' },
        { label: 'Gares routières', href: '/presentation/gares' },
      ]} />
      {children}
    </>
  )
}
