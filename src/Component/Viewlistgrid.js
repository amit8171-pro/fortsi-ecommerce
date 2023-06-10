import React from 'react'

export default function Viewlistgrid() {
  return (
    <>
        <section>
            <div className='row justify-content-around align-items-center'>
                <div className='col-md-3 d-flex gap-3 fs-4'>
                <div className='gridicon'><i class="bi bi-grid"></i></div>
                <div className='listicon'><i class="bi bi-list-ul"></i></div>
                <div className='itemcount text-center py-2'><p>There are <span className='item-count'>15</span> products.</p></div>

                </div>
                <div className='col-md-9 d-flex justify-content-center align-items-center pb-3'>
                <p className=' pt-3 pe-3'>Stor by:</p>
<select className="form-select form-select-sm w-50 " aria-label=".form-select-sm example">

  <option selected>Relevance</option>
  <option value="1">Name A to Z</option>
  <option value="2">Name Z to A</option>
  <option value="3">Price high to low</option>
  <option value="4">Price low to high</option>
</select>
                    
                    </div>
            </div>
        </section>
    </>
  )
}
