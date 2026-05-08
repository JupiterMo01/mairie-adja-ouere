import type { MetadataRoute } from 'next'

const BASE = 'https://www.mairie-adja-ouere.bj'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { url: '/',                                          priority: 1.0, changeFrequency: 'weekly' },
    { url: '/presentation',                              priority: 0.9, changeFrequency: 'monthly' },
    { url: '/presentation/commune',                      priority: 0.8, changeFrequency: 'monthly' },
    { url: '/presentation/instances',                    priority: 0.8, changeFrequency: 'monthly' },
    { url: '/presentation/arrondissements',              priority: 0.8, changeFrequency: 'monthly' },
    { url: '/presentation/sites-touristiques',           priority: 0.8, changeFrequency: 'monthly' },
    { url: '/presentation/marches',                      priority: 0.7, changeFrequency: 'monthly' },
    { url: '/presentation/gares',                        priority: 0.7, changeFrequency: 'monthly' },
    { url: '/publications',                              priority: 0.9, changeFrequency: 'weekly' },
    { url: '/publications/actualites',                   priority: 0.9, changeFrequency: 'daily' },
    { url: '/publications/projets',                      priority: 0.8, changeFrequency: 'weekly' },
    { url: '/publications/evenements',                   priority: 0.8, changeFrequency: 'weekly' },
    { url: '/publications/documents',                    priority: 0.7, changeFrequency: 'monthly' },
    { url: '/publications/photos',                       priority: 0.7, changeFrequency: 'monthly' },
    { url: '/publications/videos',                       priority: 0.7, changeFrequency: 'monthly' },
    { url: '/publications/bulletins',                    priority: 0.7, changeFrequency: 'monthly' },
    { url: '/opportunites',                              priority: 0.9, changeFrequency: 'weekly' },
    { url: '/opportunites/marches',                      priority: 0.9, changeFrequency: 'weekly' },
    { url: '/opportunites/recrutements',                 priority: 0.9, changeFrequency: 'weekly' },
    { url: '/e-services',                                priority: 0.8, changeFrequency: 'monthly' },
    { url: '/e-services/demande-stage',                  priority: 0.8, changeFrequency: 'monthly' },
    { url: '/e-services/demande-manifestion',            priority: 0.8, changeFrequency: 'monthly' },
    { url: '/e-services/denonciation',                   priority: 0.7, changeFrequency: 'monthly' },
    { url: '/e-services/participation-citoyenne',        priority: 0.7, changeFrequency: 'monthly' },
    { url: '/e-services/suivre-ma-demande',              priority: 0.7, changeFrequency: 'monthly' },
    { url: '/contact',                                   priority: 0.8, changeFrequency: 'yearly' },
    { url: '/don',                                       priority: 0.6, changeFrequency: 'yearly' },
    { url: '/mentions-legales',                          priority: 0.3, changeFrequency: 'yearly' },
    { url: '/politique-confidentialite',                 priority: 0.3, changeFrequency: 'yearly' },
    { url: '/politique-cookies',                         priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map(r => ({
    url: `${BASE}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
