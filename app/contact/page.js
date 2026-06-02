export default function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>CONTACT US</h1>
      
      <div style={{ lineHeight: '1.8' }}>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          May tanong? May suggestion? Message mo kami!
        </p>

        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>📧 Email</h3>
          <p>cpemerch.store@gmail.com</p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>📱 Facebook Page</h3>
          <p>facebook.com/cpemerchstore</p>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>📍 Location</h3>
          <p>CAGAYAN STATE UNIVERSITY</p>
          <p style={{ fontSize: '14px', color: '#666' }}>Meetup available sa campus</p>
        </div>

        <h3 style={{ marginTop: '40px' }}>Send us a message</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
          <input 
            type="text" 
            placeholder="Your Name"
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input 
            type="email" 
            placeholder="Your Email"
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <textarea 
            placeholder="Your Message"
            rows="5"
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'Arial' }}
          ></textarea>
          <button 
            type="submit"
            style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            SEND MESSAGE
          </button>
        </form>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px', textAlign: 'center' }}>
          *Form is for display only. Email us directly for now.
        </p>
      </div>
    </div>
  )
}
