import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';

import t1 from './team/1.png';
import t2 from './team/2.png';
import t3 from './team/3.png';
import t4 from './team/4.png';
import t5 from './team/5.png';

import './About.css';
const About = () => {
    return (
        <div>
            <h5 className='text-center text-emerald-400 font-bold text-lg'>About us</h5>
            <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
    <img src={img1} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img2} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img3} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img4} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img5} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img6} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img src={img7} alt="Drink" />
  </div>
</div>
                 <div className='text-center font-bold mt-5'>
                  <h2 className='font-bold text-emerald-400 text-lg'>Autism Care</h2>
                  <p>
                  We are a Bangladeshi online educational platform that enables parents and caregivers of children with special needs to learn from our online courses and then apply what they've learned to the care that they provide for their children. Within our platform, we make available information, direction, and resources pertaining to autism. Because of the high cost of living in our country, not all parents are in a position to give their autistic child the care, instruction, and education they need. On the other hand, we are able to provide parents with training course videos that, once they have completed the course, they can use on their own children. These classes are available to you at a very reasonable price.
                  </p>
                 </div>

                 <div className='text-center font-bold mt-5 text-emerald-400 text-lg'>
                  <h2>About Our Team</h2>
                 </div>

                 <div class="grid gap-x-8 gap-y-4 grid-cols-3 ml-3 mt-5">
                 <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
  <img class="w-full " src={t1} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Fahim Ul Haque</div>
    <p class="text-gray-700 text-base">
      Backend Designer and Node js expert
    </p>
  </div>
 
</div>
                 </div>
                 {/* item 2 */}
                <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full high" src={t2} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Md. Miraz faruk</div>
    <p class="text-gray-700 text-base">
     Backend Designer and Node js expert
    </p>
  </div>
  
</div>
                </div>
                {/* item 3 */}
                <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full high" src={t3} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Jahidul Islam Shifat</div>
    <p class="text-gray-700 text-base">
      Ui,Ux Designer.Wareframe Model Design Expert
    </p>
  </div>

</div>
                </div>
                {/* item 4 */}
                <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full " src={t4} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Md. Touhidul Hoque</div>
    <p class="text-gray-700 text-base">
      Front-end Designer.Full Stack Expert.
    </p>
  </div>
  
</div>
                </div>
                <div className=''>
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
  <img class="w-full" src={t5} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Tanvir alam hriday</div>
    <p class="text-gray-700 text-base">
      Front-end Designer.SQA expert.
    </p>
  </div>
 
</div>
                </div>
                  </div>
        </div>
    );
};

export default About;