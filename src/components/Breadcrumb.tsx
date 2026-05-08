import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E8E4DC',
        padding: '10px 40px',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <span key={item.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isLast ? (
                <span
                  aria-current="page"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#1C1C1C', fontWeight: '600' }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#156840', textDecoration: 'none', fontWeight: '500' }}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" style={{ color: '#C9A84C', fontSize: '14px', lineHeight: 1 }}>›</span>
              )}
            </span>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 767px) {
          nav[aria-label="Fil d'Ariane"] { padding: 8px 20px; }
        }
      `}</style>
    </nav>
  )
}
