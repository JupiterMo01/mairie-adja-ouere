import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Présentation — Commune d'Adja-Ouèrè",
  description: "Découvrez l'histoire, l'organisation, le territoire, le tourisme et les richesses de la Commune d'Adja-Ouèrè au cœur du Bénin.",
  openGraph: {
    title: "Présentation — Commune d'Adja-Ouèrè",
    description: "Découvrez l'histoire, l'organisation, le territoire, le tourisme et les richesses de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
