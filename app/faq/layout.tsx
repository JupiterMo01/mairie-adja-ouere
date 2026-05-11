import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Foire aux questions — Commune d'Adja-Ouèrè",
  description: "Réponses aux questions fréquentes sur les démarches administratives, marchés publics, recrutements et services de la Commune d'Adja-Ouèrè.",
  openGraph: {
    title: "Foire aux questions — Commune d'Adja-Ouèrè",
    description: "Réponses aux questions fréquentes sur les services de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
