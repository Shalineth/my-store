export default function RegisterPage() {
  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>REGISTER</h1>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input 
            type="password" 
            placeholder="Create a password"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
        >
          REGISTER
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        May account na? <a href="/login" style={{ color: '#0070f3' }}>Login here</a>
      </p>
    </div>
  )
}
