import { MapPin, Phone } from 'lucide-react'
import logo from "../assets/logo.webp"

const quickLinks = ['Home', 'Categories', 'Offers', 'Gallery', 'Contact']

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tsbhypermarket?igsh=MW50cmN6dmF5c2t1cQ==',
    hoverBg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591332710455',
    hoverBg: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', paddingTop: '4rem', paddingBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand */}
          <div className="col-sm-6 col-md-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img
                src={logo}
                alt="TSB"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                  backgroundColor: "white",
                  padding: "4px"
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
                TSB Hypermarket
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
              Your one-stop shop for all daily needs. Quality products at affordable prices in Polur, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                <MapPin style={{ width: 16, height: 16, marginTop: '0.125rem', flexShrink: 0 }} />
                No.10,Railway Station Road, Polur, Tamil Nadu - 606 803
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                <Phone style={{ width: 16, height: 16, flexShrink: 0 }} />
                72009 95111 / 72009 95222
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(({ label, href, hoverBg, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`footer-social-btn footer-social-${label.toLowerCase()}`}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '0.625rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = hoverBg
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)'
                    e.currentTarget.style.border = '1px solid transparent'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '0.75rem', fontFamily: 'var(--font-body)' }}>
              Follow us for latest offers & updates
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
            © {currentYear} TSB Hypermarket, Polur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

