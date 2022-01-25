import React from 'react';
import { useState } from "react";
import { useSelector } from 'react-redux';
const Home = () => {
  const [ren,setRen]=useState(false)
  const {movies,status,error} = useSelector(state=> state.movieSlice);
  console.log(movies)
  const handleClick=()=>{
    setRen(!ren)
    console.log(ren)
    console.log("clicked")
  }
  return <div>
  <div>
    
  


  </div>

  </div>;
};

export default Home;
