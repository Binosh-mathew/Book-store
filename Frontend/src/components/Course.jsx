import React from 'react';
import listData from "../data/list.json"; 
import Cards from './Cards';
function Course() {
  return ( <>
  <div className="max-w-screen-full container mx-auto md:px-20 px-4 mt-20 ">
  <div className=' grid grid-cols-1 md:grid-cols-2'>
  {
    listData.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))
  }
  </div>
  </div>
  </>
  );
}

export default Course;
