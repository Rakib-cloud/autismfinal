import React from 'react';
import { homeAbout } from "../../dummydata"
// import './online.css'
const Onlinecourse = () => {
    return (
        <div className='aboutHome'>
            <div class="card lg:card-side bg-base-100 shadow-xl mt-5 ml-5">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWadc24w140z0xYNgJzh63vxAZ8vdwHufFLw&usqp=CAU" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="text-cyan-400 text-lg">LEARN ANYTHING</h2>
    <p className='text-cyan-400 text-lg '>Benefits About Our Online Learning Care</p>
    <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text-cyan-400 text-lg '>
                      <div>{val.title}</div>
                      <div>{val.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Continue</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Onlinecourse;