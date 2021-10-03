import React from 'react';

function HeaderBanner(props) {
      return (
            <div>
            <div className="bg-green">
      <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-0 flex-1 flex items-center justify-center">
            <span className="flex p-2">
            <img src="https://img.icons8.com/emoji/48/000000/fire.png"
            alt='Fire'
            width='24'
            height='24'
            />
            </span>
            <p className="ml-3 font-medium text-white truncate text-center">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Free Shipping on ALL ORDERS!</span>
            </p>
          </div>
         
          
        </div>
      </div>
    </div>
                  
            </div>
      );
}

export default HeaderBanner;