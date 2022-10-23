import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './style.css';
import ReactHlsPlayer from 'react-hls-player';

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

  //video function 

  let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});
  
  return (
    <div >
      <div class="card bg-base-100 shadow-2xl w-1/2  items-center ml-64" >


        <figure class="px-10 pt-10">
          <img src={product.image} alt="" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Course Name:{product.courseName}</h2>
          <p>Institution Name:{product.institutionName}</p>
          <p>Course Duration:{product.courseDuration}<span>Months</span></p>
          <p>Coursedetails:{product.courseDetails}</p>
          <p>course price :{product.coursePrice} <span>BDT </span></p>
          <p>course code: <span className='text-red-600'>{product.code}</span></p>

          {
            purchased ? <><label htmlFor="my-modal-3" className="btn modal-button">Buy Course</label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold text-green-500">You Have Successfully Purchased The Course</h3>
                  <p className="py-4">Enjoy Your Content</p>
                  
                </div>
              </div></> : <>
              <label htmlFor="my-modal-3" className="btn modal-button">Buy Now</label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold">Buy The Course</h3>
                  <p className="py-4">Please contact at 01710005671 and pay your course fee first.</p>
                </div>
              </div>
            </>
          }
         
          


        </div>


      </div>
      <div>
        {/* adding conent  */}
                   {
                    purchased ? <div className='mt-5 text-center text-green-900 '>
                      
                    <p>Course quiz link: {product.drive} </p>
                    <p>Course ppt link: {product.ppt}</p>
                    <p>Course video : {product.video}</p>
                    <div>
            <h3 className=' mt-20 font-bold text-center '>Lession Video player</h3>
            {/* <div className='c '>
            <ReactHlsPlayer
    src={product.video}
    autoPlay={false}
    controls={true}
    className="content-center"
    // width="30%"
    // height="50%"
  />
            </div> */}

<div class="container">

<div class="main-video-container">
   
   <ReactHlsPlayer
    src={product.video}
    autoPlay={false}
    controls={true}
    className="content-center"
    loop controls class="main-video"
    // width="30%"
    // height="50%"
  />
   <h3 class="main-vid-title">Lesson1</h3>
</div>

<div class="video-list-container">

   <div class="list active">
   <ReactHlsPlayer
    src={product.video}
    autoPlay={false}
    controls={true}
    className="content-center list-video"
    // width="30%"
    // height="50%"
  />
      <h3 class="list-title">lesson1</h3>
   </div>

   <div class="list">
   <ReactHlsPlayer
    src={product.video}
    autoPlay={false}
    controls={true}
    className="content-center list-video"
    // width="30%"
    // height="50%"
  />
      <h3 class="list-title">lesson2</h3>
   </div>

   <div class="list">
   <ReactHlsPlayer
    src={product.video}
    autoPlay={false}
    controls={true}
    className="content-center list-video"
    // width="30%"
    // height="50%"
  />
      <h3 class="list-title">lesson3</h3>
   </div>

   

  

   

   

  

   

</div>

</div>



        </div>
                </div>
                :
                  <div className='text-center text-red-500 mt-5 text-4xl'>
                        <p>Please follow Instruction for buying a course</p>
                  </div>
                   }
      </div>
    </div>
  );
};

export default Purchasedetails;

