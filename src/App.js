import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './Scss/style.scss';
import './Scss/responsive.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Catgories from './Pages/Catgories';



export default function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='cat/:cid' element={<Catgories/>}/>

    
   </Routes>

   </>
  )
}