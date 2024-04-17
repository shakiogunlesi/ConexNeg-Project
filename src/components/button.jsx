import React from 'react'
import './button.css';
import { Link } from 'react-router-dom';



export const Button = ({
    children,
    type,
    onClick,
}) => {
 

    return (
        <Link to='/' className='btn-mobile'>
            <button
                className={'btn'}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};