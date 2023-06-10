import React from 'react'
import { Link } from 'react-router-dom'


export default function SubCategories() {
  return (
      <>
        <section>
            <div className='Subcategories container'>
            <h4>SubCategories</h4>
            <div className='row my-3'>
                <div className='col-md-4'>
                    <div className='card'>
                    <div className='card-body'>
                        <img src={require('../assest/img/4-category_thumb_default.jpg')} />
                    </div>
                    </div>
                    <p><Link to={'/'}>Clothing</Link></p>
             
                    
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                    <div className='card-body'>
                        <img src={require('../assest/img/5-category_thumb_default.jpg')}/>
                    </div>
                    </div>
                    <p><Link to={'/'}>Accessories</Link></p>
                    
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                    <div className='card-body'>
                        <img src={require('../assest/img/en-default-category_thumb_default.jpg')}/>
                    </div>
                    </div>
                  
                    <p><Link to={'/'}>Footwear</Link></p>
                    
                </div>
            </div>

            </div>
        </section>
      </>
  )
}
