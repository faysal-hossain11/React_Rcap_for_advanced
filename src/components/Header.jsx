import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className=' bg-gray-700 '>
            <div className='h-[80px] max-w-[1440px] mx-auto flex items-center justify-between mb-8'>
                <h1 className='text-4xl font-semibold'>LOGO</h1>
                <NavLink to='/productgrid'  >Product Grid</NavLink>
                <NavLink to='/friends'  >Friends</NavLink>
                <NavLink to='/settings'  >Settings</NavLink>
                <NavLink to='/counter'  >Counter App</NavLink>
                <span>100 Cr</span>
            </div>
        </div>
    );
}; 

export default Header;