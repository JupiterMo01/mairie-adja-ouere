import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Instances et Services — Commune d'Adja-Ouèrè",
  description: "Organigramme, conseil communal, directions techniques et administratives, chefs d'arrondissement de la Mairie d'Adja-Ouèrè.",
  openGraph: {
    title: "Instances et Services — Commune d'Adja-Ouèrè",
    description: "Organigramme et organisation administrative de la Commune d'Adja-Ouèrè.",
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
        { label: 'Instances et Services', href: '/presentation/instances' },
      ]} />
      {children}
    </>
  )
}
