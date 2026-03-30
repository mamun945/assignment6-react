import React, { useState } from 'react';

const Toggle = () => {
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
            <input onClick={()=> setIsToggle('Products')} type="radio" name="my_tabs_1" className={`tab w-[150px] rounded-full  ${isToggle == 'Products'? 'bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white':'bg-base-100 text-black'}`} aria-label="Products" />
            <input onClick={()=> setIsToggle('Cart')} type="radio" name="my_tabs_1" className={`tab w-[150px] rounded-full ${isToggle == 'Cart'? 'bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white':'bg-base-100 text-black'}`} aria-label="Cart(0)" defaultChecked />
          </div>
          </div>  
        </>
    );
};

export default Toggle;