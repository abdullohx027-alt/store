import "./Footer.css"

const account = ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"]
const quickLinks = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"]

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M21 3L3 10.5l7 3 3 7L21 3z" />
    <path d="M10 13.5L21 3" />
  </svg>
)

const socials = [
  {
    name: "Facebook",
    icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z" />,
  },
  {
    name: "Twitter",
    icon: <path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />,
  },
  {
    name: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <>
        <path d="M6 9v11M6 5v.01M10 20v-6a3 3 0 0 1 6 0v6M10 9v11" />
      </>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Exclusive</h2>
          <h3 className="footer-title">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" aria-label="Subscribe"><SendIcon /></button>
          </form>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Support</h3>
          <ul>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Account</h3>
          <ul>
            {account.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Quick Link</h3>
          <ul>
            {quickLinks.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Download App</h3>
          <p className="app-note">Save $3 with App New User Only</p>
          <div className="app-row">
            <svg className="qr" viewBox="0 0 10 10" aria-label="QR code">
              <rect width="10" height="10" fill="#fff" />
              <g fill="#000">
                <rect x="0.5" y="0.5" width="3" height="3" />
                <rect x="6.5" y="0.5" width="3" height="3" />
                <rect x="0.5" y="6.5" width="3" height="3" />
                <rect x="4.5" y="4.5" width="1" height="1" />
                <rect x="6.5" y="6.5" width="1" height="1" />
                <rect x="8.5" y="8.5" width="1" height="1" />
                <rect x="4.5" y="0.5" width="1" height="1" />
                <rect x="4.5" y="8.5" width="1" height="1" />
              </g>
              <g fill="#fff">
                <rect x="1.5" y="1.5" width="1" height="1" />
                <rect x="7.5" y="1.5" width="1" height="1" />
                <rect x="1.5" y="7.5" width="1" height="1" />
              </g>
            </svg>
            <div className="store-btns">
              <a href="#" className="store-btn">
                <span>▶</span>
                <div><small>GET IT ON</small><b>Google Play</b></div>
              </a>
              <a href="#" className="store-btn">
                <span></span>
                <div><small>Download on the</small><b>App Store</b></div>
              </a>
            </div>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a href="#" key={s.name} aria-label={s.name}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}