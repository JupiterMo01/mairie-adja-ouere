import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions légales — Commune d'Adja-Ouèrè",
  description: "Mentions légales du site officiel de la Commune d'Adja-Ouèrè. Éditeur, hébergement, propriété intellectuelle et protection des données.",
  openGraph: {
    title: "Mentions légales — Commune d'Adja-Ouèrè",
    description: "Mentions légales du site officiel de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
