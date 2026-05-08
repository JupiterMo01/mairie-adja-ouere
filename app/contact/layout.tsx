import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact — Commune d'Adja-Ouèrè",
  description: "Contactez la Mairie de la Commune d'Adja-Ouèrè : adresse, téléphone, email et formulaire de contact. Département du Plateau, Bénin.",
  openGraph: {
    title: "Contact — Commune d'Adja-Ouèrè",
    description: "Contactez la Mairie de la Commune d'Adja-Ouèrè : adresse, téléphone, email et formulaire de contact.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
