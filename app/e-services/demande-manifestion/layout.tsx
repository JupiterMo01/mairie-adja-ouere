import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Autorisation de manifestation — Commune d'Adja-Ouèrè",
  description: "Demandez une autorisation de manifestation ou d'événement à la Commune d'Adja-Ouèrè en ligne. Formulaire officiel et paiement sécurisé.",
  openGraph: {
    title: "Autorisation de manifestation — Commune d'Adja-Ouèrè",
    description: "Demande d'autorisation de manifestation auprès de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
