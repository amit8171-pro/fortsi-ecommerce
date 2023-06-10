import React from 'react';
import { Featured, FeatureHead } from '../Data/Catdata';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Feature() {

   
  return (
  <>
  <section>
    
    <div className='container'>
    <h1 className='mt-5'>Featured Products</h1>
  
  
   <ul class="list-inline">
   {FeatureHead.map((fh)=>(
  <li class="list-inline-item ps-0 px-4 py-3">{fh.catName}</li>
 
  ))}
  </ul>
  

   

    <div className='row flex-wrap flex-column'>
    
     
            <div className='col-md-12'>
            <OwlCarousel className='owl-theme featitem' loop margin={10} items={5}   nav>
    {Featured.map((fi)=>(
                <div className='item pt-3 pb-2'>
                <img src={fi.img} alt='feature-img'/>
            <p>{fi.title}</p>
            <h6>{fi.price}</h6>
        
                         
                    </div>
                    
                    ))}
                    
                </OwlCarousel>
            
        </div>
  
 



    </div>
    <hr></hr>
  
    </div>

  </section>


  </>
  )
}
