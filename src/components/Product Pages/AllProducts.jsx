import React, {useEffect, useState} from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';
import axios from 'axios';
import { Link } from 'react-router-dom';



function AllProducts() {
  const [results, setResults] = useState([])
    // Fetching the url using axios
      useEffect(() =>{
      const url =`https://sleepy-earth-86694.herokuapp.com/products/`
      axios.get(url)
      .then(function(response){
      setResults(response.data);
      })},[])

      return (
            <div className=' mx-auto bg-gray'>
              <Navigation/>
            <div className=' mx-auto'>
            <h1 className='text-center text-3xl font-bold font-sans mt-10'>All Products</h1>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {/* Mapping through the array of products in the database */}
              {results.map((product) =>(
              <div key={product.id} className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div  className="w-full  overflow-hidden ">
                  <Link to={`/productinfoall/${product.id}`} key={product.id}>
                  <img
                  src={product.photo_url}
                  alt={product.imageAlt}
                  className=" w-full h-full object-center object-cover group-hover:opacity-75"
                  width='800'
                  height='800'/>
                </Link>
                </div>
                <h3 className="mt-4 text-lg text-green">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-green">{product.price}</p>
                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green  hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="mx-1">Add to Cart</span>
                </button>
                </div>))}
            </div>
            </div>
            <Footer/>
            </div>

          
      );
}

export default AllProducts;