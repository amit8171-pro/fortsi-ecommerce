import React from 'react'
import Header from '../Component/Header';
import Slider from '../Component/Slider';
import Catego from '../Component/Catego';
import Feature from '../Component/Feature';
import Info from '../Component/Info';
import Specialoffer from '../Component/Specialoffer';
import About from '../Component/About';
import Footer from '../Component/Footer';

export default function Home() {
  return (
   <>
    <Header/>
    <Slider/>
    <Catego/>
    <Feature/>
    <Info/>
    <Specialoffer/>
    <About/>
    <Footer/>
   </>
  )
}
