import logo from './logo.svg';
import './App.css';

import Navbar from './components/nav';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from './store/cardSlice';
import { useEffect } from 'react';


import { Outlet } from 'react-router-dom';
 


function App() {


  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getFilms())
  },[dispatch])


const {movie} = useSelector((state) => state.movie)
console.log(movie)
  return (
    <div className="App bg-dark">
      <Navbar  fixed="top"/>
     <Outlet/>
     {/* 
  <Slider movie={movie} />*/}
      
    </div>
  );
}

export default App;
