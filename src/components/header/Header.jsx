import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">Exclusive</h1>

        <nav className="header__nav">
          <a href="/" className="header__link header__link--active">Home</a>
          <a href="/contact" className="header__link">Contact</a>
          <a href="/about" className="header__link">About</a>
          <a href="/signin" className="header__link">Sign in</a>
        </nav>

        <div className="header__actions">
          <div className="header__search">
            <input type="text" placeholder="What are you looking for?" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <button className="header__icon" aria-label="Wishlist">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="header__icon" aria-label="Cart">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}