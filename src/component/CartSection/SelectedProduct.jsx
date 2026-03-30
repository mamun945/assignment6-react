import React, { useState } from 'react';
import { TbCarTurbine } from 'react-icons/tb';
import Cart from './Cart';

const SelectedProduct = ({cardArray}) => {
         let totalPrice = cardArray.reduce( (acc, current) => acc + current.price, 0 )
    return (
        <div className='container mx-auto shadow-md text-left rounded-xl p-5 my-10'>
          <h2 className='font-bold text-xl mb-2'>Your Cart</h2>

          <div className='space-y-2'>
              {
            cardArray.map(card =><Cart key={card.id} card={card}/>)
             }
          </div>
          {/* total */}
                <div className='flex justify-between items-center my-2 p-4 shadow-md rounded-md'>
                    <h3>Total</h3>
                    <h3>${totalPrice}</h3>
                </div>
           <button className="btn btn-primary w-full rounded-full">Proceed To Checkout</button>
        </div>
    );
};

export default SelectedProduct;