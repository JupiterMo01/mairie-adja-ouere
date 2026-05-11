import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sites touristiques — Commune d'Adja-Ouèrè",
  description: "Forêts sacrées, collines panoramiques, mare aux hippopotames, villages traditionnels... Explorez le patrimoine naturel et culturel d'Adja-Ouèrè.",
  openGraph: {
    title: "Sites touristiques — Commune d'Adja-Ouèrè",
    description: "Patrimoine naturel et culturel de la Commune d'Adja-Ouèrè : forêts sacrées, collines et sites historiques.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
