'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LABELS: Record<string, string> = {
  publications: 'Publications',
  actualites: 'Actualités',
  'reddition-de-compte': 'Reddition de compte',
  projets: 'Projets',
  evenements: 'Événements',
  documents: 'Documents',
  photos: 'Galerie photos',
  videos: 'Vidéos',
  bulletins: "Bulletins d'information",
  presentation: 'Présentation',
  commune: 'La commune',
  instances: 'Instances et Services',
  arrondissements: 'Arrondissements',
  'sites-touristiques': 'Sites touristiques',
  gares: 'Gares routières',
  opportunites: 'Opportunités',
  recrutements: 'Recrutements',
  'e-services': 'E-Services',
  'demande-stage': 'Demande de stage',
  'demande-manifestion': 'Autorisation manifestation',
  denonciation: 'Dénonciation',
  'participation-citoyenne': 'Participation citoyenne',
  'suivre-ma-demande': 'Suivre ma demande',
  contact: 'Contact',
  'mentions-legales': 'Mentions légales',
  'politique-cookies': 'Politique des cookies',
  'politique-confidentialite': 'Politique de confidentialité',
  don: 'Faire un don',
  'se-desabonner': 'Se désabonner',
}

function getLabel(seg: string, path: string): string {
  if (seg === 'marches') {
    return path.includes('presentation') ? 'Nos marchés' : 'Marchés publics'
  }
  return LABELS[seg] || seg
}

export default function AutoBreadcrumb() {
  const pathname = usePathname()

  const segments = pathname.split('/').filter(Boolean)

  const items = pathname === '/'
    ? [{ label: 'Accueil', href: '/' }, { label: 'Accueil', href: '/' }]
    : [
        { label: 'Accueil', href: '/' },
        ...segments
          .map((seg, idx) => ({
            seg,
            label: getLabel(seg, pathname),
            href: '/' + segments.slice(0, idx + 1).join('/'),
          }))
          .filter(item => !/^\d+$/.test(item.seg))
          .map(({ label, href }) => ({ label, href })),
      ]

  return (
    <nav aria-label="Fil d'Ariane">
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isLast ? (
                <span aria-current="page" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#1C1C1C', fontWeight: '600' }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}>
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden="true" style={{ color: '#C9A84C', fontSize: '14px', lineHeight: '1' }}>›</span>}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
