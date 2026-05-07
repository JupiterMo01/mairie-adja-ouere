export const metadata = {
  title: "Politique des cookies — Commune d'Adja-Ouère",
  description: "Politique relative à l'utilisation des cookies sur le site officiel de la Commune d'Adja-Ouère.",
}

const sections = [
  {
    titre: "1. Qu'est-ce qu'un cookie ?",
    contenu: `Un cookie est un petit fichier texte enregistré sur votre ordinateur, tablette ou téléphone lors de votre visite sur un site web. Il permet au site de mémoriser vos actions et préférences (comme la langue, la taille des caractères et d'autres paramètres d'affichage) pendant une période donnée, de sorte que vous n'ayez pas à les indiquer à nouveau lorsque vous revenez sur le site ou naviguez d'une page à une autre.`,
  },
  {
    titre: "2. Quels cookies utilisons-nous ?",
    contenu: null,
    liste: [
      {
        nom: "Cookies strictement nécessaires",
        description: "Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies, certaines parties du site ne peuvent pas fonctionner.",
      },
      {
        nom: "Cookies de performance et d'analyse",
        description: "Ces cookies collectent des informations sur la façon dont les visiteurs utilisent le site (pages visitées, messages d'erreur éventuels, etc.). Ces données sont utilisées uniquement pour améliorer le fonctionnement du site. Toutes les informations collectées sont anonymisées.",
      },
      {
        nom: "Cookies de fonctionnalité",
        description: "Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre préférence de langue) et de fournir des fonctionnalités améliorées et plus personnelles. Ils peuvent également être utilisés pour fournir des services que vous avez demandés.",
      },
    ],
  },
  {
    titre: "3. Comment gérer les cookies ?",
    contenu: `Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour qu'ils les bloquent. Toutefois, si vous faites cela, vous devrez peut-être indiquer manuellement certaines préférences chaque fois que vous visiterez le site.

Pour gérer vos préférences de cookies directement depuis notre site, cliquez sur le bouton "Refuser" ou "Accepter" du bandeau qui s'affiche lors de votre première visite. Pour modifier votre choix ultérieurement, supprimez les cookies de votre navigateur pour que le bandeau réapparaisse.`,
  },
  {
    titre: "4. Comment supprimer les cookies dans votre navigateur ?",
    contenu: null,
    liste: [
      { nom: "Google Chrome", description: "Menu > Paramètres > Confidentialité et sécurité > Cookies et autres données des sites" },
      { nom: "Mozilla Firefox", description: "Menu > Options > Vie privée et sécurité > Cookies et données de sites" },
      { nom: "Microsoft Edge", description: "Menu > Paramètres > Cookies et autorisations de site" },
      { nom: "Safari (macOS/iOS)", description: "Préférences > Confidentialité > Cookies et données de sites web" },
    ],
  },
  {
    titre: "5. Conservation des données",
    contenu: `Les cookies déposés sur votre terminal ont une durée de vie limitée. Les cookies de session expirent à la fermeture de votre navigateur. Les cookies persistants sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la Commission Nationale Informatique et Libertés (CNIL).`,
  },
  {
    titre: "6. Contact",
    contenu: `Pour toute question relative à notre politique des cookies, vous pouvez nous contacter à l'adresse suivante : contact@mairie-adja-ouere.bj ou vous rendre à la Mairie d'Adja-Ouère, Département du Plateau, République du Bénin.`,
  },
]

export default function PolitiqueCookiesPage() {
  return (
    <main style={{ backgroundColor: '#F8F6F1', minHeight: '100vh' }}>
      {/* En-tête */}
      <div style={{ backgroundColor: '#0A3D2E', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Informations légales
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.15' }}>
            Politique des cookies
          </h1>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginTop: '16px', marginBottom: 0, lineHeight: '1.7', maxWidth: '600px' }}>
            Dernière mise à jour : mai 2025
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 40px 80px' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '48px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #E8E4DC' }}>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', lineHeight: '1.8', color: '#4A4A4A', margin: '0 0 40px 0' }}>
            La Commune d'Adja-Ouère s'engage à protéger votre vie privée. La présente politique explique comment nous utilisons les cookies sur notre site officiel.
          </p>

          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 16px 0', paddingBottom: '12px', borderBottom: '2px solid #C9A84C' }}>
                {section.titre}
              </h2>

              {section.contenu && (
                <div>
                  {section.contenu.split('\n\n').map((para, j) => (
                    <p key={j} style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4A4A', margin: '0 0 16px 0' }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {'liste' in section && section.liste && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                  {section.liste.map((item, j) => (
                    <div key={j} style={{ backgroundColor: '#F8F6F1', borderRadius: '12px', padding: '20px 24px', borderLeft: '4px solid #C9A84C' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: '#0A3D2E', marginBottom: '8px' }}>
                        {item.nom}
                      </div>
                      <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '14px', lineHeight: '1.7', color: '#6A6A6A', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation retour */}
        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/mentions-legales" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', border: '1px solid #0A3D2E', display: 'inline-block' }}>
            ← Mentions légales
          </a>
          <a href="/politique-confidentialite" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', border: '1px solid #0A3D2E', display: 'inline-block' }}>
            Politique de confidentialité →
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        @media (max-width: 768px) {
          div[style*="padding: '48px'"] { padding: 28px !important; }
        }
      `}</style>
    </main>
  )
}
