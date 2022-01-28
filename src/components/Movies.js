import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import '../styles/moviestyles.css';
 const Movies=() =>{
   const movie=[1,2,3,4,5,6,7,8,9,10,11,12]
  const {movies,status,error}=useSelector(state=>state.movieSlice)
    return (
      <div className='moviePage'>
        <div className='outer'>
          <div className='innerFlex'>
            <div className='leftFlex'>
            <div className='leftFlexContent'>
              <h2>Filter</h2>



            </div>
            </div>
              <div className='rightFlex'>
              <div className='rightFlexContent'>
                <h2>Movies</h2>
              <div className='moviesbox'>
                <div className='movies'>{
                  movies.map((item,index)=>{
                      return(
                        <span tabIndex='0'
                        key={index}
                        style={{"marginLeft":"0px","width":"250px",'height':'600px'}}>
                 <div className="card"  style={{height:"500px",backgroundImage: `url()`,'objectFit':'cover'}}>
                   {/* <img src={`http://localhost:8000${item.image}`}width='100%'height='100%'/> */}
                   <div style={{height:"400px",width:"250px"}}>
                   
                       <Link onClick={()=>{}}to='/movies' ><img src={`http://localhost:8000${item.image}`} alt="Pushpa: The Rise - Part 01" width="100%" height="100%"></img></Link> </div> 
                        <div style={{'marginBottom':'0px','height':"200px"}}><div><h5><b>{item.name}</b> </h5></div>
                        <div><h6 style={{'color':' rgba(197, 194, 194, 0.897)','fontWeight':'400'}}>{item.category}</h6></div></div> 
                            
                          </div>
                        </span>

                    
                      )
                  }
                  )
                }
                  
                </div>
                
              </div>


                </div>
            
            </div>
          </div>


        </div>
         
      </div>
    )
  }

export default Movies;
