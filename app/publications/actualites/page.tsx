'use client'

import React from 'react'
import Link from 'next/link'

export const actualites = [
  {
    id: 1,
    titre: "Réunion du Conseil Communal du mois de mars",
    resume: "Le conseil communal s'est réuni pour examiner les projets de développement local et voter le budget rectificatif.",
    contenu: "Le conseil communal d'Adja-Ouere s'est réuni en session ordinaire le 4 mars 2026. Au cours de cette réunion, les conseillers ont examiné plusieurs projets de développement local, notamment la construction d'un nouveau centre de santé à Ikpinle et la réhabilitation des pistes rurales de Kpoulou. Le budget rectificatif 2026 a été adopté à l'unanimité, portant les ressources disponibles à 850 millions de francs CFA.",
    categorie: "Réunion",
    date: "04 Mars 2026",
    auteur: "Service Communication",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
  },
  {
    id: 2,
    titre: "Inauguration du nouveau marché de Massè",
    resume: "Une cérémonie d'inauguration a marqué l'ouverture officielle du nouveau marché moderne de l'arrondissement de Massè.",
    contenu: "Le maire d'Adja-Ouere a procédé à l'inauguration officielle du nouveau marché de Massè en présence des autorités locales et de nombreux habitants. Ce marché moderne dispose de 120 boutiques, d'un espace de vente en plein air et d'un bloc sanitaire. Sa construction a mobilisé un investissement de 45 millions de francs CFA financé conjointement par la commune et ses partenaires au développement.",
    categorie: "Événement",
    date: "01 Mars 2026",
    auteur: "Service Communication",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  },
  {
    id: 3,
    titre: "Lancement du projet d'électrification rurale",
    resume: "La commune lance un vaste programme d'électrification des villages les plus reculés avec l'appui de partenaires techniques.",
    contenu: "Dans le cadre de sa politique de développement rural, la commune d'Adja-Ouere lance un programme ambitieux d'électrification de 15 villages isolés. Ce projet, financé à hauteur de 200 millions de francs CFA par la Banque Mondiale et le gouvernement béninois, permettra à plus de 8 000 habitants d'accéder à l'électricité d'ici fin 2026. Les travaux débuteront dans les arrondissements de Kpoulou et Tatonnonkon.",
    categorie: "Projet",
    date: "28 Fév 2026",
    auteur: "Direction du Développement Local",
    image: "https://images.unsplash.com/photo-1509390874189-f0d9b709bb41?w=1200&q=80",
  },
  {
    id: 4,
    titre: "Session budgétaire de la commune",
    resume: "Les élus locaux ont adopté le budget primitif 2026 lors d'une session extraordinaire du conseil communal.",
    contenu: "Le budget primitif 2026 de la commune d'Adja-Ouere a été adopté lors d'une session extraordinaire du conseil communal. Ce budget s'élève à 1,2 milliard de francs CFA, en hausse de 15% par rapport à 2025. Les principales priorités retenues sont l'éducation (30%), la santé (25%), les infrastructures (25%) et le développement économique (20%).",
    categorie: "Session",
    date: "25 Fév 2026",
    auteur: "Direction des Affaires Financières",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=80",
  },
  {
    id: 5,
    titre: "Reddition de compte annuelle 2025",
    resume: "Le maire présente le bilan de l'exercice 2025 devant le conseil communal et la population.",
    contenu: "Conformément aux dispositions légales sur la décentralisation, le maire d'Adja-Ouere a présenté la reddition de compte de l'exercice 2025. Ce bilan fait état d'un taux d'exécution budgétaire de 87%, de 23 projets réalisés et d'une amélioration significative des indicateurs de développement humain dans la commune. La population a salué les efforts de transparence dans la gestion des ressources publiques.",
    categorie: "Reddition de compte",
    date: "20 Fév 2026",
    auteur: "Cabinet du Maire",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80",
  },
  {
    id: 6,
    titre: "Construction de trois nouvelles salles de classe à Oko-Akare",
    resume: "La commune investit dans l'éducation avec la construction de nouvelles infrastructures scolaires dans l'arrondissement d'Oko-Akare.",
    contenu: "Dans le cadre du programme de renforcement des infrastructures éducatives, la commune d'Adja-Ouere a lancé les travaux de construction de trois nouvelles salles de classe à l'école primaire publique d'Oko-Akare. Ce projet, d'un coût de 18 millions de francs CFA, permettra d'accueillir 120 élèves supplémentaires dès la rentrée scolaire 2026-2027.",
    categorie: "Projet",
    date: "15 Fév 2026",
    auteur: "Direction des Services Techniques",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
  },
  {
    id: 7,
    titre: "Campagne de vaccination dans les six arrondissements",
    resume: "Une campagne de vaccination gratuite contre plusieurs maladies infantiles a été organisée dans toute la commune.",
    contenu: "En partenariat avec le Ministère de la Santé et l'UNICEF, la commune d'Adja-Ouere a organisé une vaste campagne de vaccination gratuite ciblant les enfants de 0 à 5 ans. En trois jours, plus de 4 200 enfants ont été vaccinés contre la poliomyélite, la rougeole et la méningite dans les six arrondissements. Le taux de couverture atteint 94%, dépassant l'objectif initial de 85%.",
    categorie: "Événement",
    date: "10 Fév 2026",
    auteur: "Service Santé",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80",
  },
  {
    id: 8,
    titre: "Communiqué : Journée de salubrité publique",
    resume: "La mairie invite tous les habitants à participer à la grande journée de nettoyage du 15 mars 2026.",
    contenu: "La Mairie d'Adja-Ouere informe la population qu'une grande journée de salubrité publique est organisée le samedi 15 mars 2026 dans tous les arrondissements. Chaque citoyen est invité à nettoyer les abords de sa maison, les marchés et les lieux publics. Des équipes municipales seront déployées pour collecter les déchets. La participation de tous est vivement souhaitée pour le bien-être collectif.",
    categorie: "Communiqué",
    date: "08 Fév 2026",
    auteur: "Cabinet du Maire",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
  },
]

const categories = ['Toutes', 'Réunion', 'Événement', 'Projet', 'Session', 'Reddition de compte', 'Communiqué']

const categorieColors: { [key: string]: string } = {
  "Réunion": "#2196F3",
  "Événement": "#9C27B0",
  "Projet": "#4CAF50",
  "Session": "#FF9800",
  "Reddition de compte": "#F44336",
  "Communiqué": "#00BCD4",
}

function ActuCard({ actu }: { actu: typeof actualites[0] }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <Link
      href={`/publications/actualites/${actu.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        boxShadow: hovered ? '0 16px 40px rgba(10,61,46,0.12)' : '0 2px 16px rgba(0,0,0,0.06)',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={actu.image}
          alt={actu.titre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          backgroundColor: categorieColors[actu.categorie] || '#0A3D2E',
          color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600',
          padding: '4px 12px', borderRadius: '20px',
          letterSpacing: '0.8px', textTransform: 'uppercase',
        }}>
          {actu.categorie}
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginBottom: '10px' }}>
          📅 {actu.date} — {actu.auteur}
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '700',
          color: '#0A3D2E', marginBottom: '12px', marginTop: 0, lineHeight: '1.3',
        }}>
          {actu.titre}
        </h3>
        <p style={{
          fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px',
          lineHeight: '1.6', color: '#6A6A6A', marginBottom: '20px', marginTop: 0, flex: 1,
        }}>
          {actu.resume}
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600',
          color: hovered ? '#C9A84C' : '#0A3D2E',
          borderTop: '1px solid #E8E4DC', paddingTop: '16px',
          transition: 'color 0.2s ease',
        }}>
          Lire la suite →
        </div>
      </div>
    </Link>
  )
}

export default function ActualitesPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtre, setFiltre] = React.useState('Toutes')
  const [recherche, setRecherche] = React.useState('')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filtrees = actualites.filter(a => {
    const matchCat = filtre === 'Toutes' || a.categorie === filtre
    const matchSearch = a.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      a.resume.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#0A3D2E',
        padding: isMobile ? '60px 24px' : '100px 40px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Publications
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: '700', color: '#FFFFFF',
            margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px',
          }}>
            Actualités de la commune
          </h1>
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '1.7', color: 'rgba(255,255,255,0.75)',
            margin: 0, maxWidth: '680px',
          }}>
            Restez informé de toutes les nouvelles, événements et décisions qui font la vie de la Commune d'Adja-Ouere.
          </p>
        </div>
      </section>

      {/* Filtres + Recherche */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '24px' : '32px 40px', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '16px',
          }}>

            {/* Filtres catégories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltre(cat)}
                  style={{
                    padding: '8px 16px', borderRadius: '20px',
                    border: '1px solid',
                    borderColor: filtre === cat ? (cat === 'Toutes' ? '#0A3D2E' : categorieColors[cat] || '#0A3D2E') : '#E8E4DC',
                    backgroundColor: filtre === cat ? (cat === 'Toutes' ? '#0A3D2E' : categorieColors[cat] || '#0A3D2E') : '#FFFFFF',
                    color: filtre === cat ? '#FFFFFF' : '#4A4A4A',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '500',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Recherche */}
            <div style={{ position: 'relative', minWidth: 0, width: '100%', maxWidth: '320px' }}>
              <span style={{
                position: 'absolute', left: '14px', top: '50%',
                transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none',
              }}>🔍</span>
              <input
                type="text"
                placeholder="Rechercher..."
                value={recherche}
                onChange={e => setRecherche(e.target.value)}
                style={{
                  width: '100%', padding: '10px 16px 10px 42px',
                  fontFamily: 'Outfit, sans-serif', fontSize: '14px',
                  border: '1px solid #E8E4DC', borderRadius: '20px',
                  outline: 'none', backgroundColor: '#F8F6F1',
                  boxSizing: 'border-box' as const,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liste actualités */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Compteur */}
          <div style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '14px',
            color: '#9A9A9A', marginBottom: '32px',
          }}>
            {filtrees.length} actualité{filtrees.length > 1 ? 's' : ''} trouvée{filtrees.length > 1 ? 's' : ''}
            {filtre !== 'Toutes' && ` dans "${filtre}"`}
            {recherche && ` pour "${recherche}"`}
          </div>

          {filtrees.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#0A3D2E', marginBottom: '8px' }}>
                Aucune actualité trouvée
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#9A9A9A' }}>
                Essayez avec d'autres critères de recherche
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}>
              {filtrees.map((actu) => (
                <ActuCard key={actu.id} actu={actu} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}