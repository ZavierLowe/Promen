import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBanner from './Landing Page/HeaderBanner';

function Navigation(props) {
      return (
         <div>
             <HeaderBanner/>

            <nav className="bg-gray ">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to='/'>
                        
                        <h1 className="text-2xl font-bold text-green lg:text-3xl"> Promen</h1>
                        </Link>
                       
                        
                    </div>
                    
                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
    
                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link to='/AllProducts'>
                        <h2 className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="/"><a>Shop All</a></h2>
                        </Link>
                        <Link to='/AllProducts'>

                        <h2 className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="/">Hair</h2>
                        </Link>
                        <h2 className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="/">Bath & Body</h2>
                        
                    </div>
    
                    <div className="flex justify-center md:block">
                        <Link to='/signup'>
                        
                        <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
    
                           
                        </a>
                        </Link>
                    </div>
                    <div className="flex justify-center ml-5 md:block">
                        <Link to='/Cart'>
                        
                        <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
    
                           
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
         </div>
      );
}

export default Navigation;