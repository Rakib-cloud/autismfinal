import React from 'react';
import quote from '../../quote.svg';
import people1 from '../../people1.png'
import people2 from '../../people2.png'
import people3 from '../../people3.png'
import Review from './Review';
import './Test.css';
const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-28 mt-8'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center  mar">Testimonials</h4>
                    <h2 className='text-3xl text-center mar '>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
      {/* newslatter */}
<div class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" class="h-full xl:w-full lg:w-1/2 w-full" />
            </div>
            <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                <p class="text-base leading-normal text-gray-600 text-center xl:text-left">Please stay with us</p>
                <div class="flex items-stretch mt-12">
                    <input class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                    <button class="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                </div>
            </div>
            
        </div>
        </section>

    );
};

export default Testimonial;