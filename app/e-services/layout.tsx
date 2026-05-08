import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "E-Services — Commune d'Adja-Ouèrè",
  description: "Services en ligne de la Commune d'Adja-Ouèrè : demande de stage, autorisation de manifestation, dénonciation et participation citoyenne.",
  openGraph: {
    title: "E-Services — Commune d'Adja-Ouèrè",
    description: "Services en ligne de la Commune d'Adja-Ouèrè : demandes administratives et participation citoyenne.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
