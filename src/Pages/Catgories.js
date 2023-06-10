import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Link, useParams } from 'react-router-dom';
import { FeatureHead } from '../Data/Catdata';
import Subcat from '../Component/Subcat';
import Filter from '../Component/Filter';
import SubCategories from '../Component/SubCategories';
import Grid from '../Component/Grid';
import List from '../Component/List';
import Viewlistgrid from '../Component/Viewlistgrid';
import Newproductlist from '../Component/Newproductlist';


export default function Catgories() {
    let { cid } = useParams()
    let scid = FeatureHead.filter((sa) => sa.id === 1)

    return (

        <>
            <Header />
            <section>
                <div className='top'>
                    <h1><Link to={`cat/${cid}`}>{cid}</Link></h1>
                    <p><Link to='/'>Home</Link>/<Link to={`cat/${cid}`}>{cid}</Link></p>
                </div>

                <div className='container-fluid ms-4'>
                    
                        <div className='row justify-content-between'>
                            <div className='col-lg-3 '>
                                <div className='pageinfo'>
                                   <Subcat/>
                                </div>
                                <div className='filter-component'>
                                <Filter/>
                                </div>
                                <div className='filter-component'>
                                <Newproductlist/>
                                </div>
                            </div>
                            <div className='col-lg-9'>
                        <div className='cat-bannar ms-0'>
                            <img src={require('../assest/img/3-category_default.jpg')} alt='catgory-default_bannar'/>
                        </div>
                        <div className='cat-bannar-text'>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable that it has a more-or-less normal distribution of letters.</p>
                        </div>

                       
                        
                            <div className='subcategiries-component d-flex justify-content-start'>
                            <SubCategories/>
                        </div>
                        <div className='viewlistgrid-component w-100 ms-0'>
                            <Viewlistgrid/>
                        </div>

                        <div className='grid-component'>
                            <Grid/>
                        </div>
                        {/* <div className='list-component'>
                            <List/>
                        </div> */}
                      
                      

                       
                        <hr className='hr'></hr>
                        </div>
                        </div>
                    

                </div>


            </section>




            <Footer />
        </>
    )
}
