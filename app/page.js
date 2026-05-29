'use client'
import { useState } from "react"

export default function Home() {
  const products = [
    { id: 1, name: "IT WORKS ON MY MACHINE", price: 380, image: "https://dummyimage.com/400x300/000/FFFFFF&text=IT+WORKS+ON+MY+MACHINE+TEE", sizes: ["S", "M", "L", "XL", "XXL"], stock: 50 },
    { id: 2, name: "COFFEE++", price: 280, image: "https://dummyimage.com/400x300/6F4E37/FFFFFF&text=COFFEE%2B%2B+MUG", sizes: ["One Size"], stock: 40 },
    { id: 3, name: "404 SLEEP NOT FOUND", price: 450, image: "https://dummyimage.com/400x300/FF0000/FFFFFF&text=404+SLEEP+HOODIE", sizes: ["S", "M", "L", "XL", "XXL"], stock: 30 },
    { id: 4, name: "01000 01001", price: 250, image: "https://dummyimage.com/400x300/00FF00/000&text=01000+01001+TOTE+BAG", sizes: ["Free Size"], stock: 35 },
    { id: 5, name: "THERE IS NO CLOUD", price: 280, image: "https://dummyimage.com/400x300/87CEEB/000&text=THERE+IS+NO+CLOUD+MUG", sizes: ["One Size"], stock: 45 },
    { id: 6, name: "CTRL+Z MY LIFE", price: 120, image: "https://dummyimage.com/400x300/FFD700/000&text=CTRL%2BZ+STICKER", sizes: ["One Size"], stock: 100 },
    { id: 7, name: "PRINTF HELLO WORLD", price: 380, image: "https://dummyimage.com/400x300/000/00FF00&text=PRINTF+TEE", sizes: ["S", "M", "L", "XL"], stock: 50 },
    { id: 8, name: "BUGS ARE FEATURES", price: 500, image: "https://dummyimage.com/400x300/FF4500/FFFFFF&text=BUGS+PREMIUM+HOODIE", sizes: ["S", "M", "L", "XL"], stock: 25 },
    { id: 9, name: "SEGMENTATION FAULT", price: 380, image: "https://dummyimage.com/400x300/8B0000/FFFFFF&text=SEGFAULT+TEE", sizes: ["S", "M", "L", "XL"], stock: 40 },
    { id: 10, name: "I VOID WARRANTIES", price: 350, image: "https://dummyimage.com/400x300/000/FFD700&text=VOID+WARRANTY+CAP", sizes: ["S", "M", "L"], stock: 35 },
    // ... dito mo idugtong lahat ng products mo hanggang id 70
    { id: 70, name: "RTFM USER", price: 380, image: "https://dummyimage.com/400x300/FF0000/FFFFFF&text=RTFM+TEE", sizes: ["S", "M", "L", "XL"], stock: 50 }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, {...product}])
    alert(product.name + " na-add sa cart! Total items: " + (cart.length + 1))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">CpE Merch Store</h1>
      <p className="text-center text-gray-600 mb-8">₱120 - ₱500 lang! Good quality, pang-masa</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2"/>
            <h2 className="text-sm md:text-base font-bold mb-1 line-clamp-2">{product.name}</h2>
            <p className="text-xs text-gray-500 mb-1">Stock: {product.stock}</p>
            <p className="text-xl md:text-2xl text-green-600 font-bold mb-2">₱{product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold text-sm"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
