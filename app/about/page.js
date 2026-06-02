export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>ABOUT US</h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
        <p>
          <strong>CpE Merch Store</strong> is built by Computer Engineering students, for Computer Engineering students.
        </p>
        
        <p>
          Alam namin yung struggle ng coding, debugging, at pag-google ng "how to center a div". 
          Kaya gumawa kami ng merch na relate sa buhay CpE.
        </p>

        <h3 style={{ marginTop: '30px' }}>Why CpE Merch?</h3>
        <ul>
          <li>✅ Designs na gets lang ng mga CpE</li>
          <li>✅ Affordable para sa student budget</li>
          <li>✅ Quality shirts na pang-everyday coding</li>
          <li>✅ Gawa ng CpE, para sa CpE</li>
        </ul>

        <h3 style={{ marginTop: '30px' }}>Our Mission</h3>
        <p>
          Gusto namin i-represent yung CpE community. Hindi lang kami nagco-code, marunong din kami magpatawa 
          at mag-design ng damit. Wear your code with pride!
        </p>

        <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#666' }}>
          "From students, to students. Keep coding, keep hustling."
        </p>
      </div>
    </div>
  )
}
