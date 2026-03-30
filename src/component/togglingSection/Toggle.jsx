import React, { use, useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import SelectedProduct from '../CartSection/SelectedProduct';

const Toggle = ({cartDatas}) => {
     const datas = use(cartDatas);
     const [cardArray, setCardArray] = useState([]);
    const [isToggle, setIsToggle] = useState('Products');
    return (
        <>
         <div className='container mx-auto text-center'>
            <h1 className='text-2xl font-bold'>Premium Digital Tools</h1>
            <div className='mt-3'>
              <p>Choose from our curated collection of premium digital products designed</p>
              <p> to boost your productivity and creativity.</p>
            </div>
         </div>
          <div className='my-5 flex justify-center'>
            {/* name of each tab group should be unique */}
          <div className="tabs tabs-box my-5">
            <input onClick={()=> setIsToggle('Products')} type="radio" name="my_tabs_1" className={`tab w-[150px] rounded-full  ${isToggle == 'Products'? 'bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white':'bg-base-100 text-black'}`} aria-label="Products" defaultChecked/>
            <input onClick={()=> setIsToggle('Cart')} type="radio" name="my_tabs_1" className={`tab w-[150px] rounded-full ${isToggle == 'Cart'? 'bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white':'bg-base-100 text-black'}`} aria-label="Cart(0)" />
          </div>
          </div> 

          <div className='container mx-auto gap-5 grid grid-cols-3 my-5'>
            {
             isToggle === 'Products' &&  datas.map(data => <AvailableProducts key={data.id} data={data} cartArray={cardArray} setCardArray={setCardArray}/>)
            }

            {
              isToggle === 'Cart' && <SelectedProduct cardArray={cardArray}/>
            }
          </div> 
        </>
    );
};

export default Toggle;