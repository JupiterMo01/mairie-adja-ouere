import type { Metadata } from 'next'
import Breadcrumb from '@/src/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Suivi de demande — Commune d'Adja-Ouèrè",
  description: "Suivez l'état de traitement de vos demandes administratives auprès de la Commune d'Adja-Ouèrè grâce à votre numéro de dossier.",
  openGraph: {
    title: "Suivi de demande — Commune d'Adja-Ouèrè",
    description: "Suivez l'état de vos demandes administratives à la Commune d'Adja-Ouèrè.",
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
        { label: 'Suivi de demande', href: '/e-services/suivre-ma-demande' },
      ]} />
      {children}
    </>
  )
}
