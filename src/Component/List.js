import React from 'react'
import { Link } from 'react-router-dom';
import { Featured } from '../Data/Catdata';


export default function List() {
   
  return (
   <>
    <section>
    {Featured.map((fi)=>(
        <div className='row justify-content-center'>
        
            
            <div className='col-md-3 mb-4'>
          
            <img src={fi.img} alt='feature-img'/>
          
            </div>
            <div className='col-md-9 listinfo'>
          
                <p><Link to={'/'}>{fi.title}</Link></p>
                <hr className='w-75'></hr>
                <h6>{fi.price}</h6>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
               
               <div className='checkstock d-flex align-items-center'>
               <div className="form-check m-2">
                <input className="form-check-input bg-white" type="checkbox" value="" id="flexCheckChecked" />
                </div>
                <div className="form-check  m-2">
                <input className="form-check-input bg-primary" type="checkbox" value="" id="flexCheckChecked" />
                </div>
                <div className="form-check  m-2">
                <input className="form-check-input bg-info" type="checkbox" value="" id="flexCheckChecked" />
                </div>
                <span className='stock '>In stock</span>
               </div>
               
                <p><Link to={'/'} className='btn btn-secondary mt-5'>Add to card</Link></p>
             
                    
                   
            </div>
          
            
        </div>
        ))}
    </section>
   </>
  )
}
