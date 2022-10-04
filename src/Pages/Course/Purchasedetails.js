import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchasedetails = () => {
     const { _id } = useParams();
     
  const [product, setProduct] = useState([]);

// akta api node js e create korte hobe 
  useEffect(() => {
    fetch(`https://autism60089s.herokuapp.com/course/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [_id])
  
    return (
        <div>
            <div class="card w-1/2 bg-base-100 shadow-2xl">
       
                 
                 <figure class="px-10 pt-10">
          <img src={product.image } alt="" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Course Name:{product.courseName}</h2>
          <p>Institution Name:{product.institutionName}</p>
          <p>Course Duration:{product.courseDuration}</p>
          <p>Coursedetails:{product.courseDetails}</p>
          <p>course price:{product.coursePrice}</p>

        </div>
                 
               
      </div>
   
        </div>
    );
};

export default Purchasedetails;

