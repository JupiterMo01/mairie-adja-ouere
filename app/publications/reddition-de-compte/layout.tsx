import type { Metadata } from 'next'

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
  return <>{children}</>
}
