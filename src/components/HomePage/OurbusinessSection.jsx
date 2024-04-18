import React from 'react';
import '../../index.css';
import FarmconnectLogo from "../../assets/images/farmconnectlogo.png";
import ReadmoreBtn from "../../assets/images/readmorebtn.png";
import ConnectMartLogo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';


function OurbusinessSection() {
    return (
        <div className='bg-textC500'>
            <div className="md:px-[200px] px-8 rounded-b-[30px] pb-[100px] bg-grayBg z-40">
                <h1 className='text-[54px] font-medium text-textC500 mt-[70px] mb-[70px]'>Our Business</h1>
                <div className='flex flex-row items-center justify-center text-center'>
                    <div className='rounded-[20px] bg-white pt-[40px] px-10 w-[457px] h-[300px]'>
                        <div className='flex text-center justify-center'>
                            <img 
                            src={FarmconnectLogo}
                            alt="FarmConnectlogo"
                            className='w-[300px] h-[46px]'
                            />
                        </div>
                        <p className='text-[20px] font-normal md:py-10 py-4  text-center'>Freshness delivered. From source to doorstep, enjoy unmatched convenience and quality.</p>
                        <di className="flex text-center justify-center">
                            <img 
                            src={ReadmoreBtn}
                            alt="readmore"
                            className='w-[40px] h-[40px]'
                            />
                            <p className='ml-2 pt-2'>
                                <Link to="/" className='text-textC500 text-[20px] font-normal'> Learn more </Link>
                            </p>
                        </di>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center text-center mt-16'>
                    <div className='rounded-[20px] bg-white pt-[40px] px-10 w-[457px] h-[300px]'>
                        <div className='flex text-center justify-center'>
                            <img 
                            src={ConnectMartLogo}
                            alt="FarmConnectlogo"
                            className='w-[300px] h-[46px]'
                            />
                        </div>
                        <p className='text-[20px] font-normal md:py-8 py-4  text-center'>Building strong connections. Streamline your business operations with our user-friendly B2B platform.</p>
                        <di className="flex text-center justify-center">
                            <img 
                            src={ReadmoreBtn}
                            alt="readmore"
                            className='w-[40px] h-[40px]'
                            />
                            <p className='ml-2 pt-2'>
                                <Link to="/landingPage" className='text-textC500 text-[20px] font-normal'> Learn more </Link>
                            </p>
                        </di>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center text-center mt-16'>
                    <div className='rounded-[20px] bg-white pt-[40px] px-10 w-[457px] h-[300px]'>
                        <div className='flex text-center justify-center'>
                            <h2 className='text-[35px] font-medium text-textC500'>Swift Logistics</h2>
                        </div>
                        <p className='text-[20px] font-normal md:py-8 py-4  text-center'>Your trusted delivery partner. Ensuring swift and reliable movement of goods, wherever they need to go.</p>
                        <di className="flex text-center justify-center">
                            <img 
                            src={ReadmoreBtn}
                            alt="readmore"
                            className='w-[40px] h-[40px]'
                            />
                            <p className='ml-2 pt-2'>
                                <Link to="/" className='text-textC500 text-[20px] font-normal'> Learn more </Link>
                            </p>
                        </di>
                    </div>
                </div>
                <div className=''>
                    <p className='text-[24px] font-medium text-center mt-16'>ConexNeg goes beyond just connecting people and products. We bridge the gap <br />between stakeholders, creating a more efficient and convenient experience for all. <br />Join ConexNeg and discover a world of fresh possibilities.</p>
                </div>
            </div>
        </div>
    )
}

export default OurbusinessSection