import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter((data)=>data.category === "free");
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
    <div className="max-W-screen-full mt-4 my-3  px-4">
    <div>
      <h1 className='font-bold text-xl pb-2 mt-10 md:ml-16'>Free offered books</h1>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
         <Cards item={item} key={item.id} />
        ) )}
      </Slider>
    </div>
 </div>   
 </>  
  );
}

export default Freebook
