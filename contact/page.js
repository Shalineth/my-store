export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <p className="mb-6 text-gray-700">
        May tanong sa order mo? O gusto mo magpa-custom design para sa org nyo?
      </p>
      
      <div className="space-y-4 mb-8">
        <div>
          <p className="font-semibold">Customer Support:</p>
          <p>support@cpemerch.store</p>
        </div>
        
        <div>
          <p className="font-semibold">Bulk Orders for Orgs:</p>
          <p>cpemerch.bulk@gmail.com</p>
          <p className="text-sm text-gray-600">Minimum 20 pcs para sa org discount</p>
        </div>
        
        <div>
          <p className="font-semibold">Facebook Page:</p>
          <p>fb.com/cpemerch</p>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-1">Response Time:</p>
        <p className="text-sm">Sumasagot kami within 24-48 hours. Pag rush, message mo kami sa FB.</p>
      </div>
    </div>
  )
}
