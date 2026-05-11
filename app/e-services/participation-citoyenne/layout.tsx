import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Participation citoyenne — Commune d'Adja-Ouèrè",
  description: "Proposez vos idées et contribuez activement au développement de la Commune d'Adja-Ouèrè. Votre voix compte.",
  openGraph: {
    title: "Participation citoyenne — Commune d'Adja-Ouèrè",
    description: "Proposez vos idées pour le développement de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
