import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Faire un don — Commune d'Adja-Ouèrè",
  description: "Soutenez le développement de la Commune d'Adja-Ouèrè en faisant un don. Contribuez aux projets communautaires et au bien-être des citoyens.",
  openGraph: {
    title: "Faire un don — Commune d'Adja-Ouèrè",
    description: "Soutenez le développement de la Commune d'Adja-Ouèrè en faisant un don.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
