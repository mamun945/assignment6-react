import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto py-20 flex flex-wrap gap-5 justify-between p-4'>
              <div>
                <h2 className='font-bold text-2xl'>DigiTools</h2>
                <p className='text-[#dddddda2]'>Premium tools for creators,<br/> professionals, and businesses. Work smarter<br/>
                 with our suite of powerful tools.</p>
              </div>

              <div>
                <p>Product</p>
                <div className='text-[#dddddda2]'>
                <p>Features</p>
                <p>Pricing</p>
                <p>Templates</p>
                <p>Integrations</p>
                </div>
              </div>

              <div>
                <p>Company</p>
                <div className='text-[#dddddda2]'>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
                </div>
              </div>

              <div>
                <p>Resources</p>
                <div className='text-[#dddddda2]'>
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
                </div>
              </div>

              <div>
                <p>Social Links</p>
                 <div className='flex items-center gap-1'>
                    <div className='h-[30px] w-[30px] flex justify-center items-center rounded-full bg-white'><FaInstagram className='text-black'/></div>
                    <div className='h-[30px] w-[30px] flex justify-center items-center rounded-full bg-white'><FaFacebookSquare className='text-black'/></div>
                    <div className='h-[30px] w-[30px] flex justify-center items-center rounded-full bg-white'><FaXTwitter className='text-black'/></div>
                 </div>
              </div>
            </div>
            <div className='container mx-auto p-4 '>
             <div className='flex justify-between items-center gap-2 flex-col md:flex-row text-[#dddddda2]'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
             </div>
            </div>
        </div>
    );
};

export default Footer;