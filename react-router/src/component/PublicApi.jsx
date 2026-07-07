import {React,useEffect,useState} from 'react'

function PublicApi() {
    // const [products,setProduct] = useState([])
      const [products,setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').
        then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((err)=>console.error(err))
        
    },[])
  return (
    <>
    {products?.map((product)=>
    <div key = {product.id} className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {product.category}
          </span>

          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mt-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-6">
            <span className="text-3xl font-bold text-green-600">
              ${product.price}
            </span>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Product ID: {product.id}
          </p>

        </div>
      </div>
    </div>
    )}
    </>
    
  )
}

export default PublicApi