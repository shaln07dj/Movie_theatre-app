import React from 'react';
import { useSelector, useDispatch } from "react-redux";

 const Movies=() =>{
  const {movies,status,error}=useSelector(state=>state.movieSlice)
    return (
      <div >
         
      </div>
    )
  }

export default Movies;
