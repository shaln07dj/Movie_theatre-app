

 import React, { useState } from 'react'
 import clsx from 'clsx'
 import { useSelector, useDispatch } from "react-redux";
 import '../styles/seatstyles.css';



 const allmovies = {
   
     occupied: [],
   };
  

 
 console.log(allmovies)
 
 const seats = Array.from({ length: 16 * 20 }, (_, i) => i)
 
 export default function SeatBooking() {
   const [selectedMovie, setSelectedMovie] = useState(allmovies)
   const [selectedSeats, setSelectedSeats] = useState([])
   const {movies,status,error}=useSelector(state=>state.movieSlice)
  //  console.log(movies.indexof())
  movies?allmovies.details=movies:allmovies=allmovies
  console.log(allmovies)
  const abs=movies
  console.log(abs)
  
 
 
   return (
     <div className="seatApp">
       {/* <Movies
         movie={selectedMovie}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
         }}
       /> */}
       <Till movies={movies}/>
       <ShowCase />
       <Cinema
         movie={selectedMovie}
         selectedSeats={selectedSeats}
         onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
       />
 
       <p className="info">
         You have selected <span className="count">{selectedSeats.length}</span>{' '}
         seats for the price of{' '}
         <span className="total">
         ₹ {selectedSeats.length * selectedMovie.price}
         </span>
       </p>
     </div>
   )
 }
 
//  function Movies({ movie, onChange }) {
//    return (
//      <div className="Movies">
//        <label htmlFor="movie">Pick a movie</label>
//        <select
//          id="movie"
//          value={movie.name}
//          onChange={e => {
//            onChange(allmovies.find(movie => movie.name === e.target.value))
//          }}
//        >
//          {allmovies.map(movie => (
//            <option key={movie.name} value={movie.name}>
//              {movie.name} (${movie.price})
//            </option>
//          ))}
//        </select>
//      </div>
//    )
//  }
 function Till({movies}){
   console.log(movies[0]?.name)
   return(
   <div style={{'width':'100%'}}>
        <div style={{'marginRight':' 20px','marginLeft':' 20px','height':'150px','backgroundColor':'#26243b','zIndex':'-2','alignItems':'center'}}>
        <div style={{'display':'flex','width':'100%','height':'100%'}}><div style={{'display':'flex','width':'70%'}}>
         <div style={{'marginTop':'25px','marginLeft':'100px'}}><h1>{movies[0]?.name}</h1></div></div>
        <div style={{'display':'flex','width':'30%'}}>
       
          <div style={{'marginTop':'25px','display':'flex','width':'30%'}} ><h1>Dir</h1></div>
          <div style={{'display':'flex','width':'70%'}}>
            <div style={{'marginTop':'25px','marginLeft':'20px'}}><h1>Crew</h1></div></div>
          </div></div></div>
      
      </div>
   )
 }
 function ShowCase() {
   return (
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>N/A</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Selected</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Occupied</small>
       </li>
     </ul>
   )
 }
 
 function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
   function handleSelectedState(seat) {
     const isSelected = selectedSeats.includes(seat)
     
     if (isSelected) {
       onSelectedSeatsChange(
         selectedSeats.filter(selectedSeat => selectedSeat !== seat),
       )
     } else {
       onSelectedSeatsChange([...selectedSeats, seat])
     }
   }
 
   return (
     <div className="Cinema">
       <div className="screen" />
 
       <div className="seats">
         {seats.map(seat => {
           const isSelected = selectedSeats.includes(seat)
           const isOccupied = movie.occupied.includes(seat)
           return (
             <span
               tabIndex="0"
               key={seat}
               className={clsx(
                 'seat',
                 isSelected && 'selected',
                 isOccupied && 'occupied',
               )}
               onClick={isOccupied ? null : () => handleSelectedState(seat)}
               onKeyPress={
                 isOccupied
                   ? null
                   : e => {
                       if (e.key === 'Enter') {
                         handleSelectedState(seat)
                       }
                     }
               }
             />
           )
         })}
       </div>
     </div>
   )
 }
 
// import React, { useState } from 'react'
// import clsx from 'clsx';
// import { useSelector, useDispatch } from "react-redux";
// import '../styles/seatstyles.css';
// import {movieSlice} from '../slice/MoviesSlice'
// import Cinema from './Cinema';


// const SeatBooking = () => {


//     const row=['A','B','C','D','E','F','G','H']
//     const col=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
//     const [selectedMovie, setSelectedMovie] = useState(movies[0])
//   const [selectedSeats, setSelectedSeats] = useState([])


//   return (
//     <div className="seatApp">
     
//       {/* <ShowCase /> */}
//       <Cinema
//         movie={selectedMovie}
//         selectedSeats={selectedSeats}
//         onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
//       />

//       <p className="info">
//         You have selected <span className="count">{selectedSeats.length}</span>{' '}
//         seats for the price of{' '}
//         <span className="total">
//         ₹ {selectedSeats.length * selectedMovie.price}
//         </span>
//       </p>
//     </div>
//   )
// }



//       {/* <div className=''>
//       <table>
//   {
//     row.map((item,index)=><tr key={index}>
      
//     <th>{item}</th>
//     <th>{col.map((item,index)=><td key={index} value={item}><div style={{'marginLeft':'50px'}}>{item}</div></td>)}</th></tr>
//     )}

// </table>
//       </div> */}






// export default SeatBooking;
