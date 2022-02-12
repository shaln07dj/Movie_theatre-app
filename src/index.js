import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import movieSlice,{movieFetch} from './slice/MoviesSlice';
import movieDetailSlice from './slice/movie';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';




import reportWebVitals from './reportWebVitals';

const store=configureStore({
  reducer:{
    movieSlice,
    movieDetailSlice
  }
})
store.dispatch(movieFetch());
ReactDOM.render(
 
<Provider store={store}>
  <App/>
</Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
