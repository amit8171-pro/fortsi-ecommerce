import React from 'react';



export default function Specialoffer() {
  return (
     <>
    <section>
        <div className='container'>
            <div className='row my-4 justify-content-between'>
                <div className='offer1 col-md-4 '>
                    <img src='https://demo.codezeel.com/prestashop/PRS10/PRS100229/PRS02/img/cms/cms-banner-1.jpg' alt='' className='w-100'/>
                    <p>Special Offer</p>
                    <h2>Designer Bags</h2>
                </div>
                <div className='col-md-4 '>
                <div className='row flex-column'>
                    <div className='col-sm-6 offer2 w-100 pb-4'>
                    <img src='https://demo.codezeel.com/prestashop/PRS10/PRS100229/PRS02/img/cms/cms-banner-2.jpg' alt='' className='w-100'/>
                    <p>Flat 30%</p>
                    <h2>Men Caps</h2>
                    <a href='/'><span>Shop now</span></a>
                    </div>
                    <div className='col-sm-6 offer3 w-100 pt-1'>
                    <img src='https://demo.codezeel.com/prestashop/PRS10/PRS100229/PRS02/img/cms/cms-banner-3.jpg' alt='' className='w-100' />
                    <p>Flat 30%</p>
                    <h2>Glasses</h2>
                    <a href='/'><span>Shop now</span></a>
                    </div>
                </div>
                   
                </div>
                <div className='col-md-4 offer4'>
                    <img src='https://demo.codezeel.com/prestashop/PRS10/PRS100229/PRS02/img/cms/cms-banner-4.jpg' alt='' className='w-100'/>
                    <p>Special Offer</p>
                    <h2>Designer Bags</h2>
                </div>
            </div>
        </div>
    </section>
     </>
  )
}
