import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// ✅ FASTEST IMAGE LOADING METHOD (Vite Optimized)

// Ground Floor Images
const groundFloorModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

// First Floor Images
const firstFloorModules = import.meta.glob('../assets/gallery/firstfloor/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

// Convert to arrays
const groundFloorImages = Object.values(groundFloorModules).map((module, i) => ({
  src: module.default,
  alt: `Ground Floor ${i + 1}`,
}))

const firstFloorImages = Object.values(firstFloorModules).map((module, i) => ({
  src: module.default,
  alt: `First Floor ${i + 1}`,
}))

const GallerySection = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  // ✅ Intersection Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1, rootMargin: '-80px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // ✅ Preload first visible images for instant load
  useEffect(() => {
    groundFloorImages.slice(0, 6).forEach((img) => {
      const preload = new Image()
      preload.src = img.src
    })

    firstFloorImages.slice(0, 6).forEach((img) => {
      const preload = new Image()
      preload.src = img.src
    })
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--card)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            style={{
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Our Store
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              color: 'var(--foreground)',
              marginTop: '0.5rem',
            }}
          >
            Store <span className="text-gradient">Gallery</span>
          </h2>
        </div>

        {/* Boxes */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* ================= GROUND FLOOR ================= */}
          <Link
            to="/gallery#ground-floor"
            className="gallery-box"
            style={{
              flex: '1 1 45%',
              minWidth: '300px',
              maxWidth: '550px',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.5s ease',
              textDecoration: 'none',
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: 'var(--primary)',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <h3 style={{ color: '#fff', margin: 0 }}>Ground Floor</h3>
            </div>

            {/* Preview */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                padding: '1rem',
              }}
            >
              {groundFloorImages.slice(0, 6).map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    aspectRatio: '1',
                    backgroundColor: '#f3f3f3',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    fetchPriority={i < 3 ? 'high' : 'auto'}
                    decoding="async"
                    width="300"
                    height="300"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: '0.5s',
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                color: 'var(--primary)',
              }}
            >
              Click to view gallery →
            </div>
          </Link>

          {/* ================= FIRST FLOOR ================= */}
          <Link
            to="/gallery#first-floor"
            className="gallery-box"
            style={{
              flex: '1 1 45%',
              minWidth: '300px',
              maxWidth: '550px',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.5s ease 0.1s',
              textDecoration: 'none',
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: 'var(--primary)',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <h3 style={{ color: '#fff', margin: 0 }}>First Floor</h3>
            </div>

            {/* Preview */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                padding: '1rem',
              }}
            >
              {firstFloorImages.slice(0, 6).map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    aspectRatio: '1',
                    backgroundColor: '#f3f3f3',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    fetchPriority={i < 3 ? 'high' : 'auto'}
                    decoding="async"
                    width="300"
                    height="300"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: '0.5s',
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                color: 'var(--primary)',
              }}
            >
              Click to view gallery →
            </div>
          </Link>
        </div>
      </div>

      {/* Hover Effects */}
      <style>{`
        .gallery-box:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }

        .gallery-box:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  )
}

export default GallerySection