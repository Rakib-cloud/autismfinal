import React from 'react';
import back from '../../autism.jpg';
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
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
       </div>
    );
};

export default Topnav;