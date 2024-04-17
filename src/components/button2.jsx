import React from 'react'
import './button.css';
import { Link } from 'react-router-dom';



export const button2 = ({
    children,
    type,
    onClick,
}) => {
 

    return (
        <Link to='/' className='btn-mobile'>
            <button2
                className={'btn2'}
                onClick={onClick}
                type={type}
            >
                {children}
            </button2>
        </Link>
    );
};