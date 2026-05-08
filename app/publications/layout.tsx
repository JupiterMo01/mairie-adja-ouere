import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Publications — Commune d'Adja-Ouèrè",
  description: "Actualités, projets, événements, documents officiels, galerie photos, vidéos et bulletins d'information de la Commune d'Adja-Ouèrè.",
  openGraph: {
    title: "Publications — Commune d'Adja-Ouèrè",
    description: "Actualités, projets, événements, documents officiels et bulletins d'information de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
