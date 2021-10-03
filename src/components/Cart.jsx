import React from 'react';
import Navigation from './Navigation';



function Cart({cart,setCart}) {
      // Function to remove item from cart
      const removeitem = (id) => {
            let cartArr = cart.filter(product => product.id === id)
            setCart(cartArr)
        }
        
      return(
            <div className='bg-gray' >
            {/* Navigation Component */}
            <Navigation/>
            <section className='container mx-auto h-screen mt-4 bg-gray'>
                  <div>
                  <h1 className='text-3xl font-bold pt-8 text-green text-center'>Shopping Cart</h1>
                  </div>

                  {/* Mapping throught the cart arry to render on the screen */}
                  {cart.map((cart)=>(

                  <div className='grid grid-cols-4 place-items-center mt-10'key={cart.id}>
                  <img className='object-cover'
                  src={cart.photo_url}
                  alt='none'
                  width='300'
                  height='300'
                  />
                  <div className=' p-36'>
                  <p className='mb-4 text-base'>Name</p>
                  <h2 className='text-base text-green'>{cart.name}</h2>   
                  </div>
                  <div className='p-36'>
                  <p className='mb-4 text-base'>Price</p>
                  <h2 className='text-center text-lg'>${cart.price}</h2>   
                  </div>
                  <div className='flex flex-col justify-end mt-2 '>
                  <button onClick={() => removeitem(cart)} className=' bg-green text-white px-4 py-3 hover:bg-white hover:text-green'>Remove</button>
                  </div>
                  </div>
                  
                  ))}
            <div>Your Total is</div>

            </section>
            
            
      </div>

        )
     
}

export default Cart;