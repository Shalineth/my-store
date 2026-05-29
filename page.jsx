'use client'
import { useState } from 'react'
import { products } from './products'

export default function Home() {
  const [cart, setCart] = useState([])
  const [showCheckout, setShowCheckout] = useState(false)

  const addToCart = (product) => setCart([...cart, product])
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index))
  const total = cart.reduce((sum, item) => sum + item.price, 0)
  
  const messengerLink = `https://m.me/girlversionnikyrie?text=${encodeURIComponent(
    `New Order:\n${cart.map(p => `- ${p.name} ₱${p.price}`).join('\n')}\nTotal: ₱${total}\n\nName:\nAddress:\nContact:`
  )}`

  return (
    <main style={{padding: 40, maxWidth: 1000, margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}>Shaliiit Store</h1>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20}}>
        {products.map(p => (
          <div key={p.id} style={{border: '1px solid #ddd', padding: 20, borderRadius: 12}}>
            <img src={p.image} style={{width: '100%', height: 200, objectFit: 'cover'}} />
            <h3>{p.name}</h3>
            <p>₱{p.price}</p>
            <button onClick={() => addToCart(p)} style={{width: '100%', padding: 10, background: 'black', color: 'white', border: 'none', borderRadius: 8}}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button onClick={() => setShowCheckout(true)} style={{position: 'fixed', bottom: 30, right: 30, padding: '15px 30px', background: 'black', color: 'white', borderRadius: 50, border: 'none'}}>
          Cart ({cart.length}) - ₱{total}
        </button>
      )}

      {showCheckout && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{background: 'white', padding: 30, borderRadius: 12}}>
            <h2>Order mo</h2>
            {cart.map((item, i) => <div key={i}>{item.name} - ₱{item.price}</div>)}
            <h3>Total: ₱{total}</h3>
            <a href={messengerLink} target="_blank" style={{display: 'block', padding: 15, background: '#0084ff', color: 'white', textAlign: 'center', borderRadius: 8, textDecoration: 'none'}}>
              Order via Messenger
            </a>
            <button onClick={() => setShowCheckout(false)} style={{width: '100%', marginTop: 10}}>Close</button>
          </div>
        </div>
      )}
    </main>
  )
}
