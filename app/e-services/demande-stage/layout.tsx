import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Demande de stage — Commune d'Adja-Ouèrè",
  description: "Soumettez votre demande de stage à la Mairie de la Commune d'Adja-Ouèrè en ligne. Renseignez vos informations et vos dates souhaitées.",
  openGraph: {
    title: "Demande de stage — Commune d'Adja-Ouèrè",
    description: "Formulaire de demande de stage à la Mairie de la Commune d'Adja-Ouèrè.",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Commune d'Adja-Ouèrè",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'E-Services', href: '/e-services' },
        { label: 'Demande de stage', href: '/e-services/demande-stage' },
      ]} />
      {children}
    </>
  )
}
