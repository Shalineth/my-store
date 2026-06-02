import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial' }}>
        
        <header style={{ borderBottom: '1px solid #ddd', padding: '16px 0', backgroundColor: '#f8f8f8' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
            
            <div>
              <Link href="/" style={{ marginRight: '16px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                HOME
              </Link>
              <Link href="/about" style={{ margin: '0 16px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                ABOUT
              </Link>
              <Link href="/contact" style={{ margin: '0 16px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                CONTACT
              </Link>
              <Link href="/shipping" style={{ margin: '0 16px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                SHIPPING
              </Link>
              <Link href="/returns" style={{ margin: '0 16px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                RETURNS
              </Link>
            </div>

            <div>
              <Link href="/login" style={{ margin: '0 8px', textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
                LOGIN
              </Link>
              <span style={{ color: '#ccc' }}>|</span>
              <Link href="/register" style={{ margin: '0 8px', textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
                REGISTER
              </Link>
            </div>

          </nav>
        </header>

        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {children}
        </main>
        
        <footer style={{ borderTop: '1px solid #ddd', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
          © 2026 CpE Merch Store. Built by CpE students, for CpE students.
        </footer>
        
      </body>
    </html>
  )
}
