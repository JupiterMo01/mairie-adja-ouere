import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dénonciation — Commune d'Adja-Ouèrè",
  description: "Signalez un problème, une irrégularité ou une mauvaise gestion à la Commune d'Adja-Ouèrè de façon sécurisée et confidentielle.",
  openGraph: {
    title: "Dénonciation — Commune d'Adja-Ouèrè",
    description: "Signalez un problème à la Commune d'Adja-Ouèrè de façon sécurisée et confidentielle.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
