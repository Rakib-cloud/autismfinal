import React from 'react';

const Stat = () => {
    return (
        <div class="stats shadow mx-80 mt-5">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Course Buy</div>
    <div class="stat-value text-primary">150</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-secondary">3.5k</div>
    <div class="stat-desc">11% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rmd0g-KU22PYB6Vvous45MDkiglM0IoCWB-HsM1y6w&s" />
        </div>
      </div>
    </div>
    <div class="stat-value">500</div>
    <div class="stat-title">Total patient</div>
    <div class="stat-desc text-secondary">recovary</div>
  </div>
  
</div>
    );
};

export default Stat;