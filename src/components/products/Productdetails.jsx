import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { products } from "../about/About"
import "./Productdetails.css"

const sizes = ["XS", "S", "M", "L", "XL"]
const colors = ["#a0bce0", "#e07575"]

const Stars = ({ rating }) => (
  <span className="pd-stars">
    <span className="pd-stars-bg">★★★★★</span>
    <span className="pd-stars-fill" style={{ width: `${(rating / 5) * 100}%` }}>★★★★★</span>
  </span>
)

export default function Productdetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number(id))

  const [loading, setLoading] = useState(true)

  // Sahifa ochilganda: tepaga scroll + qisqa loading
  useEffect(() => {
    window.scrollTo({ top: 0 })
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <section className="pd-loader">
        <div className="pd-spinner"></div>
        <p>Loading...</p>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="pd-loader">
        <p>Product not found</p>
        <button type="button" className="pd-back" onClick={() => navigate("/")}>
          ← Back to Products
        </button>
      </section>
    )
  }

  return <ProductView product={product} onBack={() => navigate("/")} />
}

function ProductView({ product, onBack }) {
  const [size, setSize] = useState("M")
  const [color, setColor] = useState(colors[0])
  const [qty, setQty] = useState(2)
  const [mainImg, setMainImg] = useState(product.img)
  const [liked, setLiked] = useState(false)

  // Hozircha 4 ta thumbnail ham bir xil rasm. Xohlasangiz product.images massiviga almashtiring.
  const thumbs = [product.img, product.img, product.img, product.img]

  return (
    <section className="pd">
      <div className="pd-breadcrumb">
        <button type="button" onClick={onBack}>Home</button>
        <span>/</span>
        <button type="button" onClick={onBack}>Our Products</button>
        <span>/</span>
        <strong>{product.name}</strong>
      </div>

      <div className="pd-main">
        <div className="pd-thumbs">
          {thumbs.map((t, i) => (
            <button
              type="button"
              key={i}
              className={`pd-thumb ${mainImg === t ? "active" : ""}`}
              onClick={() => setMainImg(t)}
            >
              <img src={t} alt={`${product.name} ${i + 1}`} />
            </button>
          ))}
        </div>

        <div className="pd-image">
          <img src={mainImg} alt={product.name} />
        </div>

        <div className="pd-info">
          <h2>{product.name}</h2>

          <div className="pd-rating">
            <Stars rating={product.rating} />
            <span className="pd-reviews">({product.reviews} Reviews)</span>
            <span className="pd-divider">|</span>
            <span className="pd-stock">In Stock</span>
          </div>

          <p className="pd-price">${product.price}.00</p>

          <p className="pd-desc">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install &amp; mess free removal
            Pressure sensitive.
          </p>

          <hr />

          <div className="pd-row">
            <span className="pd-label">Colours:</span>
            <div className="pd-colors">
              {colors.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`pd-color ${color === c ? "active" : ""}`}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                  aria-label="Color"
                />
              ))}
            </div>
          </div>

          <div className="pd-row">
            <span className="pd-label">Size:</span>
            <div className="pd-sizes">
              {sizes.map((s) => (
                <button
                  type="button"
                  key={s}
                  className={`pd-size ${size === s ? "active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pd-buy">
            <div className="pd-qty">
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button type="button" className="plus" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button type="button" className="pd-buy-btn">Buy Now</button>
            <button
              type="button"
              className={`pd-like ${liked ? "active" : ""}`}
              onClick={() => setLiked(!liked)}
              aria-label="Wishlist"
            >
              {liked ? "♥" : "♡"}
            </button>
          </div>

          <div className="pd-delivery">
            <div className="pd-delivery-item">
              <span className="pd-delivery-icon">🚚</span>
              <div>
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="pd-delivery-item">
              <span className="pd-delivery-icon">🔄</span>
              <div>
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pd-back-wrap">
        <button type="button" className="pd-back" onClick={onBack}>← Back to Products</button>
      </div>
    </section>
  )
}