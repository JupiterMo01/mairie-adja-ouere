import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Se désabonner — Commune d'Adja-Ouèrè",
  description: "Gérez votre abonnement à la newsletter de la Commune d'Adja-Ouèrè.",
  openGraph: {
    title: "Se désabonner — Commune d'Adja-Ouèrè",
    description: "Gérez votre abonnement à la newsletter de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
