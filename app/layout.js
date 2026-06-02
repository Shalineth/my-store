import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="border-t py-8 mt-12 text-center text-sm">
          <div className="flex gap-6 justify-center mb-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/returns">Returns</Link>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 CpE Merch Store
          </p>
        </footer>
      </body>
    </html>
  )
}
