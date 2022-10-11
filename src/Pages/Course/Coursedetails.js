import React from 'react';
import { Link } from 'react-router-dom';

const Coursedetails = ({ tool }) => {
    const { _id, courseName, institutionName, courseDuration, courseDetails, coursePrice, image, code } = tool;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <p class=" font-bold text-secondary">Course Name:{courseName}</p>
                <img src={image} alt="" />
                <p class=" font-bold text-secondary">Instituion Name:{institutionName}</p>
                <p class=" font-bold text-secondary">Course Duration:{courseDuration}</p>
                <p class=" font-bold text-secondary">Course Details :{courseDetails}</p>
                <p class=" font-bold text-secondary">price :{coursePrice}</p>
                <p class=" font-bold text-secondary">code : {code}</p>
                <Link to={`/purchase/${_id}`} className="btn btn-accent" >Purchuse</Link>

            </div>
        </div>
    );
};

export default Coursedetails;