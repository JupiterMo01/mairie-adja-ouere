'use client'

import React from 'react'
import Link from 'next/link'

const categories = [
  {
    id: 'demarches',
    titre: 'Démarches administratives',
    icon: '📋',
    questions: [
      {
        q: "Comment obtenir un extrait d'acte de naissance ?",
        r: "Vous pouvez retirer votre extrait d'acte de naissance directement au service de l'état civil de la Mairie d'Adja-Ouèrè, du lundi au vendredi de 8h à 16h. Munissez-vous de votre pièce d'identité et du numéro de l'acte si vous le connaissez. Le délai de délivrance est généralement de 24 à 48h.",
      },
      {
        q: "Comment demander un certificat de résidence ?",
        r: "Le certificat de résidence est délivré par le chef d'arrondissement ou de village de votre lieu de résidence. Vous devez vous présenter avec votre pièce d'identité et un justificatif de domicile (facture d'eau, d'électricité ou attestation du voisinage).",
      },
      {
        q: "Quels documents fournir pour une demande de stage ?",
        r: "Pour une demande de stage à la Mairie, vous devez fournir : une lettre de motivation, votre CV, une copie de votre carte d'étudiant ou de votre dernier diplôme, et une pièce d'identité. Vous pouvez soumettre votre dossier en ligne via la section E-Services ou directement au secrétariat de la mairie.",
      },
      {
        q: "Comment obtenir une autorisation de manifestation ?",
        r: "Vous pouvez déposer votre demande d'autorisation de manifestation en ligne via notre formulaire E-Services, ou en vous présentant au secrétariat de la mairie. Le dossier doit être déposé au moins 15 jours avant la date prévue de l'événement. Des frais administratifs sont applicables selon le type d'événement.",
      },
    ],
  },
  {
    id: 'marches',
    titre: 'Marchés publics',
    icon: '🏗️',
    questions: [
      {
        q: "Comment consulter les appels d'offres en cours ?",
        r: "Tous les avis de marchés publics actifs sont publiés sur la page Marchés publics de ce site. Vous y trouverez les références, les types de marchés, les dates limites de soumission et les contacts pour retirer les dossiers d'appel d'offres.",
      },
      {
        q: "Comment retirer un Dossier d'Appel d'Offres (DAO) ?",
        r: "Le DAO peut être retiré physiquement au secrétariat de la Personne Responsable des Marchés Publics (PRMP) à la Mairie, sur présentation d'une pièce d'identité. Des frais de tirage peuvent s'appliquer. Certains DAO peuvent être téléchargés directement depuis la fiche du marché sur ce site.",
      },
      {
        q: "Quel est le délai légal de dépôt des offres ?",
        r: "Le délai de dépôt est précisé dans chaque avis de marché. En règle générale, il est d'au moins 30 jours pour les marchés de travaux et 21 jours pour les fournitures et services. Les offres doivent être déposées sous pli fermé au secrétariat de la mairie avant la date et l'heure limites indiquées.",
      },
      {
        q: "Comment contester les résultats d'attribution d'un marché ?",
        r: "Tout soumissionnaire ayant des griefs fondés concernant l'attribution d'un marché peut adresser un recours écrit à la PRMP dans un délai de 10 jours ouvrables suivant la publication des résultats. En cas de non-réponse satisfaisante, le recours peut être porté devant l'Autorité de Régulation des Marchés Publics (ARMP) du Bénin.",
      },
    ],
  },
  {
    id: 'recrutements',
    titre: 'Recrutements',
    icon: '💼',
    questions: [
      {
        q: "Comment postuler à un poste à la mairie ?",
        r: "Consultez les offres d'emploi disponibles sur la page Recrutements. Pour chaque poste, un dossier de candidature est à constituer selon les pièces exigées dans l'annonce. Déposez votre dossier complet au secrétariat de la mairie avant la date limite.",
      },
      {
        q: "Y a-t-il des concours de la fonction publique locale ?",
        r: "Certains postes font l'objet de concours organisés en coordination avec le Ministère de la Décentralisation et de la Gouvernance Locale. Les annonces sont publiées sur ce site et affichées à la mairie. Suivez la page Recrutements et abonnez-vous à notre newsletter pour ne rien manquer.",
      },
      {
        q: "Puis-je envoyer une candidature spontanée ?",
        r: "Oui. Vous pouvez déposer une candidature spontanée au secrétariat général de la mairie. Votre dossier sera conservé et examiné lors des prochains recrutements correspondant à votre profil. Incluez un CV à jour, une lettre de motivation et vos diplômes.",
      },
    ],
  },
  {
    id: 'participation',
    titre: 'Participation citoyenne',
    icon: '🌱',
    questions: [
      {
        q: "Comment soumettre une idée ou une suggestion à la commune ?",
        r: "Utilisez notre formulaire de Participation citoyenne disponible dans la section E-Services. Décrivez votre idée, l'arrondissement concerné et le domaine d'intervention. Toutes les suggestions sont examinées par les services compétents de la mairie.",
      },
      {
        q: "Comment signaler un problème dans ma localité ?",
        r: "Vous pouvez signaler tout problème (infrastructure dégradée, nuisance, irrégularité) via le formulaire de Dénonciation dans la section E-Services. Vous pouvez rester anonyme si vous le souhaitez. Chaque signalement est traité de façon confidentielle.",
      },
      {
        q: "Comment assister aux séances du conseil communal ?",
        r: "Les séances ordinaires et extraordinaires du conseil communal sont en principe publiques. Les dates et ordres du jour sont annoncés à la mairie et publiés sur ce site dans la section Événements. Tout citoyen peut y assister en se présentant à la salle des délibérations.",
      },
    ],
  },
  {
    id: 'contact',
    titre: 'Contact et horaires',
    icon: '📞',
    questions: [
      {
        q: "Quels sont les horaires d'ouverture de la mairie ?",
        r: "La Mairie d'Adja-Ouèrè est ouverte du lundi au vendredi de 8h00 à 16h00, sans interruption. Elle est fermée les samedis, dimanches et jours fériés nationaux.",
      },
      {
        q: "Comment contacter la mairie par email ou téléphone ?",
        r: "Vous pouvez nous contacter par email à contact@mairie-adja-ouere.bj ou par téléphone au +229 XX XX XX XX. Vous pouvez également utiliser le formulaire de contact disponible sur ce site.",
      },
      {
        q: "Où se trouve la mairie d'Adja-Ouèrè ?",
        r: "La Mairie d'Adja-Ouèrè est située au centre-ville d'Adja-Ouèrè, chef-lieu de la commune, dans le Département du Plateau, République du Bénin. Elle est accessible depuis Porto-Novo (environ 70 km) et depuis Pobè (environ 20 km).",
      },
    ],
  },
]

export default function FAQPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [openQuestion, setOpenQuestion] = React.useState<string | null>(null)
  const [activeCategory, setActiveCategory] = React.useState(categories[0].id)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const toggle = (key: string) => setOpenQuestion(prev => prev === key ? null : key)

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Aide
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Foire aux questions
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur les services, démarches et fonctionnement de la Commune d&apos;Adja-Ouèrè.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: isMobile ? '48px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '260px 1fr', gap: '48px', alignItems: 'start' }}>

          {/* Navigation catégories — sticky */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: '90px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8E4DC', padding: '20px', overflow: 'hidden' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '700', color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                  Catégories
                </div>
                {categories.map(cat => (
                  <a key={cat.id} href={`#${cat.id}`} onClick={() => setActiveCategory(cat.id)} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '9px 10px 9px 12px', borderRadius: '8px',
                    marginBottom: '4px', textDecoration: 'none',
                    backgroundColor: activeCategory === cat.id ? 'rgba(10,61,46,0.07)' : 'transparent',
                    borderLeft: `3px solid ${activeCategory === cat.id ? '#C9A84C' : 'transparent'}`,
                    transition: 'all 0.2s ease',
                  }}>
                    <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: activeCategory === cat.id ? '700' : '400', color: activeCategory === cat.id ? '#0A3D2E' : '#6A6A6A' }}>
                      {cat.titre}
                    </span>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '16px', backgroundColor: 'rgba(10,61,46,0.06)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(10,61,46,0.12)' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#0A3D2E', marginBottom: '8px' }}>💬 Pas trouvé ?</div>
                <Link href="/contact" style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}>
                  Contactez-nous →
                </Link>
              </div>
            </div>
          )}

          {/* Accordéons par catégorie */}
          <div>
            {categories.map(cat => (
              <div key={cat.id} id={cat.id} style={{ marginBottom: '40px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '2px solid #C9A84C' }}>
                  <span style={{ fontSize: '24px' }}>{cat.icon}</span>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700', color: '#0A3D2E', margin: 0 }}>
                    {cat.titre}
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.questions.map((item, idx) => {
                    const key = `${cat.id}-${idx}`
                    const isOpen = openQuestion === key
                    return (
                      <div key={key} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: `1px solid ${isOpen ? '#C9A84C' : '#E8E4DC'}`, overflow: 'hidden', transition: 'border-color 0.2s ease' }}>
                        <button
                          onClick={() => toggle(key)}
                          style={{
                            width: '100%', textAlign: 'left', padding: '18px 20px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
                            background: 'none', border: 'none', cursor: 'pointer',
                          }}
                        >
                          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '600', color: '#0A3D2E', lineHeight: '1.4' }}>
                            {item.q}
                          </span>
                          <span style={{ fontSize: '18px', color: '#C9A84C', flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', display: 'inline-block' }}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div style={{ padding: '0 20px 20px', borderTop: '1px solid #F0EDE6' }}>
                            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: '16px 0 0 0' }}>
                              {item.r}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Bloc contact */}
            <div style={{ padding: '32px', backgroundColor: '#0A3D2E', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 12px 0' }}>
                Vous n&apos;avez pas trouvé votre réponse ?
              </h3>
              <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: '0 0 24px 0', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                Notre équipe est disponible pour répondre à toutes vos questions du lundi au vendredi de 8h à 16h.
              </p>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '13px 28px', borderRadius: '8px', backgroundColor: '#C9A84C', color: '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
                  Nous contacter →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
