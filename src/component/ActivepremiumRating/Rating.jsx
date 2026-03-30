import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white my-10'>
            <div className='container mx-auto p-8 md:p-15 flex justify-between items-center flex flex-wrap'>
                {/* active user */}
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>50k+</h1>
                    <p>Active Users</p>
                </div>
                 <div className='h-12 w-[1px] bg-white'></div>
                {/* premium tools */}
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div className='h-12 w-[1px] bg-white'></div>
                {/* rating */}
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;