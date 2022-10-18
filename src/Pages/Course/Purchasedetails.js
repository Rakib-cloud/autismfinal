import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Purchasedetails = () => {
  const { _id } = useParams();

  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [userCourses, setUserCourses] = useState([]);
  console.log("🚀 ~ file: Purchasedetails.js ~ line 14 ~ Purchasedetails ~ userCourses", userCourses);
  // console.log("🚀 ~ file: Purchasedetails.js ~ line 14 ~ Purchasedetails ~ userInfo", userInfo);

  // akta api node js e create korte hobe 
  useEffect(() => {
    fetch(`https://autism60089s.herokuapp.com/course/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [_id]);

  useEffect(() => {
    fetch(`https://autism60089s.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(data => { setUserInfo(data); setUserCourses(data.courses); });
  }, [user?.email]);

  const purchased = userCourses.find(code => code === product.code);
 

  return (
    <div >
      <div class="card bg-base-100 shadow-2xl w-1/2  items-center ml-64" >


        <figure class="px-10 pt-10">
          <img src={product.image} alt="" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Course Name:{product.courseName}</h2>
          <p>Institution Name:{product.institutionName}</p>
          <p>Course Duration:{product.courseDuration}</p>
          <p>Coursedetails:{product.courseDetails}</p>
          <p>course price:{product.coursePrice}</p>
          <p>course code: <span className='text-red-600'>{product.code}</span></p>

          {
            purchased ? <><label htmlFor="my-modal-3" className="btn modal-button">open modal</label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold text-green-500">You Have Successfully Purchased The Course</h3>
                  <p className="py-4">Enjoy Your Content</p>
                  
                </div>
              </div></> : <>
              <label htmlFor="my-modal-3" className="btn modal-button">open modal</label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold">Buy The Course</h3>
                  <p className="py-4">Please Contact to the publisher with number +8801777777777</p>
                </div>
              </div>
            </>
          }
         
          


        </div>


      </div>
      <div>
        {/* adding conent  */}
                   {
                    purchased ? <div className='mt-5 text-center'>
                    <p>Course quiz link: {product.drive}</p>
                    <p>Course ppt link: {product.ppt}</p>
                    <p>Course video : {product.video}</p>
                </div>
                :
                  <div>
                        <p>Please follow Instruction for buying a course</p>
                  </div>
                   }
      </div>
    </div>
  );
};

export default Purchasedetails;

