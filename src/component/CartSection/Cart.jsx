import React from 'react';

const Cart = ({card}) => {

    return (
            
            <>
               {/* card */}
                <div className='border flex items-center justify-between p-3 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <img src={card.icon} alt="logo" />
                    <div>
                        <div className=''>
                          <h2 className='font-bold'>{card.name}</h2>
                          <p>${card.price}</p>
                        </div>
                    </div>
                    </div>
                <button className='btn bg-red-300 text-red-500'>Delete</button>
                </div>
            </>
               
    );
};

export default Cart;