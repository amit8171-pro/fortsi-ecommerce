import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  cat1 } from '../Data/Catdata';
import Fashiondropdown from './Fashiondropdown';



export default function Header() {
  const [show, setShow] = useState(false)
  const [isShown ,setIsShown] = useState(false);
  let fashion = cat1.filter((fh)=>fh.catname==='Fashion')
  


  
  
  

  return (
  <>
   <section className='Header mx-5'>
   <div className='row align-item-center py-4'>
    <div className='col-lg-9'>
    <nav className="navbar navbar-expand-lg  my-4">
  <div className="container m-lg-auto ">
    <Link className="navbar-brand  ps-3 pe-3" to="/"><img src= {require('../assest/img/logo.jpg')} alt='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-0 mb-2 mb-lg-0">

      {cat1.map((cn)=>(
       
       <li className="nav-item"><Link className="nav-link" to={`/cat/${cn.catname}`}>{cn.catname}</Link></li>
       
  
      ))}
 
        <li className="nav-item dropdown" onClick={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)}>
          <Link className="nav-link " to="cat" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          
          <ul className="dropdown-menu">

            <li><Link className="dropdown-item py-2" to="cat">Automobiles</Link></li>
            <li><Link className="dropdown-item py-2" to="cat">Jewellery</Link></li>
            <li><Link className="dropdown-item py-2" to="cat">Furniture</Link></li>
            <li><Link className="dropdown-item py-2" to="cat">Featured</Link></li>
            
           
            
          </ul>
       
        </li>
      
      </ul>
    
    </div>
  </div>
   </nav>

    </div>
    <div className='col-lg-3  text-end'>
    
    <div className="right-drop dropdown d-inline-block py-2 lg ">

<button className="btn btn dropdown-toggle border-none " type="button" data-bs-toggle="dropdown" aria-expanded="false">
  My Account
 
</button>
 <span className='profile'><i className="bi bi-person"></i></span>
<ul className="dropdown-menu">


  <li><Link className="dropdown-item" to={"cat"}>Sign in</Link></li>
  <li><Link className="dropdown-item" to={"cat"}>Wishlist</Link></li>
  <li><Link className="dropdown-item" to={"cat"}>Compare</Link></li>


</ul>


</div>
<div className='icon-right d-inline-block'>

<i  className="bi bi-search" onClick={() => setShow(!show)}></i>
<i  className= "bi bi-x d-none" /* {show ? "bi bi-x " : null} */></i>
<div className='input-box d-none'>
  <input type='text' placeholder='search..' value='' name='search'/></div>


  

  <span className='rightcard'><i className="bi bi-cart"></i></span>
  <span className='counti'>0</span>
</div>
    





    </div>
  
   </div>
   


  

   </section>
  </>
  )
}
