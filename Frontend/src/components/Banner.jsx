import React from 'react';
import banner from "../assets/banner.png";
import { useNavigate } from 'react-router-dom';

<img src={banner} alt="Banner" />;

function Banner() {
  const navigate = useNavigate(); 
  return (
    <>
    <div className="max-W-screen-2x1 container max-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
       <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hello,Welcomes here to learn Something <span className='text-pink-500'>new everyday!!!</span></h1>
        <p className='text-xl'>
        From a stunning first sentence to a perfect string of dialogue, there are certain parts of books that feel particularly memorable. And whether they make us laugh, cry, or simply reflect, these book quotes have a habit of sticking with us long after we turn the final page. Read on for some of the best book quotes we won’t ever forget.
        </p>
    
      </div>
      <button className=" mt-6 btn btn-secondary"  onClick={() => navigate("/signup")}>Get Start</button>
    </div> 
      <div className='order-1 w-full  md:w-1/2 px-25 mt-14 ml-15'>
       <img src={banner} alt=''/>
       
      </div>
    </div>  
    </>
  )
}

export default Banner
