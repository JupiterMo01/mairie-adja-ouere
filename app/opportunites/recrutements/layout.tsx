import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Recrutements — Commune d'Adja-Ouèrè",
  description: "Offres d'emploi et postes ouverts au sein de la Mairie de la Commune d'Adja-Ouèrè. Rejoignez l'équipe au service des citoyens.",
  openGraph: {
    title: "Recrutements — Commune d'Adja-Ouèrè",
    description: "Offres d'emploi et postes ouverts à la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
