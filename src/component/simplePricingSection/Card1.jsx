import React from 'react';
import FeatureCard from './FeatureCard';

const Card1 = ({data}) => {
    const {button, description, features, name, price, status} = data
    return (
        <div className={`relative hover:border shadow-md hover:scale-102 p-5 rounded-xl space-y-2 flex flex-col ${status && 'bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white'}`}>
              <div className='absolute bg-orange-200 px-2 rounded-full text-orange-500 top-[-12px] left-[28%]'>{status}</div>
             <div className='flex-1 space-y-1'>
                 <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <p className={`${status || 'text-[#627382]'}`}>{description}</p>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl'>${price}</h1>
                <p className={`${status || 'text-[#627382]'}`}>/ Month</p>
            </div>
            <div className='mt-5'>
                {
                features.map((item, ind) =>( <FeatureCard key={ind} item={item} status={status}/>))
                }
            </div>
             </div>
            {
               status ? <button className="btn rounded-full bg-white text-purple-500 w-full">{button}</button> : <button className="btn rounded-full bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white w-full">{button}</button>
            }
        </div>
    );
};

export default Card1;