import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from "axios"
function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4002/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  return ( <>
  <div className="max-w-screen-full container mx-auto md:px-20 px-4 mt-20 ">
  <div className=' grid grid-cols-1 md:grid-cols-2'>
  {
    book.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))
  }
  </div>
  </div>
  </>
  );
}

export default Course;
