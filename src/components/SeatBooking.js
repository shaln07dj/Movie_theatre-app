/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */


 import React, { useState } from 'react'
 import clsx from 'clsx'
 import { useSelector, useDispatch } from "react-redux";
 import '../styles/seatstyles.css';
 const allmovies = [
   {
     name: 'Avenger',
     price: 10,
     occupied: [20, 21, 30, 1, 2, 8],
   },
   {
     name: 'Joker',
     price: 12,
     occupied: [9, 41, 35, 11, 65, 26],
   },
   {
     name: 'Toy story',
     price: 8,
     occupied: [37, 25, 44, 13, 2, 3],
   },
   {
     name: 'the lion king',
     price: 9,
     occupied: [10, 12, 50, 33, 28, 47],
   },
 ]
 
 const seats = Array.from({ length: 12 * 8 }, (_, i) => i)
 
 export default function SeatBooking() {
   const [selectedMovie, setSelectedMovie] = useState(allmovies[0])
   const [selectedSeats, setSelectedSeats] = useState([])
   const {movies,status,error}=useSelector(state=>state.movieSlice)
   console.log(movies)
 
   return (
     <div className="seatApp">
       {/* <Movies
         movie={selectedMovie}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
         }}
       /> */}
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
