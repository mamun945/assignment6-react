import React from 'react';

const Transform = () => {
    return (
        <div className='bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white p-15 mt-15'>
            <div className='container mx-auto text-center'>
               <div className='space-y-5'>
                <h2 className='font-bold text-2xl'>Ready to Transform Your Workflow?</h2>
               <p>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
               <div className='button flex items-center gap-2 justify-center'>
                  <button className='px-4 py-2 bg-white rounded-full text-purple-500'>Explore Products</button>
                  <button className='py-2 px-5 border-1 border-white rounded-full'>View Pricing</button>
               </div>
               <p>14-day free trial • No credit card required • Cancel anytime</p>
               </div>
            </div>
        </div>
    );
};

export default Transform;