import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './button';
import logo from '../assets/images/logo.png';
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
        },
    []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div style={{height: "5vh"}}>
            <ProgressBar
            color1   = "#EAF6FE" 
            color2   = "#93D50AFA" 
            height   = "6px" 
            />
        </div>
        <div className='navbar-container font-semibold'>
           <Link to="/" className='navbar-logo' onClick={closeMobilemenu}>
               <img
               src={logo}
               alt="logo"
               className='logo'
               />  
           </Link>

           <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobilemenu}>
                        Careers
                    </Link>
                </li>
                
           </ul>
           {button && <Button buttonStyle='btn--outline'><span className='visitbtn font-semibold md:text-[20px] text-[16px]'>Visit Store</span></Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
