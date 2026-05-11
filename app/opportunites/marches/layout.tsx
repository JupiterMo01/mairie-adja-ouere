import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Marchés publics — Commune d'Adja-Ouèrè",
  description: "Consultez les appels d'offres et marchés publics actifs de la Commune d'Adja-Ouèrè. Participez aux procédures d'attribution des travaux, fournitures et services.",
  openGraph: {
    title: "Marchés publics — Commune d'Adja-Ouèrè",
    description: "Appels d'offres et marchés publics actifs de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
