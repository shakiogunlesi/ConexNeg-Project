import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import LogoHome2 from "../../assets/images/logohome2.png";
import FacebookIcon from "../../assets/images/facebookicon.png";
import TwitterIcon from "../../assets/images/twittericon.png";
import InstagramIcon from "../../assets/images/instagramicon.png";

function footer() {
  return (
    <div className='bg-textC500 py-6 md:px-20 z-0'>
        <section className="flex flex-row justify-between gap-4 pt-8 px-6">
            <div className='flex gap-4 justify-between flex-col md:flex-row w-full'>
                <div className=''>
                    <img src={LogoHome2} alt='Footer-logo' />
                    {/* <h2 className='text-white pt-6 text-[20px]'>@ConnectMart 2024</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Terms and Service</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Privacy Policy</Link></p> */}
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Company</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Careers</Link></p>
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Services</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>FarmConnect</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>ConnectMart</Link></p>
                    <p className='text-white pb-2 text-[20px]'><Link to='/'>Swift Logistics</Link></p>
                </div>
                <div className=''>
                    <h2 className='text-white pt-4 text-[22px] font-bold'>Get in Touch</h2>
                    <p className='text-white py-2 text-[20px]'><Link to='/'>Contact Us</Link></p>
                    <div className='flex flex-row gap-2'>
                        <div>
                            <Link to='/'>
                                <img 
                                src={FacebookIcon} 
                                alt='FacebookIcon' 
                                className='w-[30px] h-[30px]'
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to='/'>
                                <img 
                                src={TwitterIcon} 
                                alt='TwitterIcon' 
                                className='w-[30px] h-[30px]'
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to='/'>
                                <img 
                                src={InstagramIcon} 
                                alt='InstagramIcon' 
                                className='w-[30px] h-[30px]'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    </div>
  )
}

export default footer
