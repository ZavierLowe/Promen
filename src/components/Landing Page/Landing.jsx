import React from 'react';
import Navigation from '../Navigation';
import FeaturedProducts from './FeaturedProducts';
import InstagramFeed from './InstagramFeed';
import WhySection from './WhySection';
import Footer from '../Footer'
import { Link } from 'react-router-dom';



function Landing({cart,setCart}) {
  
      return (
            <div>
                <Navigation/>

                <section className="bg-green h-auto relative flex flex-col py-50 lg:pt-48 lg:flex-col lg:pb-48">
            <div className="flex flex-col items-start w-full max-w-xl px-2 mx-auto lg:px-8 lg:max-w-screen-xl">
              <div className=" mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div className=" max-w-xl mb-6">
                 <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Your Skin
                    <br className="hidden md:block " />
                    Will Thank{' '}
                    <span className="inline-block">
                      You
                    </span>
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Promen has everything you need to make your skin shine!
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                      <Link to='/Allproducts'>
                      
                  <button
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide bg-white text-green "
                  >
                   Shop Now
                  </button>
                
                      </Link>
                </div>
              </div>
            </div>
            <div className="bg-green inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 ">
              <img
                className="object-cover w-full h-full lg:rounded-none lg:shadow-none sm:h-96 lg:h-full bg-green"
                src='https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80'
                alt="Acne Cream"
              />
            </div>
          </section>
              <FeaturedProducts cart={cart} setCart={setCart}/>
              <WhySection/>
              <InstagramFeed/>
              
              <Footer/>
            </div>
                  
      );
}

export default Landing;