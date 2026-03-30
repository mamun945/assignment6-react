
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

function App() {
   let cartDatas = data();
  return (
    <>
      <Navbar/>
      <Banner/>
      <Rating/>
      <div className='text-center'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Toggle cartDatas={cartDatas}/>
        </Suspense>
      </div>
      
    </>
  )
}

export default App
