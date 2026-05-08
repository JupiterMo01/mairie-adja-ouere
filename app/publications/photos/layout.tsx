import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Galerie photos — Commune d'Adja-Ouèrè",
  description: "Galerie photographique officielle de la Commune d'Adja-Ouèrè : vie communale, événements, réalisations et patrimoine.",
  openGraph: {
    title: "Galerie photos — Commune d'Adja-Ouèrè",
    description: "Photos officielles de la vie communale, événements et réalisations d'Adja-Ouèrè.",
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
        { label: 'Galerie photos', href: '/publications/photos' },
      ]} />
      {children}
    </>
  )
}
