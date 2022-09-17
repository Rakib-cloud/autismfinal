import React from 'react';
import './Head.css'
const Head = () => {
    return (
        <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>AUTISM CARE</h1>
            <span>Autism ,Think different</span>
          </div>
         {/* must added all social link */}
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          
        </div>
      </section>
    </>
    );
};

export default Head;