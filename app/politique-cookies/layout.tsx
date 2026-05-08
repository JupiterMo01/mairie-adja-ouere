import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Politique des cookies — Commune d'Adja-Ouèrè",
  description: "Politique relative à l'utilisation des cookies sur le site officiel de la Commune d'Adja-Ouèrè. Gestion et suppression des cookies.",
  openGraph: {
    title: "Politique des cookies — Commune d'Adja-Ouèrè",
    description: "Politique relative à l'utilisation des cookies sur le site officiel de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
