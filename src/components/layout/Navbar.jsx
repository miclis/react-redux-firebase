import React from 'react';
import { Link } from 'react-router-dom';
import SingedOutLinks from './SignedOutLinks';
import SingedInLinks from './SingedInLinks';

const Navbar = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>
                    MarioPlan
                </Link>
                <SingedInLinks />
                <SingedOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;