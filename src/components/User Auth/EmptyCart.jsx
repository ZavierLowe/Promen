import React from 'react';

function ShoppingCart(props) {
      return (
        <div className= 'bg-gray' >
        <section className='container   mx-auto bg-gray  '>
              <div>
                    <h1 className='text-3xl font-bold pt-8 text-green'>Shopping Cart</h1>
              </div>
              

              <div className='grid grid-cols-5 place-items-center mt-10'k>
              
              <div className=' p-36'>
              <h2 className='text-center text-xl text-green'></h2>   
              </div>
              <div className='p-36'>
              <h2 className='text-center text-lg'></h2>   
              </div>

              
                    
             <div className='flex flex-col justify-end mt-2 '>
                   <h1 className='text-2xl'></h1>
                   <p className='text-2xl ml-4 '>$25.99</p>
                   <button className='mb-6'>X</button>
                  
                      

           
             <button  className="flex items-center justify-center  px-2 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green  hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                          
                          <span className="mx-1">Checkout</span>
                      </button> 
             
             </div>
              </div>
              
             

        </section>
        
        
  </div>
      );
}

export default ShoppingCart;