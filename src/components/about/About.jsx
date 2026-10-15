import { useState } from "react"
import "./About.css"
import { useNavigate } from "react-router-dom"

export const products = [
  { id: 1, name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnMgC6vTQeXL76tuE5P4T9wM8iYdbFc7tf6TA3XsuJQ&s=10" },
  { id: 2, name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2zi6ESfKZPm5Xw5I4GvAfPOOHrYE5gJf9vfQcD98hw&s=10" },
  { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, img: "https://radius.uz/_next/image?url=https%3A%2F%2Fnew.api.radius.uz%2Fmedia%2Fimages%2Fproduct%2F711a4c9256d448d3abba71314c5f7c58.webp&w=1024&q=75" },
  { id: 4, name: "Curology Product Set", price: 500, rating: 4, reviews: 145, img: "https://images.ctfassets.net/mdcr7mahi0vp/2lbkYIRHPyiVNPkVTSBbsF/76d04bc23bf9231838e8792f07282149/bo.jpeg" },
  { id: 5, name: "Kids Electric Car", price: 960, rating: 5, reviews: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkG7vg2mg5Iree2hVO_HoomdE2mFVq8qRKPFwVO9OzYKnwBE6Oip3a7QkO&s=10", isNew: true },
  { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160, rating: 5, reviews: 35, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyTzsJQAKDghH4-MY0GnuNWYTnBSYeQhr6sWQmyRtwfnCTJcJ7xsiTlY&s=10" },
  { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, rating: 4.5, reviews: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLLHVam8jrnv3QwmUGoID5fLYzJZ26dHp5PIhKYOteg&s=10", isNew: true },
  { id: 8, name: "Quilted Satin Jacket", price: 660, rating: 4.5, reviews: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLOJ9hzp39g0mdJf7DZJi37VEmhe9TiSeeDbRW5MhTqZyA49gBzQ6OqnW&s=10" },

 
 // ---- "View All Products" bosilganda chiqadigan qo'shimcha 8 ta ----
  { id: 9, name: "Wireless Headphones", price: 180, rating: 4, reviews: 80, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVbr7R-ElB6hsUvLk16J8HffRN-B0tWgpJDiPfK_9MxYBri_seKLD6zePZDG4IMZIEv7cBa3Z6YeswbmL40IB6mxw7xUflih8uLmY4ggUHuuyjz_I3fkzkTr7kbVEgMA&usqp=CAc" },
  { id: 10, name: "Smart Watch Series 6", price: 320, rating: 4.5, reviews: 120, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3gmMzfqVfS8Nl4bmvNKV61vvzwcSt-Bl00HR2jltP_ku6hCqRZuG9pB_c4DxkqJQ6AD34jnM1wXLslN0uGfX33jmXOhkGw5Tk5M9UcFcdctrli7_IXGUkrl8u-80VTIGzPtvUVhD4&usqp=CAc", isNew: true },
  { id: 11, name: "Gaming Mouse RGB", price: 90, rating: 4, reviews: 60, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQq51sL9wGOgYkXR949snsRXCVr-RPBjfv_rdbZHAHLm2yXPGMGhGA5BLjWzBZR2hgU2rCUH8Cq6YDXNsV6r48g9JtcVEsaFiuUvbusJf_QXBI6fCq7z3RNPuywXjOlv9YMpgEqtg&usqp=CAc" },
  { id: 12, name: "Mechanical Keyboard", price: 150, rating: 5, reviews: 210, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3OJ6FVHmL6N9cYsYXqQumeZiuV5MKlwpmLD4BCpTRbb1dyUFxVjk4ejQcPC8kEI8lrM2NQ38hufNx2oNT2Amr4QUtUlEGV2DX_HPl5Eqw0oCGGFO6xzTjhlpfCCcw&usqp=CAc" },
  { id: 13, name: "Bluetooth Speaker", price: 120, rating: 4, reviews: 45, img: "data:image/webp;base64,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" },
  { id: 14, name: "Running Sneakers", price: 240, rating: 4.5, reviews: 98, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgZbux9J83TUCLqYrUNsAyWXydYfiLLBYM_0655A2kYM9xUHN_sV2lNJj05jXFjBJKZIYfMAAgsrbvRNNzL8k3Cp6XO6XXrmAYyjJBrqxSpVMo34yYukXR07NZ6d1ywwm__0lmFoDh14RC&usqp=CAc", isNew: true },
  { id: 15, name: "Leather Backpack", price: 200, rating: 4, reviews: 70, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJYPNjUIBJNXtT0_4d2YU-1IAhNrGAtTpAQbiM-MKIY95M9X5dLOfBuycNcpIZeGdpwwxmpYqtLYIgxef7KvLNozbIH9AJtPOxjJP4Jt7TzCfIMxfiPiiWVxF_njdkjXDH4adpoDCc&usqp=CAc" },
  { id: 16, name: "4K Action Camera", price: 410, rating: 5, reviews: 150, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQa3vDZ_GJvbqWmD4_wD2Q7L4Xn4t2nWBvSuZPl-S8EaFCaJTv32YQwMEupodENvY1UqQvJQS6uJNdC3Y3jPUNp4Ud6jVrjA5GD0nt3Fp9vUBS78Ud90IMWVhEDcMtt&usqp=CAc" },


]

const services = [
  { id: 1, title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140", icon: "🚚" },
  { id: 2, title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support", icon: "🎧" },
  { id: 3, title: "MONEY BACK GUARANTEE", text: "We return money within 30 days", icon: "🛡️" },
]

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s-7-4.6-9.5-9C.8 8.7 2.6 5 6 5c2 0 3.4 1 4.5 2.5h3C14.6 6 16 5 18 5c3.4 0 5.2 3.7 3.5 7-2.5 4.4-9.5 9-9.5 9z" />
  </svg>
)

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const Stars = ({ rating }) => (
  <span className="stars">
    <span className="stars-bg">★★★★★</span>
    <span className="stars-fill" style={{ width: `${(rating / 5) * 100}%` }}>★★★★★</span>
  </span>
)

export default function About() {
  const navigate = useNavigate()
  // "View All" holati sahifa almashganda ham saqlanib qoladi
  const [showAll, setShowAll] = useState(
    () => sessionStorage.getItem("showAll") === "true"
  )
  const [loading, setLoading] = useState(false)
  const visibleProducts = showAll ? products : products.slice(0, 8)

  const handleToggle = () => {
    if (loading) return

    // "Show Less" bosilganda loading kerak emas
    if (showAll) {
      setShowAll(false)
      sessionStorage.setItem("showAll", "false")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setShowAll(true)
      sessionStorage.setItem("showAll", "true")
      setLoading(false)
    }, 1500)
  }

  return (
    <section className="about">
      <div className="about-label">
        <span className="about-label-bar"></span>
        <p>Our Products</p>
      </div>

      <div className="about-arrows">
        <button type="button" aria-label="Previous">←</button>
        <button type="button" aria-label="Next">→</button>
      </div>

      <div className="products-grid">
        {visibleProducts.map((p, i) => (
          <div
            className={`product-card ${i >= 8 ? "product-card-new" : ""}`}
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${p.id}`)}
          >
            <div className="product-img-box">
              {p.isNew && <span className="product-new">NEW</span>}
              <div className="product-actions">
                <button type="button" aria-label="Wishlist" onClick={(e) => e.stopPropagation()}><HeartIcon /></button>
                <button type="button" aria-label="Quick view" onClick={(e) => e.stopPropagation()}><EyeIcon /></button>
              </div>
              <img src={p.img} alt={p.name} />
              <button type="button" className="add-to-cart" onClick={(e) => e.stopPropagation()}>Add To Cart</button>
            </div>
            <h4 className="product-name">{p.name}</h4>
            <div className="product-info">
              <span className="product-price">${p.price}</span>
              <Stars rating={p.rating} />
              <span className="product-reviews">({p.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="about-btn-wrap">
        <button
          type="button"
          className="view-all-btn"
          onClick={handleToggle}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="btn-spinner"></span>
              Loading...
            </>
          ) : showAll ? (
            "Show Less"
          ) : (
            "View All Products"
          )}
        </button>
      </div>

      <div className="services">
        {services.map((s) => (
          <div className="service" key={s.id}>
            <div className="service-icon"><span>{s.icon}</span></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}