import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Bulletins d'information — Commune d'Adja-Ouèrè",
  description: "Bulletins d'information périodiques de la Commune d'Adja-Ouèrè à télécharger. Restez informé de la vie communale.",
  openGraph: {
    title: "Bulletins d'information — Commune d'Adja-Ouèrè",
    description: "Bulletins d'information de la Commune d'Adja-Ouèrè à télécharger.",
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
        { label: "Bulletins d'information", href: '/publications/bulletins' },
      ]} />
      {children}
    </>
  )
}
