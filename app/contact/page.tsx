import SectionContact from '@/src/components/SectionContact'

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#0A3D2E',
        padding: '100px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
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
              Contact
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: '700', color: '#FFFFFF',
            margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px',
          }}>
            Contactez-nous
          </h1>
          <p style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '1.7', color: 'rgba(255,255,255,0.75)',
            margin: 0, maxWidth: '680px',
          }}>
            Notre equipe est a votre disposition pour repondre a toutes vos questions et vous accompagner dans vos demarches.
          </p>
        </div>
      </section>

      {/* Formulaire de contact — reutilisation du composant */}
      <SectionContact />

    </main>
  )
}