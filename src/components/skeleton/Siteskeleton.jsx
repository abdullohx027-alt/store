import "./SiteSkeleton.css"

const repeat = (n) => Array.from({ length: n })

/* ---------- header ---------- */
export const HeaderSkeleton = () => (
  <header className="ss-header">
    <div className="ss-box ss-logo"></div>

    <div className="ss-nav">
      {repeat(4).map((_, i) => (
        <div className="ss-box ss-nav-item" key={i}></div>
      ))}
    </div>

    <div className="ss-header-right">
      <div className="ss-box ss-search"></div>
      <div className="ss-box ss-icon"></div>
      <div className="ss-box ss-icon"></div>
    </div>
  </header>
)

/* ---------- hero ---------- */
export const HeroSkeleton = () => (
  <section className="ss-hero">
    <div className="ss-box ss-banner"></div>
  </section>
)

/* ---------- about (Our Products) ---------- */
export const AboutSkeleton = () => (
  <section className="ss-about">
    <div className="ss-box ss-label"></div>

    <div className="ss-grid">
      {repeat(8).map((_, i) => (
        <div key={i}>
          <div className="ss-box ss-card-img"></div>
          <div className="ss-box ss-line"></div>
          <div className="ss-box ss-line short"></div>
        </div>
      ))}
    </div>

    <div className="ss-btn-wrap">
      <div className="ss-box ss-btn"></div>
    </div>

    <div className="ss-services">
      {repeat(3).map((_, i) => (
        <div className="ss-service" key={i}>
          <div className="ss-box ss-service-icon"></div>
          <div className="ss-box ss-service-title"></div>
          <div className="ss-box ss-service-text"></div>
        </div>
      ))}
    </div>
  </section>
)

/* ---------- footer ---------- */
export const FooterSkeleton = () => (
  <footer className="ss-footer">
    <div className="ss-footer-inner">
      {repeat(5).map((_, c) => (
        <div className="ss-footer-col" key={c}>
          <div className="ss-box ss-dark ss-footer-title"></div>
          {repeat(4).map((_, r) => (
            <div className="ss-box ss-dark ss-footer-line" key={r}></div>
          ))}
        </div>
      ))}
    </div>
  </footer>
)

/* ---------- butun sayt ---------- */
export default function SiteSkeleton() {
  return (
    <div className="ss" aria-busy="true" aria-label="Loading">
      <HeaderSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <FooterSkeleton />
    </div>
  )
}