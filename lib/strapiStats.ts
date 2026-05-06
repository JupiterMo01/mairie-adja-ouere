const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const TOKEN = process.env.STRAPI_TOKEN || ''

async function fetchCount(collection: string, filters?: string): Promise<number> {
  try {
    const url = `${STRAPI}/api/${collection}?pagination[pageSize]=0${filters ? `&${filters}` : ''}`
    const res = await fetch(url, {
      headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
      next: { revalidate: 300 },
    })
    if (!res.ok) return 0
    const data = await res.json()
    return data?.meta?.pagination?.total ?? 0
  } catch {
    return 0
  }
}

export async function fetchPublicationsStats() {
  const [actualites, projets, evenements, documents, bulletins, photos, videos] = await Promise.all([
    fetchCount('actualites'),
    fetchCount('projets'),
    fetchCount('evenements'),
    fetchCount('documents'),
    fetchCount('bulletins'),
    fetchCount('galerie-photos'),
    fetchCount('videos'),
  ])
  const total = actualites + projets + evenements + documents + bulletins + photos + videos
  return { actualites, projets, evenements, documents, bulletins, photos, videos, total }
}

export async function fetchOpportunitesStats() {
  const [marchesActifs, marchesTotal, recrutements] = await Promise.all([
    fetchCount('marches-publics', 'filters[statut][$eq]=actif'),
    fetchCount('marches-publics'),
    fetchCount('recrutements', 'filters[statut][$eq]=ouvert'),
  ])
  return { marchesActifs, marchesTotal, recrutements }
}
