export default function ShippingPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>SHIPPING INFO</h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
        
        <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #0070f3' }}>
          <h3 style={{ marginTop: '0', color: '#0070f3' }}>🚚 FREE SHIPPING</h3>
          <p style={{ marginBottom: '0' }}>Free shipping sa lahat ng orders within Metro Manila. Minimum ₱1,000 para sa provincial orders.</p>
        </div>

        <h3>📦 Delivery Time</h3>
        <ul>
          <li><strong>Metro Manila:</strong> 2-3 business days</li>
          <li><strong>Luzon:</strong> 3-5 business days</li>
          <li><strong>Visayas & Mindanao:</strong> 5-7 business days</li>
        </ul>

        <h3 style={{ marginTop: '30px' }}>💰 Shipping Rates</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Location</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>Metro Manila</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>FREE</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>Luzon</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>₱80</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>Visayas</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>₱120</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>Mindanao</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>₱150</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: '30px' }}>📍 Meetup Options</h3>
        <p>
          Pwede din meetup sa campus para walang shipping fee! 
          Email us sa <strong>cpemerch.store@gmail.com</strong> para mag-schedule.
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Available meetup locations: Main Campus, Engineering Building
        </p>

        <h3 style={{ marginTop: '30px' }}>📱 Track Your Order</h3>
        <p>
          After mo mag-checkout, magse-send kami ng tracking number sa email mo. 
          Pwede mo i-track yung parcel sa courier website.
        </p>

        <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '30px', border: '1px solid #ffc107' }}>
          <p style={{ margin: '0', fontSize: '14px' }}>
            <strong>Note:</strong> Shipping days exclude weekends and holidays. 
            Pag may delay due to weather, mag-update kami sa email.
          </p>
        </div>

      </div>
    </div>
  )
}
