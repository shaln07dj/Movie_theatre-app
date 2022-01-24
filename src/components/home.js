import React from 'react';
import { useState } from "react";

const Home = () => {
  const [ren,setRen]=useState(false)
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
