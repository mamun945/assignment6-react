import React from 'react';
import user from '../../assets/user.png'
import pakege from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Getstarted = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center p-4'>
                <h1 className='text-2xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
             {/* card section  */}
            <div className='grid grid-cols-1  md:grid-cols-3 gap-5 mt-8 gap-10 p-4'>
                <div className='card1  shadow-md hover:border-1 hover:border-purple-400 p-4 space-y-2 rounded-md hover:scale-102'>
                    <div className='flex justify-end'>
                        <p className='rounded-full bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white h-[30px] w-[30px] flex items-center justify-center'>01</p>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                    <div className='p-3 bg-purple-100 rounded-full '><img src={user} alt="logo" /></div>
                    <h3 className='font-bold text-xl'>Create Account</h3>
                    <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className='card2 shadow-md hover:border-1 hover:border-purple-400 p-4 space-y-2 rounded-md hover:scale-102'>
                     <div className='flex justify-end'>
                        <p className='rounded-full bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white h-[30px] w-[30px] flex items-center justify-center'>02</p>
                    </div>
                      <div className='flex flex-col items-center space-y-2'>
                        <div className='p-3 bg-purple-100 rounded-full '><img src={pakege} alt="logo" /></div>
                    <h3 className='font-bold text-xl'>Choose Products</h3>
                    <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                      </div>
                </div>

                <div className='card3 shadow-md hover:border-1 hover:border-purple-400 p-4 rounded-md space-y-2 hover:scale-102'>
                    <div className='flex justify-end'>
                        <p className='rounded-full bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white h-[30px] w-[30px] flex items-center justify-center'>03</p>
                    </div>
                   <div className='flex flex-col items-center space-y-2'>
                     <div className='p-3 bg-purple-100 rounded-full '><img src={rocket} alt="logo" /></div>
                    <h3 className='font-bold text-xl'>Start Creating</h3>
                    <p className='text-center'>Download and start using your premium tools immediately.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Getstarted;