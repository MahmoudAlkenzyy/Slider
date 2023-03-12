import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './store/configyreStore';
import{ createBrowserRouter, RouterProvider }from 'react-router-dom'

import SignUP from './components/signUp/signUp';
import LogIn from './components/logIn/loginPage';
import Homa from './components/home/homePage.js';
import Slider from './components/slider/slider';




const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
      path: '/home',
    element: <App />,
    children: [
      
      
    
      {
        path: 'login',
        element: <LogIn  />
      },
      {
        path:'homaPage',
        element:<Homa/>
      },
      ]
  },
  {
    path: '/',
    element:<SignUP/>
  }
  ]) 
root.render(
  
  
    <Provider store={Store}>
      <RouterProvider router={routes} />
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
