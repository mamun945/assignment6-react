import React from 'react';
import bannerImg from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (
        <div className='container mx-auto my-5'>
             <div className='flex flex-col md:flex-row gap-5 items-center'>
                {/* text section  */}
                <div className='space-y-4 flex flex-col items-center md:items-start'>
                   <div className='badge btn rounded-full bg-[#e1e7ff] p-4 flex justify-between items-center'>
                    <div className='flex justify-center items-center h-[25px] w-[25px] bg-purple-200 rounded-full animate-pulse'>
                        <div className='flex justify-center items-center h-[15px] w-[15px] bg-purple-400 rounded-full'>
                            <div className=' h-[8px] w-[8px] bg-purple-700 rounded-full'></div>
                        </div>
                    </div>
                    <p className='text-purple-500'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-3xl md:text-7xl text-center md:text-left'>Supercharge Your Digital Workflow</h1>
                    <p>
                    <p className='text-center md:text-left'>Access premium AI tools, design assets, templates, and productivity</p>
                    <p className='text-center md:text-left'>software—all in one place. Start creating faster today.</p>
                    <p className='text-center md:text-left'>Explore Products</p>
                    </p>
                    <div className='flex items-center gap-2'>
                        <button className='btn bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white rounded-full'>Explore Products</button>
                        <button className='btn btn-outline btn-primary rounded-full'><CiPlay1/> Watch Demo</button>
                    </div>
                </div>
                
                {/* image section */}
                <div>
                   <img src={bannerImg} />
                </div>
             </div>
        </div>
    );
};

export default Banner;