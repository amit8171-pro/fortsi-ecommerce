import React from 'react';
import '../Data/Catdata';
import Slider1 from '../Data/Catdata';

export default function Slider() {
  // let si = Slider1.filter((a)=>Slider1.img)
  return (
   <>
   

    <div id="carouselExampleCaptions" className="carousel slide bannar-slider" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
  </div>
 
  <div className="carousel-inner" >
   
   {Slider1.map((qq)=>(

   
    <div className="carousel-item active " >
    
      <img src={qq.img} className="d-block" alt="sample-1"/>
     
    </div>
    ))}

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  

   
   </>
  )
}
