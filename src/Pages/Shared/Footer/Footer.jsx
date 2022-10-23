import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding foot'>
          <div className='box logo'>
            <h1>Autism Care</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>We provide parents with appropriate guidelines, knowledge, information, training and consultation about caring for special needs children.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/forum">Forum</Link></li>
              <li><Link to="/allcourse">All Course</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
               Dhaka,Bangladesh
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                01111334444
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                autismcarebd@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved <i className='fa fa-heart'></i> 
        </p>
      </div>
      </footer>
      
    </>
  )
}

export default Footer
