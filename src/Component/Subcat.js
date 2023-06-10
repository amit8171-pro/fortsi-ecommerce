import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FeatureHead } from '../Data/Catdata';

export default function Subcat() {
    let { cid } = useParams()
    let scid = FeatureHead.filter((sa) => sa.id === 1)
    return (
        <>
            <div className="card">
                <div class="card-body">
                    <h4 className="card-title"><Link to={`cat/${cid}`}>{cid}</Link></h4>
                    <div className='card-text'>
                        <div className='row'>

                            <div className='col-sm-6'>
                                {FeatureHead.map((sa) => (
                                    <p >{sa.catName}</p>
                                ))}
                            </div>

                            <div className='col-sm-6 text-end'>
                                <ul class="list-inline">
                                    <p> <li class="list-inline-item d-block"><i class="bi bi-plus-circle"></i>
                                    </li> </p>
                                    <p> <li class="list-inline-item d-block"><i class="bi bi-plus-circle"></i>
                                    </li> </p>
                                    <p> <li class="list-inline-item d-block"><i class="bi bi-plus-circle"></i>
                                    </li></p>
                                    <p>  <li class="list-inline-item d-block"><i class="bi bi-plus-circle"></i>
                                    </li> </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
