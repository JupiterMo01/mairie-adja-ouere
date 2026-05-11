import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Documents officiels — Commune d'Adja-Ouèrè",
  description: "Téléchargez les documents officiels, rapports d'activité, délibérations et textes réglementaires de la Commune d'Adja-Ouèrè.",
  openGraph: {
    title: "Documents officiels — Commune d'Adja-Ouèrè",
    description: "Documents officiels, rapports et délibérations de la Commune d'Adja-Ouèrè à télécharger.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
