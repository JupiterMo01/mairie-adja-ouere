import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "La Commune — Présentation | Adja-Ouèrè",
  description: "Histoire, géographie, démographie et données générales de la Commune d'Adja-Ouèrè, Département du Plateau, République du Bénin.",
  openGraph: {
    title: "La Commune — Présentation | Adja-Ouèrè",
    description: "Histoire, géographie, démographie et données générales de la Commune d'Adja-Ouèrè.",
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
        { label: 'La Commune', href: '/presentation/commune' },
      ]} />
      {children}
    </>
  )
}
