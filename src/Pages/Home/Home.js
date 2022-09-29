import React from 'react';
import Topnav from '../Topnav/Topnav';
import Footer from '../Shared/Footer/Footer'
import Onlinecourse from '../Onlinecourse/Onlinecourse';
import Stat from '../Stat/Stat';
import Testimonial from '../Testimonial/Testimonial';
import Slider from './Slider';



const Home = () => {
    return (
        <div>
           <Topnav></Topnav>
           <Onlinecourse></Onlinecourse>
           <Slider></Slider>
           <Stat></Stat>
           <Testimonial></Testimonial>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;