'use client'

import React from 'react'

const supervision = [
  { id: 1, nom: "AGBOSSOU", prenom: "Barnabe Cyrille", role: "Maire", telephone: "+229 01 XX XX XX XX", email: "maire@mairie-adja-ouere.bj" },
  { id: 2, nom: "DOSSOU", prenom: "Francoise", role: "1er Adjoint au Maire", telephone: "+229 01 XX XX XX XX", email: "adjoint1@mairie-adja-ouere.bj" },
  { id: 3, nom: "HOUNSOU", prenom: "Gratien", role: "2eme Adjoint au Maire", telephone: "+229 01 XX XX XX XX", email: "adjoint2@mairie-adja-ouere.bj" },
  { id: 4, nom: "AMOUSSOU", prenom: "Leopold", role: "President Commission Affaires Economiques", telephone: "+229 01 XX XX XX XX", email: "commission.eco@mairie-adja-ouere.bj" },
  { id: 5, nom: "GBAGUIDI", prenom: "Martine", role: "President Commission Affaires Sociales", telephone: "+229 01 XX XX XX XX", email: "commission.social@mairie-adja-ouere.bj" },
  { id: 6, nom: "AHOSSOU", prenom: "Rodrigue", role: "President Commission Urbanisme", telephone: "+229 01 XX XX XX XX", email: "commission.urba@mairie-adja-ouere.bj" },
  { id: 7, nom: "ADANWENON", prenom: "Bernadette", role: "President Commission Environnement", telephone: "+229 01 XX XX XX XX", email: "commission.env@mairie-adja-ouere.bj" },
]

const cabinet = [
  { id: 1, nom: "LOKOSSOU", prenom: "Aristide", role: "Chef de Cabinet", telephone: "+229 01 XX XX XX XX", email: "cabinet@mairie-adja-ouere.bj" },
  { id: 2, nom: "MEDENOU", prenom: "Sandrine", role: "Chargee de Mission", telephone: "+229 01 XX XX XX XX", email: "mission@mairie-adja-ouere.bj" },
  { id: 3, nom: "AGBOTA", prenom: "Didier", role: "Charge de Protocole, Relations Publiques et Communication", telephone: "+229 01 XX XX XX XX", email: "protocole@mairie-adja-ouere.bj" },
]

const conseillers = [
  { id: 1, nom: "AGBOSSOU", prenom: "Koffi Marcel", arrondissement: "Adja-Ouere", telephone: "+229 01 XX XX XX XX", email: "k.agbossou@mairie-adja-ouere.bj" },
  { id: 2, nom: "DOSSOU", prenom: "Marie Claire", arrondissement: "Adja-Ouere", telephone: "+229 01 XX XX XX XX", email: "mc.dossou@mairie-adja-ouere.bj" },
  { id: 3, nom: "HOUNSOU", prenom: "Jean Pierre", arrondissement: "Ikpinle", telephone: "+229 01 XX XX XX XX", email: "jp.hounsou@mairie-adja-ouere.bj" },
  { id: 4, nom: "AMOUSSOU", prenom: "Fatou", arrondissement: "Ikpinle", telephone: "+229 01 XX XX XX XX", email: "f.amoussou@mairie-adja-ouere.bj" },
  { id: 5, nom: "GBAGUIDI", prenom: "Celestin", arrondissement: "Kpoulou", telephone: "+229 01 XX XX XX XX", email: "c.gbaguidi@mairie-adja-ouere.bj" },
  { id: 6, nom: "AHOSSOU", prenom: "Rosine", arrondissement: "Kpoulou", telephone: "+229 01 XX XX XX XX", email: "r.ahossou@mairie-adja-ouere.bj" },
  { id: 7, nom: "ADANWENON", prenom: "Sylvestre", arrondissement: "Masse", telephone: "+229 01 XX XX XX XX", email: "s.adanwenon@mairie-adja-ouere.bj" },
  { id: 8, nom: "HOUNKANRIN", prenom: "Alphonsine", arrondissement: "Masse", telephone: "+229 01 XX XX XX XX", email: "a.hounkanrin@mairie-adja-ouere.bj" },
  { id: 9, nom: "LOKOSSOU", prenom: "Barnabe", arrondissement: "Oko-Akare", telephone: "+229 01 XX XX XX XX", email: "b.lokossou@mairie-adja-ouere.bj" },
  { id: 10, nom: "MEDENOU", prenom: "Veronique", arrondissement: "Oko-Akare", telephone: "+229 01 XX XX XX XX", email: "v.medenou@mairie-adja-ouere.bj" },
  { id: 11, nom: "AGBOTA", prenom: "Firmin", arrondissement: "Tatonnonkon", telephone: "+229 01 XX XX XX XX", email: "f.agbota@mairie-adja-ouere.bj" },
  { id: 12, nom: "AIKPE", prenom: "Josephine", arrondissement: "Tatonnonkon", telephone: "+229 01 XX XX XX XX", email: "j.aikpe@mairie-adja-ouere.bj" },
]

const chefsArrondissement = [
  { arrondissement: "Adja-Ouere", nom: "AGBOSSOU", prenom: "Koffi", telephone: "+229 01 XX XX XX XX", email: "ca.adjaouere@mairie-adja-ouere.bj" },
  { arrondissement: "Ikpinle", nom: "DOSSOU", prenom: "Jean", telephone: "+229 01 XX XX XX XX", email: "ca.ikpinle@mairie-adja-ouere.bj" },
  { arrondissement: "Kpoulou", nom: "HOUNSOU", prenom: "Pierre", telephone: "+229 01 XX XX XX XX", email: "ca.kpoulou@mairie-adja-ouere.bj" },
  { arrondissement: "Masse", nom: "AMOUSSOU", prenom: "Marie", telephone: "+229 01 XX XX XX XX", email: "ca.masse@mairie-adja-ouere.bj" },
  { arrondissement: "Oko-Akare", nom: "GBAGUIDI", prenom: "Celestin", telephone: "+229 01 XX XX XX XX", email: "ca.okoare@mairie-adja-ouere.bj" },
  { arrondissement: "Tatonnonkon", nom: "AHOSSOU", prenom: "Rosine", telephone: "+229 01 XX XX XX XX", email: "ca.tatonnonkon@mairie-adja-ouere.bj" },
]

const chefsVillages = [
  {
    arrondissement: "Adja-Ouere",
    chefs: [
      { village: "Adja-Ouere centre", nom: "AGBOSSOU", prenom: "Koffi", telephone: "+229 01 XX XX XX XX" },
      { village: "Agbamou", nom: "DOSSOU", prenom: "Jean", telephone: "+229 01 XX XX XX XX" },
      { village: "Atchoukpa", nom: "HOUNSOU", prenom: "Pierre", telephone: "+229 01 XX XX XX XX" },
      { village: "Dekin", nom: "AMOUSSOU", prenom: "Marie", telephone: "+229 01 XX XX XX XX" },
      { village: "Gbeko", nom: "GBAGUIDI", prenom: "Celestin", telephone: "+229 01 XX XX XX XX" },
      { village: "Houinme", nom: "AHOSSOU", prenom: "Rosine", telephone: "+229 01 XX XX XX XX" },
    ]
  },
  {
    arrondissement: "Ikpinle",
    chefs: [
      { village: "Ikpinle centre", nom: "ADANWENON", prenom: "Sylvestre", telephone: "+229 01 XX XX XX XX" },
      { village: "Adjohoun", nom: "HOUNKANRIN", prenom: "Alphonsine", telephone: "+229 01 XX XX XX XX" },
      { village: "Aglogbe", nom: "LOKOSSOU", prenom: "Barnabe", telephone: "+229 01 XX XX XX XX" },
      { village: "Ahozon", nom: "MEDENOU", prenom: "Veronique", telephone: "+229 01 XX XX XX XX" },
    ]
  },
  {
    arrondissement: "Kpoulou",
    chefs: [
      { village: "Kpoulou centre", nom: "AGBOTA", prenom: "Firmin", telephone: "+229 01 XX XX XX XX" },
      { village: "Akpadanou", nom: "AIKPE", prenom: "Josephine", telephone: "+229 01 XX XX XX XX" },
      { village: "Gboji", nom: "AGBOSSOU", prenom: "Marcel", telephone: "+229 01 XX XX XX XX" },
    ]
  },
  {
    arrondissement: "Masse",
    chefs: [
      { village: "Masse centre", nom: "DOSSOU", prenom: "Francoise", telephone: "+229 01 XX XX XX XX" },
      { village: "Deme", nom: "HOUNSOU", prenom: "Gratien", telephone: "+229 01 XX XX XX XX" },
      { village: "Djigbe", nom: "AMOUSSOU", prenom: "Leopold", telephone: "+229 01 XX XX XX XX" },
      { village: "Gbave", nom: "GBAGUIDI", prenom: "Martine", telephone: "+229 01 XX XX XX XX" },
    ]
  },
  {
    arrondissement: "Oko-Akare",
    chefs: [
      { village: "Oko-Akare centre", nom: "AHOSSOU", prenom: "Rodrigue", telephone: "+229 01 XX XX XX XX" },
      { village: "Agbodji", nom: "ADANWENON", prenom: "Bernadette", telephone: "+229 01 XX XX XX XX" },
      { village: "Dekin", nom: "LOKOSSOU", prenom: "Aristide", telephone: "+229 01 XX XX XX XX" },
    ]
  },
  {
    arrondissement: "Tatonnonkon",
    chefs: [
      { village: "Tatonnonkon centre", nom: "MEDENOU", prenom: "Sandrine", telephone: "+229 01 XX XX XX XX" },
      { village: "Adjohoun", nom: "AGBOTA", prenom: "Didier", telephone: "+229 01 XX XX XX XX" },
      { village: "Aglogbe", nom: "AGBOSSOU", prenom: "Koffi", telephone: "+229 01 XX XX XX XX" },
    ]
  },
]

const secretaires = [
  { arrondissement: "Adja-Ouere", nom: "ADANWENON", prenom: "Sylvestre", telephone: "+229 01 XX XX XX XX", email: "saa.adjaouere@mairie-adja-ouere.bj" },
  { arrondissement: "Ikpinle", nom: "HOUNKANRIN", prenom: "Alphonsine", telephone: "+229 01 XX XX XX XX", email: "saa.ikpinle@mairie-adja-ouere.bj" },
  { arrondissement: "Kpoulou", nom: "LOKOSSOU", prenom: "Barnabe", telephone: "+229 01 XX XX XX XX", email: "saa.kpoulou@mairie-adja-ouere.bj" },
  { arrondissement: "Masse", nom: "MEDENOU", prenom: "Veronique", telephone: "+229 01 XX XX XX XX", email: "saa.masse@mairie-adja-ouere.bj" },
  { arrondissement: "Oko-Akare", nom: "AGBOTA", prenom: "Firmin", telephone: "+229 01 XX XX XX XX", email: "saa.okoare@mairie-adja-ouere.bj" },
  { arrondissement: "Tatonnonkon", nom: "AIKPE", prenom: "Josephine", telephone: "+229 01 XX XX XX XX", email: "saa.tatonnonkon@mairie-adja-ouere.bj" },
]

const directions = [
  { sigle: "SE", nom: "Secretariat Executif", description: "Assure la coordination administrative et technique des services de la mairie.", couleur: "#0A3D2E", directeur: { nom: "AGBOSSOU", prenom: "Koffi", telephone: "+229 01 XX XX XX XX", email: "se@mairie-adja-ouere.bj" } },
  { sigle: "DST", nom: "Direction des Services Techniques", description: "Gere les infrastructures, travaux publics et equipements communaux.", couleur: "#156840", directeur: { nom: "DOSSOU", prenom: "Jean", telephone: "+229 01 XX XX XX XX", email: "dst@mairie-adja-ouere.bj" } },
  { sigle: "DSI", nom: "Direction des Systemes d'Information", description: "Assure la gestion des systemes informatiques et numeriques de la commune.", couleur: "#1A7A4A", directeur: { nom: "HOUNSOU", prenom: "Pierre", telephone: "+229 01 XX XX XX XX", email: "dsi@mairie-adja-ouere.bj" } },
  { sigle: "DADE", nom: "Direction des Affaires Domaniales et Environnementales", description: "Gere le foncier, l'urbanisme et les questions environnementales.", couleur: "#2196F3", directeur: { nom: "AMOUSSOU", prenom: "Marie", telephone: "+229 01 XX XX XX XX", email: "dade@mairie-adja-ouere.bj" } },
  { sigle: "DDLP", nom: "Direction du Developpement Local et de la Planification", description: "Pilote la planification du developpement et la coordination des projets.", couleur: "#9C27B0", directeur: { nom: "GBAGUIDI", prenom: "Celestin", telephone: "+229 01 XX XX XX XX", email: "ddlp@mairie-adja-ouere.bj" } },
  { sigle: "DAAF", nom: "Direction des Affaires Administratives et Financieres", description: "Gere les ressources humaines, financieres et administratives.", couleur: "#FF9800", directeur: { nom: "AHOSSOU", prenom: "Rosine", telephone: "+229 01 XX XX XX XX", email: "daaf@mairie-adja-ouere.bj" } },
  { sigle: "PRMP", nom: "Personne Responsable des Marches Publics", description: "Coordonne et supervise la passation des marches publics de la commune.", couleur: "#F44336", directeur: { nom: "ADANWENON", prenom: "Sylvestre", telephone: "+229 01 XX XX XX XX", email: "prmp@mairie-adja-ouere.bj" } },
  { sigle: "CJ", nom: "Cellule Juridique", description: "Conseille et assiste la commune sur toutes les questions juridiques.", couleur: "#607D8B", directeur: { nom: "HOUNKANRIN", prenom: "Alphonsine", telephone: "+229 01 XX XX XX XX", email: "cj@mairie-adja-ouere.bj" } },
]

const avatarColors = [
  '#0A3D2E', '#156840', '#1A7A4A', '#2196F3',
  '#9C27B0', '#FF9800', '#F44336', '#607D8B',
  '#E91E63', '#00BCD4', '#795548', '#3F51B5',
]

function getColor(nom: string) {
  let hash = 0
  for (let i = 0; i < nom.length; i++) hash += nom.charCodeAt(i)
  return avatarColors[hash % avatarColors.length]
}

function Avatar({ nom, prenom, size = 64 }: { nom: string; prenom: string; size?: number }) {
  const initiales = `${(prenom[0] || '').toUpperCase()}${(nom[0] || '').toUpperCase()}`
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      backgroundColor: getColor(nom),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: size * 0.32, fontWeight: '700', color: '#FFFFFF',
      flexShrink: 0, border: '3px solid rgba(255,255,255,0.2)',
    }}>
      {initiales}
    </div>
  )
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '700', color: '#0A3D2E', margin: 0, lineHeight: '1.2' }}>
        {title}
      </h2>
    </div>
  )
}

function BtnOrganigramme({ dark = false }: { dark?: boolean }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onClick={() => window.open('/documents/organigramme-mairie-adja-ouere.pdf', '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        backgroundColor: hovered ? '#B8973B' : '#C9A84C',
        color: '#0A3D2E',
        fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700',
        padding: '13px 28px', borderRadius: '8px', border: 'none',
        cursor: 'pointer', transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
      </svg>
      Telecharger l'organigramme
    </button>
  )
}

function PersonCard({ nom, prenom, role, telephone, email }: { nom: string; prenom: string; role: string; telephone?: string; email?: string }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#0A3D2E' : '#FFFFFF',
        borderRadius: '16px', padding: '24px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(10,61,46,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
      }}
    >
      <Avatar nom={nom} prenom={prenom} size={80} />
      <div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: hovered ? '#FFFFFF' : '#0A3D2E', transition: 'color 0.3s ease', marginBottom: '4px' }}>
          {prenom} {nom}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: hovered ? '#C9A84C' : '#6A6A6A', transition: 'color 0.3s ease', lineHeight: '1.4', marginBottom: '8px' }}>
          {role}
        </div>
        {telephone && (
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: hovered ? 'rgba(255,255,255,0.7)' : '#9A9A9A', transition: 'color 0.3s ease', marginBottom: '4px' }}>
            {telephone}
          </div>
        )}
        {email && (
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.5)' : '#C9A84C', transition: 'color 0.3s ease' }}>
            {email}
          </div>
        )}
      </div>
    </div>
  )
}

function ConseillerCard({ c }: { c: typeof conseillers[0] }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#0A3D2E' : '#FFFFFF',
        borderRadius: '12px', padding: '16px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 4px 16px rgba(10,61,46,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}
    >
      <Avatar nom={c.nom} prenom={c.prenom} size={48} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '700', color: hovered ? '#FFFFFF' : '#1C1C1C', transition: 'color 0.3s ease', marginBottom: '2px' }}>
          {c.prenom} {c.nom}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: hovered ? '#C9A84C' : '#9A9A9A', transition: 'color 0.3s ease', marginBottom: '2px' }}>
          {c.arrondissement}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.6)' : '#C8C8C8', transition: 'color 0.3s ease', marginBottom: '2px' }}>
          {c.telephone}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.4)' : '#C9A84C', transition: 'color 0.3s ease' }}>
          {c.email}
        </div>
      </div>
    </div>
  )
}

function ChefArrCard({ c }: { c: typeof chefsArrondissement[0] }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#0A3D2E' : '#FFFFFF',
        borderRadius: '12px', padding: '20px',
        border: hovered ? '1px solid #C9A84C' : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 4px 16px rgba(10,61,46,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', gap: '14px',
      }}
    >
      <Avatar nom={c.nom} prenom={c.prenom} size={56} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: '600', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
          {c.arrondissement}
        </div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: hovered ? '#FFFFFF' : '#0A3D2E', transition: 'color 0.3s ease', marginBottom: '4px' }}>
          {c.prenom} {c.nom}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: hovered ? 'rgba(255,255,255,0.6)' : '#9A9A9A', transition: 'color 0.3s ease', marginBottom: '2px' }}>
          {c.telephone}
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.4)' : '#C9A84C', transition: 'color 0.3s ease' }}>
          {c.email}
        </div>
      </div>
    </div>
  )
}

function ChefsVillagesSection({ data }: { data: typeof chefsVillages[0] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E8E4DC', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '18px 24px',
          backgroundColor: open ? '#0A3D2E' : '#FFFFFF',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.2s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#C9A84C', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: '600', color: open ? '#FFFFFF' : '#0A3D2E', transition: 'color 0.2s ease' }}>
            Arrondissement de {data.arrondissement}
          </span>
          <span style={{ backgroundColor: open ? 'rgba(201,168,76,0.2)' : 'rgba(10,61,46,0.08)', color: open ? '#C9A84C' : '#0A3D2E', fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', padding: '2px 10px', borderRadius: '10px' }}>
            {data.chefs.length} villages
          </span>
        </div>
        <span style={{ color: open ? '#C9A84C' : '#9A9A9A', fontSize: '14px' }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.chefs.map((chef, i) => (
            <div
              key={chef.village}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: i % 2 === 0 ? '#F8F6F1' : '#FFFFFF',
                borderRadius: '8px', flexWrap: 'wrap', gap: '8px',
              }}
            >
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#C9A84C', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                  {chef.village}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1C1C1C' }}>
                  {chef.prenom} {chef.nom}
                </div>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#0A3D2E', fontWeight: '500' }}>
                {chef.telephone}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DirectionCard({ d }: { d: typeof directions[0] }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? d.couleur : '#FFFFFF',
        borderRadius: '16px', padding: '28px 24px',
        border: hovered ? `1px solid ${d.couleur}` : '1px solid #E8E4DC',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: hovered ? 'rgba(255,255,255,0.15)' : `${d.couleur}18`, borderRadius: '10px', padding: '10px 16px', marginBottom: '16px' }}>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '800', color: hovered ? '#FFFFFF' : d.couleur, letterSpacing: '1px', transition: 'color 0.3s ease' }}>
          {d.sigle}
        </span>
      </div>
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: '700', color: hovered ? '#FFFFFF' : '#0A3D2E', margin: '0 0 10px 0', lineHeight: '1.3', transition: 'color 0.3s ease' }}>
        {d.nom}
      </h3>
      <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '13px', lineHeight: '1.6', color: hovered ? 'rgba(255,255,255,0.8)' : '#6A6A6A', margin: '0 0 20px 0', transition: 'color 0.3s ease' }}>
        {d.description}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', backgroundColor: hovered ? 'rgba(255,255,255,0.1)' : '#F8F6F1', borderRadius: '10px', transition: 'all 0.3s ease' }}>
        <Avatar nom={d.directeur.nom} prenom={d.directeur.prenom} size={40} />
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.5)' : '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px', transition: 'color 0.3s ease' }}>
            Responsable
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '600', color: hovered ? '#FFFFFF' : '#1C1C1C', transition: 'color 0.3s ease', marginBottom: '2px' }}>
            {d.directeur.prenom} {d.directeur.nom}
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.6)' : '#9A9A9A', transition: 'color 0.3s ease', marginBottom: '2px' }}>
            {d.directeur.telephone}
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: hovered ? 'rgba(255,255,255,0.4)' : '#C9A84C', transition: 'color 0.3s ease' }}>
            {d.directeur.email}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InstancesPage() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [filtreArr, setFiltreArr] = React.useState('Tous')

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const arrondissements = ['Tous', 'Adja-Ouere', 'Ikpinle', 'Kpoulou', 'Masse', 'Oko-Akare', 'Tatonnonkon']
  const conseillersFiltres = filtreArr === 'Tous' ? conseillers : conseillers.filter(c => c.arrondissement === filtreArr)

  return (
    <main style={{ backgroundColor: '#F8F6F1' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0A3D2E', padding: isMobile ? '60px 24px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C9A84C' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: '600', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Organisation
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: '700', color: '#FFFFFF', margin: '0 0 24px 0', lineHeight: '1.1', maxWidth: '800px' }}>
            Instances et Services
          </h1>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px 0', maxWidth: '680px' }}>
            Decouvrez l'organisation politique et administrative de la Commune d'Adja-Ouere, ses instances de gouvernance et ses services techniques.
          </p>
          <BtnOrganigramme />
        </div>
      </section>

      {/* Conseil de supervision */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Gouvernance" title="Conseil de Supervision" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {supervision.map((m) => (
              <PersonCard key={m.id} nom={m.nom} prenom={m.prenom} role={m.role} telephone={m.telephone} email={m.email} />
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet du maire */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Executif" title="Cabinet du Maire" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px' }}>
            {cabinet.map((m) => (
              <PersonCard key={m.id} nom={m.nom} prenom={m.prenom} role={m.role} telephone={m.telephone} email={m.email} />
            ))}
          </div>
        </div>
      </section>

      {/* Conseil communal */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Politique" title="Conseil Communal" />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {arrondissements.map((arr) => (
              <button
                key={arr}
                onClick={() => setFiltreArr(arr)}
                style={{
                  padding: '8px 18px', borderRadius: '20px', border: '1px solid',
                  borderColor: filtreArr === arr ? '#0A3D2E' : '#E8E4DC',
                  backgroundColor: filtreArr === arr ? '#0A3D2E' : '#FFFFFF',
                  color: filtreArr === arr ? '#FFFFFF' : '#4A4A4A',
                  fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '500',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                {arr}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {conseillersFiltres.map((c) => (
              <ConseillerCard key={c.id} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Chefs d'arrondissement */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Territoire" title="Chefs d'Arrondissement" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {chefsArrondissement.map((c) => (
              <ChefArrCard key={c.arrondissement} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Chefs de villages */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Villages" title="Chefs de Villages par Arrondissement" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {chefsVillages.map((data) => (
              <ChefsVillagesSection key={data.arrondissement} data={data} />
            ))}
          </div>
        </div>
      </section>

      {/* Directions techniques */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Administration" title="Directions Techniques et Administratives" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {directions.map((d) => (
              <DirectionCard key={d.sigle} d={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Secretaires d'arrondissement */}
      <section style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '60px 24px' : '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionTitle label="Administration locale" title="Secretaires d'Arrondissement (SAA)" />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {secretaires.map((s) => (
              <ChefArrCard key={s.arrondissement} c={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Bouton organigramme bas de page */}
      <section style={{ backgroundColor: '#F8F6F1', padding: isMobile ? '40px 24px' : '60px 40px', borderTop: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '700', color: '#0A3D2E', margin: '0 0 8px 0' }}>
              Organigramme complet
            </h3>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#6A6A6A', margin: 0 }}>
              Telechargez l'organigramme officiel de la Commune d'Adja-Ouere au format PDF.
            </p>
          </div>
          <BtnOrganigramme />
        </div>
      </section>

    </main>
  )
}