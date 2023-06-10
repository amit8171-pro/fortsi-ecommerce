import React from 'react'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Brandlogo, Catitem } from '../Data/Catdata';


export default function Catego() {
   

  return (
    
        <section>
            <div className='container catgo-bannar'>
                <div className='row my-4'>
                    <div className='col-lg-3'>
                        <h1>Categories</h1>
                        <p>It is a long established fact that a reader. by the readable content of ..</p>
                    </div>
                    <div className='col-lg-9 '>
                    <OwlCarousel className='owl-theme catowl' loop margin={10}  nav>
                    {Catitem.map((a)=>(
                    <div className='item'>
                         <img src={a.img} alt=''/>
                         <h4>{a.title}</h4>
                    </div>

                    ))}
            </OwlCarousel>     
                    </div>
                </div>
                
                <OwlCarousel className='owl-theme companybrand ms-5 mb-5' loop margin={5} items={5} autoplay={true}  nav>
                {Brandlogo.map((b)=>(
                <div className='item'>
                         <img src={b.img} alt=''/>
                         
                    </div>
                ))}
   
   
                </OwlCarousel>
                <hr></hr>
            </div>
        
        </section>
       
    
  )
}
