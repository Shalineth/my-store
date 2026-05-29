'use client'
import { useState } from "react"

export default function Home() {
  const products = [... same products mo... ]

  const [cart, setCart] = useState([])
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedSizes, setSelectedSizes] = useState({})

  const addToCart = (product) => {
    const size = selectedSizes[product.id] || product.sizes[0]
    const cartItem = {...product, size}
    const existing = cart.find(item => item.id === product.id && item.size === size)
    if (existing) {
      setCart(cart.map(item => item.id === product.id && item.size === size? {...item, qty: item.qty + 1} : item))
    } else {
      setCart([...cart, {...cartItem, qty: 1}])
    }
  }

  const updateQty = (id, size, qty) => {
    if (qty <= 0) {
      setCart(cart.filter(item =>!(item.id === id && item.size === size)))
    } else {
      setCart(cart.map(item => item.id === id && item.size === size? {...item, qty} : item))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const placeOrder = () => {
    if (cart.length === 0) return alert("Cart is empty!")

    let orderText = "🛍️ NEW ORDER!\n\n"
    cart.forEach(i => {
      orderText += i.name + " Size:" + i.size + " x" + i.qty + "\n"
    })
    orderText += "\nPayment: " + paymentMethod + "\nTotal: ₱" + total

    // Eto yung importante - encodeURI para di masira spaces
    window.open("https://m.me/EngrCureq?text=" + encodeURI(orderText), '_blank')

    setOrderPlaced(true)
    setTimeout(() => {
      setCart([])
      setOrderPlaced(false)
    }, 3000)
  }

  const handleSizeChange = (productId, size) => {
    setSelectedSizes({...selectedSizes, [productId]: size})
  }

  return (
    <div style={{fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto"}}>
      <header style={{display: "flex", justifyContent: "space-between", padding: "20px", borderBottom: "1px solid #ddd", position: "sticky", top: 0, background: "white", zIndex: 10}}>
        <h1 style={{margin: 0}}>🛍️ My Store</h1>
        <div style={{fontSize: "18px"}}>Cart: <strong>{cart.reduce((s, i) => s + i.qty, 0)}</strong></div>
      </header>

      <main style={{padding: "20px"}}>
        <h2>Products</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px"}}>
          {products.map(p => (
            <div key={p.id} style={{border: "1px solid #ddd", padding: "15px", borderRadius: "8px", textAlign: "center", transition: "0.2s"}}
                 onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"}
                 onMouseOut={e => e.currentTarget.style.boxShadow = "none"}>
              <img src={p.image} alt={p.name} style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px"}}/>
              <h3 style={{margin: "10px 0 5px"}}>{p.name}</h3>
              <p style={{margin: "0 0 5px", fontWeight: "bold", fontSize: "18px"}}>₱{p.price}</p>
              {p.stock && <p style={{margin: "0 0 8px", fontSize: "12px", color: p.stock < 30? "red" : "green"}}>
                {p.stock} in stock {p.stock < 30 && "🔥 Low stock"}
              </p>}

              {p.sizes && (
                <select value={selectedSizes[p.id] || p.sizes[0]}
                        onChange={(e) => handleSizeChange(p.id, e.target.value)}
                        style={{padding: "5px", marginBottom: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc"}}>
                  {p.sizes.map(s => <option key={s} value={s}>Size {s}</option>)}
                </select>
              )}

              <button onClick={() => addToCart(p)}
                      style={{padding: "10px 16px", cursor: "pointer", background: "black", color: "white", border: "none", borderRadius: "4px", width: "100%"}}
                      onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                      onMouseOut={e => e.target.style.transform = "scale(1)"}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <aside style={{padding: "20px", borderTop: "1px solid #ddd", marginTop: "30px", background: "#f9f9f9"}}>
        <h2>Cart</h2>
        {cart.length === 0? <p>Cart is empty</p> : (
          <>
            {cart.map((item) => (
              <div key={item.id + item.size} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee"}}>
                <div>
                  <strong>{item.name}</strong><br/>
                  Size: {item.size}<br/>
                  ₱{item.price} x {item.qty} = ₱{item.price * item.qty}
                </div>
                <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                  <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} style={{padding: "4px 8px", cursor: "pointer"}}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} style={{padding: "4px 8px", cursor: "pointer"}}>+</button>
                </div>
              </div>
            ))}

            <div style={{marginTop: "20px"}}>
              <h3>Payment Method</h3>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={{padding: "8px", width: "100%", marginBottom: "15px"}}>
                <option>Cash on Delivery</option>
                <option>GCash</option>
                <option>Credit Card</option>
              </select>
              <p style={{fontSize: "20px", margin: "15px 0"}}><strong>Total: ₱{total}</strong></p>
              <button onClick={placeOrder} disabled={orderPlaced}
                      style={{padding: "12px", width: "100%", background: orderPlaced? "gray" : "green", color: "white", border: "none", borderRadius: "4px", cursor: orderPlaced? "not-allowed" : "pointer", fontSize: "16px"}}>
                {orderPlaced? "Processing..." : "Place Order"}
              </button>
            </div>
          </>
        )}
      </aside>

      {orderPlaced && (
        <div style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999}}>
          <div style={{background: "white", padding: "40px", borderRadius: "12px", textAlign: "center", maxWidth: "400px"}}>
            <h1 style={{fontSize: "48px", margin: 0}}>🎉</h1>
            <h2 style={{margin: "10px 0"}}>Thank you for your order!</h2>
            <p style={{fontSize: "18px", margin: "10px 0"}}>
              Payment: <strong>{paymentMethod}</strong><br/>
              Total: <strong>₱{total}</strong>
            </p>
            <p style={{color: "gray", fontSize: "14px"}}>We'll contact you soon for delivery 🚚</p>
            <button onClick={() => setOrderPlaced(false)} style={{marginTop: "20px", padding: "12px 24px", background: "black", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px"}}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
