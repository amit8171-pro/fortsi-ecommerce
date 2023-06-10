import React from 'react'

export default function Footer() {
  return (
  <>
  <footer>
    <div className='social-icons'>
      <div className='row'>
        <div className='col-sm-1'>
        {/* <a className="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="#"> */}
       <div className='row flex-column px-4 '>
        <div className='col-sm-2'>
        <a className='icon-link'>
       <i className="bi bi-facebook"></i>
       </a>
        </div>
        <div className='col-sm-2'>
        <a className='icon-link'>
       <i className="bi bi-twitter"></i>
       </a>
        </div>
        <div className='col-sm-2'>
        <a className='icon-link'>
       <i className="bi bi-youtube"></i>
       </a>
        </div>
        <div className='col-sm-2'>
        <a className='icon-link'>
       <i className="bi bi-google"></i>
       </a>
        </div>
        <div className='col-sm-2'>
        <a className='icon-link'>
       <i className="bi bi-instagram"></i>
       </a>
        </div>
       </div>

        </div>
        <div className='col-lg-11'>
        <div className='mainfooter row justify-content-between py-5'>
          <div className='col-lg-3'>
          <a href='/' className='fhead'><h5>Store Information</h5></a>
          <ul className="list-inline d-flex flex-column">
            <li className="list-inline-item">Fortsi - Fashion Store</li>
              <li className="list-inline-item">United States</li>
              <li className="list-inline-item">000-000-0000</li>
              <li className="list-inline-item">123456</li>
              <li className="list-inline-item">sales@yourcompany.com</li>
          </ul>

          </div>
          <div className='col-lg-3'>
          <a href='/' className='fhead'><h5>Products</h5></a>
          <ul className="list-inline d-flex flex-column">
              <a href='/'><li className="list-inline-item">Prices drop</li></a>
              <a href='/'><li className="list-inline-item">New products</li></a>
              <a href='/'><li className="list-inline-item">Best sales</li></a>
              <a href='/'><li className="list-inline-item">Contact us</li></a>
              <a href='/'><li className="list-inline-item">Sitemap</li></a>
          </ul>

          </div>
          <div className='col-lg-3'>
          <a href='/' className='fhead'><h5>Our Company</h5></a>
          <ul className="list-inline d-flex flex-column">
              <a href='/'><li className="list-inline-item">Delivery</li></a>
              <a href='/'><li className="list-inline-item">Legal Notice</li></a>
              <a href='/'><li className="list-inline-item">Terms and conditions of use</li></a>
              <a href='/'><li className="list-inline-item">About us</li></a>
              <a href='/'><li className="list-inline-item">Secure payment</li></a>
          </ul>

          </div>
          <div className='col-lg-3'>
          <a href='/' className='fhead'><h5>Payment Method</h5></a>
          <ul className="imglist d-flex justify-content-around ps-0">
              <a href='/'><img src={require('../assest/img/visa.png')} className='pay'/></a>
              <a href='/'><img src={require('../assest/img/american_express.png')} className='pay'/></a>
              <a href='/'><img src={require('../assest/img/master_card.png')} className='pay'/></a>
              <a href='/'><img src={require('../assest/img/discover.png')} className='pay'/></a>
              <a href='/'><img src={require('../assest/img/paypal.png')} className='pay'/></a>
          </ul>
          <hr></hr>
          <ul className="imglist d-flex justify-content-around ps-0">
              <a href='/'><img src={require('../assest/img/cms-footer-1.png')} className='apps'/></a>
              <a href='/'><img src={require('../assest/img/cms-footer-2.png')} className='apps'/></a>
             
          </ul>


          </div>
        </div>
        <hr></hr>

        <div className='row'>
          <div className='col-md-2'>
            <img src={require('../assest/img/logo.jpg')}/>
          </div>
          <div className='col-md-4 py-3'>
            <p>© 2023 - Ecommerce software by PrestaShop™</p>
          </div>
          <div className='col-md-6 py-3 me-0'>
          <ul className="list-inline d-flex lastfooter">
              <a href='/'><li className="list-inline-item">Contact</li></a>
              <a href='/'><li className="list-inline-item">Privacy Policy</li></a>
              <a href='/'><li className="list-inline-item">Terms and conditions of use</li></a>
              <a href='/'><li className="list-inline-item">FAQ</li></a>
              <a href='/'><li className="list-inline-item">Terms & Condition</li></a>
          </ul>  
          </div>

        </div>
       </div>
      </div>
    </div>
  </footer>
    
  </>
  )
}
