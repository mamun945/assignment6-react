
// import { TbCarTurbine } from 'react-icons/tb';
import Cart from './Cart';
import { CiShoppingCart } from 'react-icons/ci';

const SelectedProduct = ({cardArray, deleteHandelar, proceedHandelar}) => {
         let totalPrice = cardArray.reduce( (acc, current) => acc + current.price, 0 )
    return (
       <>
        {
           cardArray.length === 0 ?
            <div className='container mx-auto h-[200px] shadow-xl rounded-md my-5 flex flex-col items-center justify-center'>
                 <div className='flex justify-center'><CiShoppingCart className='text-5xl opacity-10'/></div>
                 <p className='opacity-10'>You does not add to card</p>
           </div> 
           :
           <div className='container mx-auto shadow-md text-left rounded-xl p-5 my-10'>
          <h2 className='font-bold text-xl mb-2'>Your Cart</h2>

          <div className='space-y-2'>
              {
            cardArray.map(card =><Cart key={card.id} card={card} deleteHandelar={deleteHandelar}/>)
             }
          </div>
          {/* total */}
                <div className='flex justify-between items-center my-2 p-4 shadow-md rounded-md'>
                    <h3>Total</h3>
                    <h3>${totalPrice}</h3>
                </div>
           <button onClick={proceedHandelar} className="btn btn-primary w-full rounded-full">Proceed To Checkout</button>
        </div>
        } 
       
       </>
    );
};

export default SelectedProduct;