import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
const About = () => {
    return (
        <div>
            <h5 className='text-center'>About us</h5>
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
                  <h2 className='font-bold'>Autism Care</h2>
                  <p>
                  We are a Bangladeshi online educational platform that enables parents and caregivers of children with special needs to learn from our online courses and then apply what they've learned to the care that they provide for their children. Within our platform, we make available information, direction, and resources pertaining to autism. Because of the high cost of living in our country, not all parents are in a position to give their autistic child the care, instruction, and education they need. On the other hand, we are able to provide parents with training course videos that, once they have completed the course, they can use on their own children. These classes are available to you at a very reasonable price.
                  </p>
                 </div>

                 <div className='text-center font-bold mt-5'>
                  <h2>About Our Team</h2>
                 </div>
        </div>
    );
};

export default About;