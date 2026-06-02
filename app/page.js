'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px' }}>CpE Merch Store</h1>
        <button 
          onClick={handleLogout}
          style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          LOGOUT
        </button>
      </div>
      
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Built by CpE students, for CpE students
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
        
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>GOOGLE IS MY IDE</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>₱349.00</p>
          <button 
            className="snipcart-add-item"
            data-item-id="cpe-shirt-1"
            data-item-price="349"
            data-item-url="/"
            data-item-name="GOOGLE IS MY IDE Shirt"
            style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
          >
            Add to Cart
          </button>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>HELLO WORLD</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>₱349.00</p>
          <button 
            className="snipcart-add-item"
            data-item-id="cpe-shirt-2"
            data-item-price="349"
            data-item-url="/"
            data-item-name="HELLO WORLD Shirt"
            style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
          >
            Add to Cart
          </button>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>DEBUG MODE</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>₱349.00</p>
          <button 
            className="snipcart-add-item"
            data-item-id="cpe-shirt-3"
            data-item-price="349"
            data-item-url="/"
            data-item-name="DEBUG MODE Shirt"
            style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}
