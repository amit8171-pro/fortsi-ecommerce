import React from 'react'
import { Featured } from '../Data/Catdata'
import { Link } from 'react-router-dom'

export default function Newproductlist() {
  return (
  <>
    <div className='discount-img'>
        <img src={require('../assest/img/left-banner-1.jpg')}/>
    </div>
   
    <div className='card my-3 newproduct-card'>
    <div className='body-title'>
        <p className='p-4 fw-bold'>New Products</p>
    </div>
    {Featured.slice(0,3).map((fi)=>(
        
       <>
       <div className='row card-body justify-content-center'>
        
            
        <div className='col-md-6 mb-4 card-text'>
      
        <img src={fi.img} alt='feature-img' className='w-100'/>
      
        </div>
        <div className='col-md-6 listinfo card-text'>
      
            <p><Link to={'/'}>{fi.title}</Link></p>
            <hr className='w-75'></hr>
            <h6>{fi.price}</h6>  
               
        </div>

      
      
        
       </div>
       </>
      
       ))}
       <p className='text-end pe-4'><Link to={'/'}>All New Products</Link></p>
     </div>

     <div className='card my-3 blog-card'>
    <div className='body-title'>
        <p className='p-4 fw-bold text-dark fs-6'>Blog Catagories</p>
    </div>
    <div className='body-text'>
        <p className='ps-4'>Vestibulum consequat</p>
       <p className='ps-4'>Pellentesque condimentum</p>
       <p className='ps-4'>Suspendisse turpis</p>
    </div>
    </div>
   
  </>
  )
}
