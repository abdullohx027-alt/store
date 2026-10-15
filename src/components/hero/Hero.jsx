import "./Hero.css"
import iphone from "../../assets/abv.svg"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__top">
            <svg width="40" height="49" viewBox="0 0 24 24" fill="#fff">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
            <span>iPhone 14 Series</span>
          </div>

          <h2 className="hero__title">
            Up to 10% <br /> off Voucher
          </h2>

          <a href="/shop" className="hero__link">
            <span>Shop Now</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </a>
        </div>

        <img src={iphone} alt="iPhone 14 Pro" className="hero__image" />
      </section>
    </>
  )
}