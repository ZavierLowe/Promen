import React from 'react';

function WhySection(props) {
      return (
          <section className="text-gray-600 body-font bg-green">
            <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Why Choose Promen</h1>
            <div className="flex mt-6 justify-center">
            </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            </div>
            {/* First Reason Box */}
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Best Curation</h2>
            <p className="text-white leading-relaxed text-base">
            We curate the best products availabe at an affordable price.</p>
                    
            </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            </div>
            {/* Second Reason Box */}
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Only the Best Products</h2>
            <p className=" text-white leading-relaxed text-base">
            Each product is verified for the best ingredients so you
            don't have to keep guessing!
            </p>
            </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            </div>
            {/* Third Reason Box */}
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Reason 3</h2>
            <p className="text-white leading-relaxed text-base">
            We have a wide selection of products that satisfy your needs 
            </p>
            </div>
            </div>
            </div>
            </div>
          </section>
      );
}

export default WhySection;