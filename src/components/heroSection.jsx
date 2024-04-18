import React from 'react';
import '../index.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './heroSection.css';
import ArrowRight from '../assets/images/arrow-right.png'
import MobilePhone from '../assets/images/mobile.png';
import AppstoreLogo from '../assets/images/appstoreLogo.png';
import AppstoreLogo2 from '../assets/images/appstoreLogo2.png';

function heroSection() {
  return (
    <div className="flex flex-row md:px-[60px] pt-8 relative mb-[70px]">
      <div className='flex gap-4  flex-col md:flex-row w-full pt-19'>
        <div className='text-left px-6 md:pt-20'>
          <h1 className='md:text-[48px] text-[38px] font-bold mb-4 leading-[50px]'>The smartest way
          <br />to growing trade wholesale</h1>
          <p className='text-[22px]'>ConnectMart is a B2B marketplace that connects small businesses with <br />wholesalers and brands in one place to enabling a seamless, insightful <br />and bold way of doing businesses</p>
        
          <div className="hero-btns flex md:flex-row gap-4 text-start pr-6">
            <Button className='btn--primary btn--outline'> 
              <div className='flex flex-row gap-2'>
                <span className='font-semibold md:text-[20px] text-[16px]'>Visit Store </span>
                <img 
                src={ArrowRight}
                alt='Arrow-right'
                className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                />
              </div>
            </Button>
            
            <div className='pt-4'> 
            <Link to ="/">
            <span className='font-semibold  md:text-[20px] text-[16px]'>Sell On ConnectMart</span>
            </Link>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-[120px]">
            <img 
            src={AppstoreLogo}
            alt='AppstoreLogo'
            className='h-[40px]'
            />
             <img 
            src={AppstoreLogo2}
            alt='AppstoreLogo2'
            className='h-[40px]'
            />
          </div>
        </div>
        <div className='flex text-end pt-10 pl-[150px] hero-img'>
          <img 
          src={MobilePhone}
          alt='MobilePhone'
          className='h-[600px]'
          />
        </div>
      </div>
    </div>
  )
}

export default heroSection
