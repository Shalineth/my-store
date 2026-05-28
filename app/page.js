export default function Home() {
  return (
    <main style={{
      textAlign: 'center', 
      marginTop: '100px', 
      fontFamily: 'Arial, sans-serif',
      padding: '0 20px'
    }}>
      <h1 style={{fontSize: '48px', marginBottom: '10px'}}>
        Welcome to Shali's Store!
      </h1>
      
      <p style={{fontSize: '20px', color: '#666', marginBottom: '40px'}}>
        Mga paninda ko:
      </p>
      
      <ul style={{
        listStyle: 'none', 
        padding: 0, 
        fontSize: '18px',
        lineHeight: '2.5'
      }}>
        <li>👕 T-shirt - ₱299</li>
        <li>👟 Sapatos - ₱999</li>
        <li>🧢 Cap - ₱199</li>
      </ul>
    </main>
  )
}
