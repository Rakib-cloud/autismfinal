import React from 'react';
import './Contact.css';
import img1 from "./img/location.png"
import img2 from "./img/email.png"
import img3 from "./img/phone.png"
import img4 from "./img/shape.png"
const Contact = () => {
    return (
    //     <section id="section-wrapper">
    //     <div class="box-wrapper">
    //         <div class="info-wrap">
    //             <h2 class="info-title">Contact Information</h2>
    //             <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
    //             <ul class="info-details">
    //                 <li>
    //                     <i class="fas fa-phone-alt"></i>
    //                     <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
    //                 </li>
    //                 <li>
    //                     <i class="fas fa-paper-plane"></i>
    //                     <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
    //                 </li>
    //                 <li>
    //                     <i class="fas fa-globe"></i>
    //                     <span>Website:</span> <a href="#">yoursite.com</a>
    //                 </li>
    //             </ul>
    //             <ul class="social-icons">
    //                 <li><a href="#"><i class="fab fa-facebook"></i></a></li>
    //                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
    //                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
    //             </ul>
    //         </div>
    //         <div class="form-wrap">
    //             <form action="#" method="POST">
    //                 <h2 class="form-title">Send us a message</h2>
    //                 <div class="form-fields">
    //                     <div class="form-group">
    //                         <input type="text" class="fname" placeholder="First Name"/>
    //                     </div>
    //                     <div class="form-group">
    //                         <input type="text" class="lname" placeholder="Last Name"/>
    //                     </div>
    //                     <div class="form-group">
    //                         <input type="email" class="email" placeholder="Mail"/>
    //                     </div>
    //                     <div class="form-group">
    //                         <input type="number" class="phone" placeholder="Phone"/>
    //                     </div>
    //                     <div class="form-group">
    //                         <textarea name="message" id="" placeholder="Write your message"></textarea>
    //                     </div>
    //                 </div>
    //                 <input type="submit" value="Send Message" class="submit-button"/>
    //             </form>
    //         </div>
    //     </div>
    // </section>
    <div class="container">
      <span class="big-circle"></span>
      <img src={img4} class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src={img1} class="icon" alt="" />
              <p>Madani evenue ,Dhaka-1212</p>
            </div>
            <div class="information">
              <img src={img2} class="icon" alt="" />
              <p>Autism_Care@gmail.com</p>
            </div>
            <div class="information">
              <img src={img3} class="icon" alt="" />
              <p>0170000000</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default Contact;