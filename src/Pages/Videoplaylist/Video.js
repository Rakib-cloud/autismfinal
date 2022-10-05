import React from 'react';
import './style.css';
import v1 from './images/vid-1.mp4';
import v2 from './images/vid-2.mp4';
import v3 from './images/vid-3.mp4';
import v4 from './images/vid-4.mp4';
import v5 from './images/vid-5.mp4';
import v6 from './images/vid-6.mp4';
import v7 from './images/vid-7.mp4';
import v8 from './images/vid-8.mp4';
import v9 from './images/vid-9.mp4';
const Video = () => {

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
        <div>
            <h3 className=' mt-20 font-bold text-center '>All lessons for this course</h3>
            <div class="container">
             
<div class="main-video-container">
   <video src={v1} loop controls class="main-video"></video>
   <h3 class="main-vid-title">house flood animation</h3>
</div>

<div class="video-list-container">

   <div class="list active">
      <video src={v1} class="list-video"></video>
      <h3 class="list-title">house flood animation</h3>
   </div>

   <div class="list">
      <video src={v2} class="list-video"></video>
      <h3 class="list-title">zoombie walking animation</h3>
   </div>

   <div class="list">
      <video src={v3} class="list-video"></video>
      <h3 class="list-title">emoji falling animation</h3>
   </div>

   <div class="list">
      <video src={v4} class="list-video"></video>
      <h3 class="list-title">3D town animation</h3>
   </div>

   <div class="list">
      <video src={v5} class="list-video"></video>
      <h3 class="list-title">man chasing carrot animation</h3>
   </div>

   <div class="list">
      <video src={v6} class="list-video"></video>
      <h3 class="list-title">door hinge animation</h3>
   </div>

   <div class="list">
      <video src={v7} class="list-video"></video>
      <h3 class="list-title">poeple walking in town animation</h3>
   </div>

   <div class="list">
      <video src={v8} class="list-video"></video>
      <h3 class="list-title">knight chasing virus animation</h3>
   </div>

   <div class="list">
      <video src={v9} class="list-video"></video>
      <h3 class="list-title">3D helicopter animation</h3>
   </div>

</div>

</div>

        </div>
    );
};

export default Video;