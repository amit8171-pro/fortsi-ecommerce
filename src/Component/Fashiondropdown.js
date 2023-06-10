import React from 'react'
import { Link } from 'react-router-dom'

export default function Fashiondropdown() {
  return (
<>
<section className='Fashion-dropdown'>
    <div className='row justify-content-between align-items-center'>
        <div className='col-md-4'>
        <p><Link to={'/'}>Clothing</Link></p>

        <hr className='py-4'></hr>

        <ul className="list-inline">
  <li className="list-inline-item">Ethnic Wear</li>
  <li className="list-inline-item">Sports Wear</li>
  <li className="list-inline-item">Loungewear</li>
  <li className="list-inline-item">Trousers</li>
</ul>

        </div>
    
    </div>
</section>



</>
  )
}
