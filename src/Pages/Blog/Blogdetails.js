import React from 'react';

const Blogdetails = ({ tool }) => {
    const {title,desc,cover } = tool;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <p class=" font-bold text-secondary">{title}</p>
            <img src={cover} alt="" />
            <p class=" font-bold text-secondary">{desc}</p>
             
           
           
        </div>
    </div>
        </div>
    );
};

export default Blogdetails;