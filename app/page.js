'use client'
import { useState } from 'react'
import { products } from './products'

export default function Home() {
  const [cart, setCart] = useState([])
  
  const addToCart = (p) => setCart([...cart, p])
  
  return (
    <div style={{padding: 20}}>
      <h1>My Store 🔥</h1>
      <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
        {products.map(p => (
          <div key={p.id} style={{border: '1px solid gray', padding: 10}}>
            <img src={p.image} width={200} />
            <h3>{p.name}</h3>
            <p>₱{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart: {cart.length} items</h2>
    </div>
  )
}
