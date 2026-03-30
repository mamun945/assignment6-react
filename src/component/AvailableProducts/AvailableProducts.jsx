import React, { useState } from 'react';
import Featurs from './Featurs/Featurs';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AvailableProducts = ({data, cardArray, setCardArray}) => {
   const [isSelected, setIsSelected] = useState(false)
   const selectHandelar =(data)=>{
      const findProduct = cardArray.find(item => item.id == data.id)
      if(findProduct){
        toast.warn('This product is Already added');
        return;
      }
      setCardArray([...cardArray, data]);
      setIsSelected(true);
      toast.success('This product is Successfully added');
   }
     const {name, period, tag, price, features, description, icon} = data
     const status =()=>{
        if(tag === 'popular'){
        return <div className='badge badge-soft bg-purple-200 text-purple-500'>Popular</div>
      }else if(tag === 'best seller'){
        return <div className='badge badge-soft bg-orange-200 text-orange-500'>Best Seller</div>
      }else if(tag === 'new'){
        return <div className='badge badge-soft bg-green-200 text-green-500'>Best Seller</div>
      }
     }
    return (
         <div className='shadow border-1 border-gray-100 p-5 rounded-xl text-left space-y-2 hover:shadow-xl hover:border hover:border-green-500 hover:scale-102 transition-all duration-100'>
        <div className='badege text-right'>
          {status()}
        </div> 
        <img src={icon} alt="logo" />
        <h2 className='font-bold text-xl'>{name}</h2>
        <p className='line-clamp-2'>{description}</p>
        <div className='flex items-center'><p className='font-bold text-xl'>${price}</p>/{period}</div>
        <div className='ml-5'>
            {
              features.map( (item, ind) =>(
                <Featurs key={ind} item={item}/>
              ) ) 
            }
        </div>
        <button onClick={()=>selectHandelar(data)} className={`btn ${isSelected ? 'bg-green-500':'bg-linear-to-r from-[#652df7] to-[#8e18fa]'} text-white w-full rounded-full`}>{
          isSelected ? <span className='flex items-center gap-1.5'><FaCheck className='text-white'/> <span>Add to Card</span></span>  : 'Buy Now'
          }</button>
        </div>
    );
};

export default AvailableProducts;