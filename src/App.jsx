import React, { use, useState } from 'react';
import { Suspense } from 'react'
import './App.css'
import Rating from './component/ActivepremiumRating/Rating'
import Banner from './component/Banner/Banner'
import Navbar from './component/navbar/Navbar'
import Toggle from './component/togglingSection/Toggle'

const data = async()=>{
  const res = await fetch('data.json')
  return res.json();
}
let cartDatas = data();
function App() {
  const [cardArray, setCardArray] = useState([]);
  return (
    <>
      <Navbar cardArray={cardArray}/>
      <Banner/>
      <Rating/>
    <Toggle cartDatas={cartDatas} cardArray={cardArray} setCardArray={setCardArray}/>
        
      
    </>
  )
}

export default App
