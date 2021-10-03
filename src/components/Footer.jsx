import React from 'react';

function Footer(props) {
      return (
          
        <footer class="bg-green w-full py-8">
        <div class="max-w-screen-xl mx-auto px-4">
        <h1 className='text-2xl text-white text-center'>Down For More? We Got You</h1>
        <h2 className='text-base text-white text-center mt-3'>All the latest product drops, and limited offers straight in your inbox</h2>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
        <div class=" relative ">
        <input type="text" id="&quot;form-subscribe-Subscribe" className="form-input bg-none appearance-none outline-none flex w-full py-1 px-4" placeholder="Email"/>
        </div>
        <button class="flex-shrink-0 px-4 py-1 text-base font-semibold text-green bg-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
        SIGN ME UP
        </button>
        </form>
        <form class="flex flex-col ml-5 md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
        <div class=" relative ">
        <input type="tel" id="&quot;form-subscribe-Subscribe" className="form-input bg-none appearance-none outline-none flex w-full py-1 px-4" placeholder="Phone"/>
        </div>
        <button class="flex-shrink-0 px-4 py-1 text-base font-semibold text-green bg-white  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
        SIGN ME UP
        </button>
        </form>
        </div>
        <div className='container '>
        <div className='flex flex-row pt-8 mt-9 ' >
        <div className='flex flex-row w-1/2 '>
        <h1 className='text-lg text-white '>Connect with Us</h1>
        <a href="/" class="text-gray-400 ml-5  hover:text-gray transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="24" height="24"
        viewBox="0 0 172 172"
        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#feeddd"><path d="M121.83333,21.5h-71.66667c-15.83117,0 -28.66667,12.8355 -28.66667,28.66667v71.66667c0,15.83117 12.8355,28.66667 28.66667,28.66667h40.28383v-49.88717h-16.7915v-19.52917h16.7915v-14.36917c0,-16.65533 10.18383,-25.7355 25.0475,-25.7355c5.0095,-0.01433 10.01183,0.24367 14.99267,0.7525v17.415h-10.234c-8.09833,0 -9.675,3.827 -9.675,9.47433v12.43417h19.35l-2.5155,19.52917h-16.94917v49.91583h11.36633c15.83117,0 28.66667,-12.8355 28.66667,-28.66667v-71.66667c0,-15.83117 -12.8355,-28.66667 -28.66667,-28.66667z"></path></g></g></svg>
        </a>
        <a href="/" class="ml-5 hover:text-gray transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="24" height="24"
        viewBox="0 0 172 172"
        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffeedd"><path d="M160.24308,36.92625c-1.05708,-1.09292 -2.68392,-1.40467 -4.07067,-0.76683l-0.58767,0.26875c-0.49808,0.22933 -0.99617,0.45867 -1.49783,0.68442c1.45842,-2.32558 2.61583,-4.81242 3.41492,-7.38525c0.44433,-1.419 -0.03942,-2.97058 -1.21475,-3.88792c-1.17533,-0.91733 -2.795,-1.01408 -4.06708,-0.2365c-4.08858,2.48325 -8.01592,4.27133 -12.07583,5.51833c-6.1275,-5.94475 -14.47308,-9.62125 -23.68583,-9.62125c-18.80175,0 -34.04167,15.23992 -34.04167,34.04167c0,0.01792 0,0.72742 0,1.79167l-3.57975,-0.28667c-34.84075,-4.12083 -44.75942,-27.55583 -45.1715,-28.56633c-0.6665,-1.68417 -2.13567,-2.91325 -3.90942,-3.28233c-1.77017,-0.37625 -3.60842,0.17917 -4.89125,1.45842c-0.7095,0.71308 -6.94808,7.31358 -6.94808,19.92692c0,8.987 4.00617,16.2755 9.19125,21.94433c-2.41517,-1.47275 -3.82342,-2.666 -3.85925,-2.69825c-1.65192,-1.4405 -4.01692,-1.7415 -5.98058,-0.74533c-1.9565,0.99975 -3.11033,3.08883 -2.91325,5.27825c0.06808,0.75608 1.59458,15.09658 18.16033,25.92542l-3.02075,0.54825c-1.83108,0.33325 -3.36117,1.591 -4.042,3.32533c-0.67725,1.73792 -0.41208,3.698 0.70592,5.18867c0.37625,0.50525 7.3745,9.60333 22.57142,14.835c-8.11625,2.70542 -19.26758,5.23167 -32.60475,5.23167c-2.107,0 -4.02408,1.23267 -4.89483,3.15333c-0.87433,1.92067 -0.54108,4.17458 0.84925,5.75842c0.57692,0.66292 14.56267,16.17158 50.62892,16.17158c59.88825,0 87.79167,-55.59542 87.79167,-93.16667v-1.79167c0,-0.53033 -0.05733,-1.04992 -0.07883,-1.57308c7.49633,-7.2455 10.31642,-12.68142 10.45258,-12.95017c0.67725,-1.36167 0.42642,-3.00283 -0.63067,-4.09217z"></path></g></g></svg>
        </a>
        <a href="/" class="ml-5 hover:text-gray transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="24" height="24"
        viewBox="0 0 172 172">
        <g fill="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" >
        <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffeedd"><path d="M154.671,44.333c-1.64833,-6.16333 -6.50733,-11.02233 -12.67067,-12.67067c-11.18,-2.99567 -56.00033,-2.99567 -56.00033,-2.99567c0,0 -44.82033,0 -56.00033,2.99567c-6.16333,1.64833 -11.02233,6.50733 -12.67067,12.67067c-2.99567,11.18 -2.99567,41.667 -2.99567,41.667c0,0 0,30.487 2.99567,41.667c1.64833,6.16333 6.50733,11.02233 12.67067,12.67067c11.18,2.99567 56.00033,2.99567 56.00033,2.99567c0,0 44.82033,0 56.00033,-2.99567c6.1705,-1.64833 11.02233,-6.50733 12.67067,-12.67067c2.99567,-11.18 2.99567,-41.667 2.99567,-41.667c0,0 0,-30.487 -2.99567,-41.667zM71.66667,104.619v-37.238c0,-2.75917 2.9885,-4.47917 5.375,-3.10317l32.25,18.619c2.3865,1.376 2.3865,4.83033 0,6.20633l-32.25,18.619c-2.3865,1.38317 -5.375,-0.344 -5.375,-3.10317z"></path></g></g></svg>
        </a>
        <a href="/" class="ml-5 hover:text-gray transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="24" height="24"
        viewBox="0 0 172 172"
        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffeedd"><path d="M57.33333,21.5c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333v57.33333c0,19.78717 16.04617,35.83333 35.83333,35.83333h57.33333c19.78717,0 35.83333,-16.04617 35.83333,-35.83333v-57.33333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM129,35.83333c3.956,0 7.16667,3.21067 7.16667,7.16667c0,3.956 -3.21067,7.16667 -7.16667,7.16667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667zM86,50.16667c19.78717,0 35.83333,16.04617 35.83333,35.83333c0,19.78717 -16.04617,35.83333 -35.83333,35.83333c-19.78717,0 -35.83333,-16.04617 -35.83333,-35.83333c0,-19.78717 16.04617,-35.83333 35.83333,-35.83333zM86,64.5c-11.87412,0 -21.5,9.62588 -21.5,21.5c0,11.87412 9.62588,21.5 21.5,21.5c11.87412,0 21.5,-9.62588 21.5,-21.5c0,-11.87412 -9.62588,-21.5 -21.5,-21.5z"></path></g></g></svg>            </a>
        </div>
        <div className='flex w-1/2 justify-end '>
        <a href="/" className='mx-2 text-base text-white'>Shop</a>
        <a href="/" className='mx-2 text-base text-white'>About Us</a>
        <a href="/" className='mx-2 text-base text-white'>FAQ</a>
        <a href="/" className='mx-2 text-base text-white'>Sitemap</a>
        </div>
        </div>
        </div>   
        </div>
        </footer>
 
                  
          
        
                  
            
      );
}

export default Footer;