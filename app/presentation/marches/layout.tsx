import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nos marchés — Commune d'Adja-Ouèrè",
  description: "Marchés locaux de la Commune d'Adja-Ouèrè : jours de tenue, spécialités, produits et localisation dans chaque arrondissement.",
  openGraph: {
    title: "Nos marchés — Commune d'Adja-Ouèrè",
    description: "Marchés locaux de la Commune d'Adja-Ouèrè : jours de tenue, spécialités et produits.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
