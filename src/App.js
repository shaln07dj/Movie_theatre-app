
import './App.css';

import Home from './components/home';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

import SeatBooking from './components/SeatBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route  path="/home"element={<Home/>}/>
      <Route path='/seat'element={<SeatBooking />}/>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
