import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logohome from '../../assets/images/logohome.png';
// import "node_modules/flag-icons/css/flag-icons.min.css";
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';



function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div style={{height: "5vh"}}>
            <ProgressBar
            color1   = "#EAF6FE" 
            color2   = "#177EB3" 
            height   = "6px" 
            />
        </div>
        <div className='navbar-container font-semibold'>
           <Link to="/" className='navbar-logo' onClick={closeMobilemenu}>
               <img
               src={Logohome}
               alt="logo"
               className='logohome'
               />  
           </Link>

           <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        FarmConnect
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        ConnectMart
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        Swift Logistics
                    </Link>
                </li>
                <li className='nav-item pl-10'>
                    <div className="lang-menu">
                        <div className="selected-lang">
                            En 
                            <svg className="w-6 h-6 text-gray-800 dark:text-white pl-1 pt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                            </svg>
                        </div>
                        <ul>
                            <li>
                            <Link to='/' className="de">German</Link>
                            </li>
                            <li>
                                <Link to='/' className="en">English</Link>
                            </li>
                            <li>
                                <Link to='/' className="fr">French</Link>
                            </li>
                            <li>
                                <Link to='/' className="ar">Arabic</Link>
                            </li>
                        </ul>
                        
                    </div>
                </li>
           </ul>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar
