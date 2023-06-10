import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export default function About() {
  return (
   <>
   <section>
    <div className='container my-5'>
        <div className='row  justify-content-between position-relative'>
            <div className='col-md-2 mt-4 our-client'>
                <h2>Our Client</h2>
            </div>
            <div className='col-md-10 aboutslider'>
            <OwlCarousel className='owl-theme ' loop margin={10} items={1} autoplay={false}  nav>
                  <div className='row justify-content-between align-items-center' >
                    <div className='col-lg-2 userprofile'>
                        <img src={require('../assest/img/user1.jpg')} alt='user1'/>
                    </div>
                    <div className='col-lg-8 said'>
                        <p>"There are many variations of passages of Lorem Ipsum availale, but the majority randomised words which don't look even slightly"</p>
                    </div>
                    <div className='col-lg-2 authore text-start'>
                        <p>Mack Jhonson</p>
                    </div>
                  </div>
                  <div className='row justify-content-between align-items-center' >
                    <div className='col-lg-2 userprofile'>
                        <img src={require('../assest/img/user2.jpg')} alt='user2'/>
                    </div>
                    <div className='col-lg-8 said'>
                        <p>"There are many variations of passages of Lorem Ipsum availale, but the majority randomised words which don't look even slightly"</p>
                    </div>
                    <div className='col-lg-2 authore text-end'>
                        <p>Luies Charls</p>
                    </div>
                  </div>
                  <div className='row justify-content-between align-items-center' >
                    <div className='col-lg-2 userprofile'>
                        <img src={require('../assest/img/user3.jpg')} alt='user3'/>
                    </div>
                    <div className='col-lg-8 said'>
                        <p>"There are many variations of passages of Lorem Ipsum availale, but the majority randomised words which don't look even slightly"</p>
                    </div>
                    <div className='col-lg-2 authore text-end'>
                        <p>Jecob Goeckno</p>
                    </div>
                  </div>
   
   
                </OwlCarousel>
      
          
            </div>
        </div>
        <div className='row  justify-content-between position-relative my-5'>
        
            <div className='col-md-9 blogslider'>
            <OwlCarousel className='owl-theme ' loop margin={10} items={3} autoplay={false}  nav>

                        <img src={require('../assest/img/b-blog-4.jpg')} alt='blog1'/>
                        <img src={require('../assest/img/b-blog-5.jpg')} alt='blog2'/>
                        <img src={require('../assest/img/b-blog-6.jpg')} alt='blog3'/>
                        <img src={require('../assest/img/b-blog-7.jpg')} alt='blog4'/>
                        <img src={require('../assest/img/b-blog-3.jpg')} alt='blog5'/>

                </OwlCarousel>
      
          
            </div>
            <div className='col-md-3 mt-4 blog-said text-start'>
                <h2>Our Blog</h2>
                <p>It is a long established fact that a reader. by the readable content of..</p>
            </div>
        </div>

        <div className="blog-form pt-5 text-center">
        <h3 className='py-3'>Get daily update</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email address" />
</div>

    </div>
   </section>

   </>
  )
}
