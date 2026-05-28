"use client"
import { useState } from "react"

export default function Home() {
  const products = [ 
    { id: 1, name: "Classic T-Shirt", price: 250, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" }, 
    { id: 2, name: "Running Shoes", price: 1200, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" }, 
    { id: 3, name: "Baseball Cap", price: 150, image: "https://via.placeholder.com/400x400/000/FFFFFF?text=Cap" },
    { id: 4, name: "Hooded Sweatshirt", price: 900, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
    { id: 5, name: "Denim Jacket", price: 1800, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400" },
    { id: 6, name: "Aviator Sunglasses", price: 500, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
    { id: 7, name: "Travel Backpack", price: 750, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 8, name: "Wrist Watch", price: 2200, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400" },
    { id: 9, name: "Slim Fit Jeans", price: 1100, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 10, name: "Wireless Headphones", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 11, name: "Leather Wallet", price: 650, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400" },
    { id: 12, name: "Water Bottle", price: 300, image: "https://images.unsplash.com/photo-1602143402121-01be286532b1?w=400" },
    { id: 13, name: "Laptop Sleeve", price: 450, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400" },
    { id: 14, name: "Sports Shorts", price: 400, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400" },
    { id: 15, name: "Canvas Sneakers", price: 800, image: "https://images.unsplash.com/photo-1543508282-58d25617b7c7?w=400" },
    { id: 16, name: "Winter Beanie", price: 200, image: "https://images.unsplash.com/photo-1576871337622-98d48d327cf8?w=400" },
    { id: 17, name: "Bluetooth Speaker", price: 1500, image: "https://images.unsplash.com/photo-1608042314453-ae338d80c092?w=400" },
    { id: 18, name: "Polarized Sunglasses", price: 600, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
    { id: 19, name: "Cargo Pants", price: 950, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400" },
    { id: 20, name: "Smartphone Stand", price: 180, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400" }
  ]

  const [cart, setCart] = useState([])
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const addToCart = (product) => { 
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, qty } : item))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const placeOrder = () => {
    if (cart.length === 0) return alert("Cart is empty!")
    setOrderPlaced(true)
    setTimeout(() => {
      alert(`Order placed successfully!\nPayment: ${paymentMethod}\nTotal: ₱${total}`)
      setCart([])
      setOrderPlaced(false)
    }, 500)
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
            <div key={p.id} style={{border: "1px solid #ddd", padding: "15px", borderRadius: "8px", textAlign: "center"}}>
              <img src={p.image} alt={p.name} style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px"}}/>
              <h3 style={{margin: "10px 0 5px"}}>{p.name}</h3>
              <p style={{margin: "0 0 10px", fontWeight: "bold", fontSize: "18px"}}>₱{p.price}</p>
              <button 
                onClick={() => addToCart(p)} 
                style={{padding: "10px 16px", cursor: "pointer", background: "black", color: "white", border: "none", borderRadius: "4px", width: "100%"}}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <aside style={{padding: "20px", borderTop: "1px solid #ddd", marginTop: "30px", background: "#f9f9f9"}}>
        <h2>Cart</h2>
        {cart.length === 0 ? <p>Cart is empty</p> : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee"}}>
                <div>
                  <strong>{item.name}</strong><br/>
                  ₱{item.price} x {item.qty} = ₱{item.price * item.qty}
                </div>
                <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={{padding: "4px 8px", cursor: "pointer"}}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={{padding: "4px 8px", cursor: "pointer"}}>+</button>
                </div>
              </div>
            ))}
            
            <div style={{marginTop: "20px"}}>
              <h3>Payment Method</h3>
              <select 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{padding: "8px", width: "100%", marginBottom: "15px"}}
              >
                <option>Cash on Delivery</option>
                <option>GCash</option>
                <option>Credit Card</option>
              </select>
              
              <p style={{fontSize: "20px", margin: "15px 0"}}><strong>Total: ₱{total}</strong></p>
              
              <button 
                onClick={placeOrder}
                disabled={orderPlaced}
                style={{
                  padding: "12px", 
                  width: "100%", 
                  background: orderPlaced ? "gray" : "green", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px", 
                  cursor: orderPlaced ? "not-allowed" : "pointer",
                  fontSize: "16px"
                }}
              >
                {orderPlaced ? "Processing..." : "Place Order"}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}