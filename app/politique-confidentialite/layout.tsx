import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Politique de confidentialité — Commune d'Adja-Ouèrè",
  description: "Comment la Commune d'Adja-Ouèrè collecte, utilise et protège vos données personnelles conformément à la loi béninoise.",
  openGraph: {
    title: "Politique de confidentialité — Commune d'Adja-Ouèrè",
    description: "Comment la Commune d'Adja-Ouèrè collecte, utilise et protège vos données personnelles.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
