import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import ConnectMarketLogo from "../assets/images/connectmarketLogo2.png";

function footer() {
  return (
    <div className='bg-primary py-6 md:px-20'>
        <section className="flex flex-row justify-between gap-4 pt-8 px-6">
            <div className='flex gap-4 justify-between flex-col md:flex-row w-full'>
                <div className=''>
                    <img src={ConnectMarketLogo} alt='Footer-logo' />
                    <h2 className='text-white pt-6 text-[20px]'>@ConnectMart 2024</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Terms and Service</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Privacy Policy</Link></p>
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Company</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Careers</Link></p>
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Services</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Shop Wholesale</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Sell on ConnectMart</Link></p>
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Connect with Us</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Facebook</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Twitter</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>LinkedIn</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Blog</Link></p>
                </div>
            </div>
        </section>
       
    </div>
  )
}

export default footer
