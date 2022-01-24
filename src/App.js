
import './App.css';
import Home from './components/home';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route  path="/home"element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    
      <Home/>
    </div>
  );
}

export default App;
