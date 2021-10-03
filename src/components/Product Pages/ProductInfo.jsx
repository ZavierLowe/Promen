import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import Footer from '../Footer';

function ProductInfo({match}) {
      const [results, setResults] = useState([])

      useEffect(() =>{
  
            const url =`https://sleepy-earth-86694.herokuapp.com/featuredproducts/${match.params.id}`
            axios.get(url)
            .then(function(response){
            setResults(response.data);
            })},[match.params.id])

// function handleclickbutton(product){
//       console.log(product)
//       console.log(cart)
//       try {
            
//       setCart([...cart,product])
//       } catch {
//             console.log('error')
//       }

// }



      return (
            <div>
                  <Navigation/>
              <section className='bg-gray'>
                    <div className='container mx-auto px-5 py-24'>
                          <div className='mx-auto flex flex-col  '>
                                <div className='grid grid-row-2 lg:grid-cols-2 ' key={results.id}>
                                      <div>


                                      <img className='object-cover'
                                      src={results.photo_url}
                                      width='800'
                                      height='800'
                                      alt=''
                                      />
                                      </div>
                                      
                                   <div className='flex-col  mt-24 lg:ml-20'>
                                         <h1 className='text-2xl font-bold'>{results.name}</h1>
                                         <h2 className='mt-10 text-xl'>{results.price}</h2>
                                         <p className='text-base mt-10'>
                                               
                                          {results.description}
                                          </p>
                                         
                                         <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green  hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="mx-1">Add to Cart</span>
                                </button>
                                





                                
                                   </div>
                                   
                                </div>
                                
                                


                                
                               
                          </div>

                    </div>
            
            
            
                  </section>   
                  <Footer/> 
            </div>
      );
}

export default ProductInfo;