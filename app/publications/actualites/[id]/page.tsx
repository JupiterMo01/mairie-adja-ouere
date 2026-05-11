'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Fichier {
  nom: string
  type: string
  taille: string
  url: string
}

const actualites = [
  {
    id: 1,
    titre: "Réunion du Conseil Communal du mois de mars",
    resume: "Le conseil communal s'est réuni pour examiner les projets de développement local et voter le budget rectificatif.",
    contenu: "Le conseil communal d'Adja-Ouere s'est réuni en session ordinaire le 4 mars 2026. Au cours de cette réunion, les conseillers ont examiné plusieurs projets de développement local, notamment la construction d'un nouveau centre de santé à Ikpinle et la réhabilitation des pistes rurales de Kpoulou. Le budget rectificatif 2026 a été adopté à l'unanimité, portant les ressources disponibles à 850 millions de francs CFA.",
    categorie: "Réunion",
    date: "04 Mars 2026",
    auteur: "Service Communication",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
    fichiers: [
      { nom: "Procès-verbal session mars 2026.pdf", type: "PDF", taille: "1.2 Mo", url: "#" },
      { nom: "Budget rectificatif 2026.pdf", type: "PDF", taille: "540 Ko", url: "#" },
    ] as Fichier[],
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
    fichiers: [
      { nom: "Note de présentation projet électrification.pdf", type: "PDF", taille: "2.1 Mo", url: "#" },
    ] as Fichier[],
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
    fichiers: [
      { nom: "Budget primitif 2026 — version adoptée.pdf", type: "PDF", taille: "3.4 Mo", url: "#" },
      { nom: "Annexes budgétaires 2026.pdf", type: "PDF", taille: "1.8 Mo", url: "#" },
      { nom: "Délibération n°01-2026.pdf", type: "PDF", taille: "280 Ko", url: "#" },
    ] as Fichier[],
  },
  {
    id: 5,
    titre: "Reddition de compte annuelle 2025",
    resume: "Le maire présente le bilan de l'exercice 2025 devant le conseil communal et la population.",
    contenu: "Conformément aux dispositions légales sur la décentralisation, le maire d'Adja-Ouere a présenté la reddition de compte de l'exercice 2025. Ce bilan fait état d'un taux d'exécution budgétaire de 87%, de 23 projets réalisés et d'une amélioration significative des indicateurs de développement humain dans la commune.",
    categorie: "Reddition de compte",
    date: "20 Fév 2026",
    auteur: "Cabinet du Maire",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80",
    fichiers: [
      { nom: "Rapport de reddition de compte 2025.pdf", type: "PDF", taille: "5.6 Mo", url: "#" },
    ] as Fichier[],
  },
  {
    id: 6,
    titre: "Construction de trois nouvelles salles de classe à Oko-Akare",
    resume: "La commune investit dans l'éducation avec la construction de nouvelles infrastructures scolaires.",
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
    contenu: "En partenariat avec le Ministère de la Santé et l'UNICEF, la commune d'Adja-Ouere a organisé une vaste campagne de vaccination gratuite ciblant les enfants de 0 à 5 ans. En trois jours, plus de 4 200 enfants ont été vaccinés contre la poliomyélite, la rougeole et la méningite dans les six arrondissements.",
    categorie: "Événement",
    date: "10 Fév 2026",
    auteur: "Service Santé",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80",
  },
  {
    id: 8,
    titre: "Communiqué : Journée de salubrité publique",
    resume: "La mairie invite tous les habitants à participer à la grande journée de nettoyage du 15 mars 2026.",
    contenu: "La Mairie d'Adja-Ouere informe la population qu'une grande journée de salubrité publique est organisée le samedi 15 mars 2026 dans tous les arrondissements. Chaque citoyen est invité à nettoyer les abords de sa maison, les marchés et les lieux publics.",
    categorie: "Communiqué",
    date: "08 Fév 2026",
    auteur: "Cabinet du Maire",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
    fichiers: [
      { nom: "Communiqué officiel — Journée salubrité 2026.pdf", type: "PDF", taille: "180 Ko", url: "#" },
    ] as Fichier[],
  },
]

const categorieColors: { [key: string]: string } = {
  "Réunion": "#2196F3",
  "Événement": "#9C27B0",
  "Projet": "#4CAF50",
  "Session": "#FF9800",
  "Reddition de compte": "#F44336",
  "Communiqué": "#00BCD4",
}

export default function ActualiteDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const actu = actualites.find(a => a.id === id)
  const autres = actualites.filter(a => a.id !== id).slice(0, 3)

  if (!actu) return (
    <main style={{ backgroundColor: '#F8F6F1', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>😕</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#0A3D2E' }}>
          Actualité introuvable
        </h2>
        <Link href="/publications/actualites" style={{ color: '#C9A84C', fontFamily: 'Outfit, sans-serif' }}>
          ← Retour aux actualités
        </Link>
      </div>
    </main>
  )

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>
      <style>{`
        .actu-content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .actu-content-grid { grid-template-columns: 1fr; gap: 40px; }
          .actu-sidebar { display: none; }
        }
      `}</style>

      {/* Image hero */}
      <div style={{
        height: isMobile ? '300px' : '500px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={actu.image}
          alt={actu.titre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,61,46,0.3) 0%, rgba(10,61,46,0.8) 100%)',
        }} />
        {/* Fil d'ariane */}
        <div style={{
          position: 'absolute', top: '24px', left: isMobile ? '24px' : '40px',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <Link href="/" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Accueil
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
          <Link href="/publications/actualites" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Actualités
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#C9A84C' }}>
            {actu.categorie}
          </span>
        </div>
        {/* Titre sur image */}
        <div style={{
          position: 'absolute', bottom: '40px',
          left: isMobile ? '24px' : '40px', right: isMobile ? '24px' : '40px',
          maxWidth: '900px',
        }}>
          <span style={{
            backgroundColor: categorieColors[actu.categorie] || '#0A3D2E',
            color: '#FFFFFF', fontFamily: 'Outfit, sans-serif',
            fontSize: '11px', fontWeight: '600',
            padding: '4px 14px', borderRadius: '20px',
            letterSpacing: '1px', textTransform: 'uppercase',
            display: 'inline-block', marginBottom: '16px',
          }}>
            {actu.categorie}
          </span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 56px)',
            fontWeight: '700', color: '#FFFFFF',
            margin: 0, lineHeight: '1.2',
          }}>
            {actu.titre}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="actu-content-grid">

            {/* Article */}
            <div>
              {/* Meta */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '20px',
                marginBottom: '32px', paddingBottom: '24px',
                borderBottom: '1px solid #E8E4DC',
              }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A' }}>
                  📅 <strong>{actu.date}</strong>
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#6A6A6A' }}>
                  ✍️ <strong>{actu.auteur}</strong>
                </div>
              </div>

              {/* Résumé */}
              <p style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '18px', lineHeight: '1.8',
                color: '#0A3D2E', fontWeight: '600',
                margin: '0 0 24px 0',
                padding: '20px 24px',
                backgroundColor: '#FFFFFF',
                borderLeft: '4px solid #C9A84C',
                borderRadius: '0 8px 8px 0',
              }}>
                {actu.resume}
              </p>

              {/* Contenu */}
              <div style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '16px', lineHeight: '1.9',
                color: '#4A4A4A',
              }}>
                {actu.contenu.split('\n').map((para, i) => (
                  <p key={i} style={{ margin: '0 0 20px 0' }}>{para}</p>
                ))}
              </div>

              {/* Fichiers joints */}
              {actu.fichiers && actu.fichiers.length > 0 && (
                <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #E8E4DC' }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: '22px',
                    fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <span style={{ fontSize: '20px' }}>📎</span>
                    Fichiers joints
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {actu.fichiers.map((fichier, idx) => (
                      <a
                        key={idx}
                        href={fichier.url}
                        download
                        style={{
                          display: 'flex', alignItems: 'center', gap: '14px',
                          backgroundColor: '#FFFFFF', border: '1px solid #E8E4DC',
                          borderRadius: '10px', padding: '14px 18px',
                          textDecoration: 'none', transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = '#C9A84C'
                          e.currentTarget.style.backgroundColor = '#FFFDF7'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = '#E8E4DC'
                          e.currentTarget.style.backgroundColor = '#FFFFFF'
                        }}
                      >
                        <div style={{
                          width: '40px', height: '40px', borderRadius: '8px',
                          backgroundColor: 'rgba(10,61,46,0.08)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, fontSize: '18px',
                        }}>
                          {fichier.type === 'PDF' ? '📄' : fichier.type === 'Excel' ? '📊' : '📁'}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontFamily: 'Outfit, sans-serif', fontSize: '14px',
                            fontWeight: '600', color: '#1C1C1C',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>
                            {fichier.nom}
                          </div>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#9A9A9A', marginTop: '2px' }}>
                            {fichier.type} · {fichier.taille}
                          </div>
                        </div>
                        <div style={{
                          flexShrink: 0, backgroundColor: '#0A3D2E', color: '#FFFFFF',
                          fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600',
                          padding: '6px 14px', borderRadius: '20px',
                          display: 'flex', alignItems: 'center', gap: '6px',
                        }}>
                          ⬇ Télécharger
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Bouton retour */}
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #E8E4DC' }}>
                <Link
                  href="/publications/actualites"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#0A3D2E', color: '#FFFFFF',
                    fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600',
                    padding: '12px 24px', borderRadius: '8px', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ← Retour aux actualités
                </Link>
              </div>
            </div>

            {/* Sidebar — autres actualités */}
            <div className="actu-sidebar" style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: '24px',
                fontWeight: '700', color: '#0A3D2E',
                margin: '0 0 24px 0', paddingBottom: '16px',
                borderBottom: '2px solid #C9A84C',
              }}>
                Autres actualités
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {autres.map((a) => (
                  <Link
                    key={a.id}
                    href={`/publications/actualites/${a.id}`}
                    style={{
                      display: 'flex', gap: '14px',
                      backgroundColor: '#FFFFFF', borderRadius: '12px',
                      padding: '14px', textDecoration: 'none',
                      border: '1px solid #E8E4DC',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#C9A84C'
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E8E4DC'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <img
                      src={a.image}
                      alt={a.titre}
                      style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{
                        backgroundColor: categorieColors[a.categorie] || '#0A3D2E',
                        color: '#FFFFFF', fontFamily: 'Outfit, sans-serif',
                        fontSize: '10px', fontWeight: '600',
                        padding: '2px 8px', borderRadius: '10px',
                        display: 'inline-block', marginBottom: '6px',
                        textTransform: 'uppercase',
                      }}>
                        {a.categorie}
                      </div>
                      <div style={{
                        fontFamily: 'Cormorant Garamond, serif', fontSize: '15px',
                        fontWeight: '700', color: '#0A3D2E', lineHeight: '1.3',
                      }}>
                        {a.titre}
                      </div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#9A9A9A', marginTop: '4px' }}>
                        {a.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}