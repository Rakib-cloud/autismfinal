import React from 'react';
import back from '../../autism.jpg';
import { Link } from 'react-router-dom';
const Topnav = () => {
 
    return (
      
       <div >
      <div class="hero min-h-screen" style={{
        background: `url(${back})`,
        backgroundSize: 'cover'
    }}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">WELCOME TO AUTISM CARE</h1>
      <p class="mb-5 text-xl font-bold">Best Online Autism care near you</p>
      <p class="mb-5">This platform that helps parents teach their autistic children daily activities at
a lower cost.</p>
<p> <Link className='px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 ' to="/allcourse">Get Started</Link></p>
    </div>
  </div>
</div>
       </div>
    );
};

export default Topnav;