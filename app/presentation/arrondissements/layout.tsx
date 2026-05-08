import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Arrondissements — Commune d'Adja-Ouèrè",
  description: "Présentation des six arrondissements de la Commune d'Adja-Ouèrè : Adja-Ouère, Ikpinle, Kpoulou, Massè, Oko-Akare et Tatonnonkon.",
  openGraph: {
    title: "Arrondissements — Commune d'Adja-Ouèrè",
    description: "Les six arrondissements de la Commune d'Adja-Ouèrè avec leurs villages et données locales.",
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
        { label: 'Arrondissements', href: '/presentation/arrondissements' },
      ]} />
      {children}
    </>
  )
}
