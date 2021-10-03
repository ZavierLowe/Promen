import React, {useEffect , useState  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function FeaturedProducts({cart,setCart}) {
      const [results, setResults] = useState([])
      // Fetching the url using axios
      useEffect(() =>{
      const url ='https://sleepy-earth-86694.herokuapp.com/featuredproducts/'
      axios.get(url)
      .then(function(response){
      setResults(response.data);
      })},[setResults])
 
function handleclickbutton(product){
      setCart([...cart,product])
}
  
return (
      
      <section  className='py-16 bg-gray'>
      <div className='text-center m-5 text-2xl py-16 text-green'>Featured Products</div>
            

      <div  className='mx-auto grid grid-cols-3 space-x-6 p-20'>
      {/* Mappping through the array of featured products */}
      {results.map((products) =>(
   
      <div key ={results.id} className=''>
      <Link to={`/productinfo/${products.id}`} key={products.id}> 
      <img className=' object-cover transform hover:scale-95 transition duration-500'
      src={products.photo_url} 
      width='500'
      height='500'
      alt=''>
      </img>
      </Link> 
      <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
               {products.name}
               </h5>
      <p className="text-gray-700">{products.price}</p>
      <Link to='/cart' >
      <button onClick={() => handleclickbutton(products)} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
      <span className="mx-1">Add to Cart</span>
      </button>
      </Link>
      </div>))}
      </div>
           
      </section>           
       
            
      )}
      
export default FeaturedProducts;