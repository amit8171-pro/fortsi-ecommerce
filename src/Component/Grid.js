import React from 'react'
import { Featured } from '../Data/Catdata'

export default function Grid() {
  return (
   <>
    <section>
        <div className='Gridbody d-flex flex-wrap gap-4'>
        {Featured.map((fi)=>(
                <div className='item pt-3 pb-2'>
                <img src={fi.img} alt='feature-img'/>
            <p>{fi.title}</p>
            <h6>{fi.price}</h6>
        
                         
                    </div>
                    
                    ))}
      
     
        </div>
    </section>
   </>
  )
}
