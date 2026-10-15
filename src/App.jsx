import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Productdetails from './components/products/Productdetails'

/* =====================================================
   SKELETON (sahifa yangilanganda ko'rinadi)
   Alohida fayl kerak emas, hammasi shu yerda.
   ===================================================== */
const skeletonCss = `
.ss {
  font-family: "Poppins", sans-serif;
}

/* Shimmer */
.ss-box {
  background: linear-gradient(90deg, #ececec 25%, #f6f6f6 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ssShimmer 1.4s ease infinite;
  border-radius: 4px;
}

/* Footer (qora fon) uchun to'q shimmer */
.ss-box.ss-dark {
  background: linear-gradient(90deg, #1f1f1f 25%, #2c2c2c 37%, #1f1f1f 63%);
  background-size: 400% 100%;
}

@keyframes ssShimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

/* ---------- Header ---------- */
.ss-header {
  max-width: 1170px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ss-logo {
  width: 118px;
  height: 26px;
}

.ss-nav {
  display: flex;
  gap: 40px;
}

.ss-nav-item {
  width: 52px;
  height: 18px;
}

.ss-header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.ss-search {
  width: 243px;
  height: 38px;
}

.ss-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

/* ---------- Hero ---------- */
.ss-hero {
  max-width: 1170px;
  margin: 34px auto 0;
  border-top: 1px solid #ececec;
  padding-top: 34px;
}

.ss-banner {
  width: 100%;
  aspect-ratio: 975 / 287;
}

/* ---------- About ---------- */
.ss-about {
  max-width: 1170px;
  margin: 0 auto;
  padding: 80px 0;
}

.ss-label {
  width: 140px;
  height: 40px;
}

.ss-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 30px;
  margin-top: 60px;
}

.ss-card-img {
  height: 250px;
}

.ss-line {
  width: 70%;
  height: 16px;
  margin-top: 16px;
}

.ss-line.short {
  width: 45%;
  margin-top: 10px;
}

.ss-btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.ss-btn {
  width: 220px;
  height: 56px;
}

.ss-services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 140px;
}

.ss-service {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ss-service-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.ss-service-title {
  width: 200px;
  height: 20px;
  margin-top: 24px;
}

.ss-service-text {
  width: 240px;
  height: 14px;
  margin-top: 12px;
}

/* ---------- Footer ---------- */
.ss-footer {
  background: #000;
  padding: 80px 0;
}

.ss-footer-inner {
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}

.ss-footer-title {
  width: 100px;
  height: 22px;
  margin-bottom: 24px;
}

.ss-footer-line {
  width: 80%;
  height: 14px;
  margin-bottom: 14px;
}

/* ---------- Responsive ---------- */
@media (max-width: 1200px) {
  .ss-header,
  .ss-hero,
  .ss-about,
  .ss-footer-inner {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .ss-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .ss-nav,
  .ss-search {
    display: none;
  }
  .ss-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .ss-services {
    grid-template-columns: 1fr;
  }
  .ss-footer-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .ss-grid {
    grid-template-columns: 1fr;
  }
}
`

const repeat = (n) => Array.from({ length: n })

/* ---------- header ---------- */
const HeaderSkeleton = () => (
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
const HeroSkeleton = () => (
  <section className="ss-hero">
    <div className="ss-box ss-banner"></div>
  </section>
)

/* ---------- about (Our Products) ---------- */
const AboutSkeleton = () => (
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
const FooterSkeleton = () => (
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
function SiteSkeleton() {
  return (
    <div className="ss" aria-busy="true" aria-label="Loading">
      <style>{skeletonCss}</style>
      <HeaderSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <FooterSkeleton />
    </div>
  )
}

/* ===================================================== */

function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Skeleton faqat bosh sahifada (details sahifasining o'z loadingi bor)
  if (loading && pathname === '/') return <SiteSkeleton />

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />
        <Route path="/product/:id" element={<Productdetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App