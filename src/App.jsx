import React, { use, useState } from 'react';
import { Suspense } from 'react'
import './App.css'
import Rating from './component/ActivepremiumRating/Rating'
import Banner from './component/Banner/Banner'
import Navbar from './component/navbar/Navbar'
import Toggle from './component/togglingSection/Toggle'
import Getstarted from './component/GetStartedSection/Getstarted';
import SimpleCart from './component/simplePricingSection/SimpleCart';
import Transform from './component/TransformSection/Transform';
import Footer from './component/FooterSection/Footer';

const data = async()=>{
  const res = await fetch('data.json')
  return res.json();
}
const pricingData = async() =>{
  const res = await fetch('pricingdata.json')
  return res.json();
} 
let priceDatas = pricingData();
let cartDatas = data();
function App() {
  const [cardArray, setCardArray] = useState([]);
  return (
    <>
      <Navbar cardArray={cardArray}/>
      <Banner/>
      <Rating/>
    <Toggle cartDatas={cartDatas} cardArray={cardArray} setCardArray={setCardArray}/>
     <Getstarted/> 

      <SimpleCart priceDatas={priceDatas}/>
      <Transform/>
      <Footer/>
    </>
  )
}

export default App
