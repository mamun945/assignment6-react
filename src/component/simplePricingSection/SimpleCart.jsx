import React, { use } from 'react';
import Card1 from './Card1';

const SimpleCart = ({priceDatas}) => {
    let datas = use(priceDatas);
    console.log(datas);
    return (
        <div className='container mx-auto'>
            <div className='text-center p-4'>
                <h2 className='text-2xl font-bold'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-8 p-4'>
                {
                  datas.map(data => <Card1 key={data.id} data={data}/>)  
                }
            </div>
        </div>
    );
};

export default SimpleCart;