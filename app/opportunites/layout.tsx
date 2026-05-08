import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Opportunités — Commune d'Adja-Ouèrè",
  description: "Marchés publics, appels d'offres et recrutements de la Commune d'Adja-Ouèrè. Participez à la vie économique et sociale de la commune.",
  openGraph: {
    title: "Opportunités — Commune d'Adja-Ouèrè",
    description: "Marchés publics, appels d'offres et recrutements de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
