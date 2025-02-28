import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios"
import Cards from './Cards';

function Freebook() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4002/book");
       
       const data = res.data.filter((data)=> data.category ==="free");
       console.log(data);
       setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className="max-W-screen-full mt-4 my-3 px-4">
        <div>
          <h1 className='font-bold text-xl pb-2 mt-10 md:ml-16'>Free offered books</h1>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>   
    </>
  );
}

export default Freebook;
