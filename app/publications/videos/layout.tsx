import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vidéos — Commune d'Adja-Ouèrè",
  description: "Vidéos officielles de la Commune d'Adja-Ouèrè : sessions du conseil communal, événements, projets et vie de la commune.",
  openGraph: {
    title: "Vidéos — Commune d'Adja-Ouèrè",
    description: "Vidéos officielles de la Commune d'Adja-Ouèrè : conseils communaux, événements et projets.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
