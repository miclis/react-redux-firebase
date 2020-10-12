import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingedOutLinks from './SignedOutLinks';
import SingedInLinks from './SingedInLinks';

const Navbar = () => {
    const auth = useSelector((state) => state.firebase.auth);
    const profile = useSelector((state) => state.firebase.profile);
    const links = auth.uid ? <SingedInLinks profile={profile} /> : <SingedOutLinks />;

    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>
                    MarioPlan
                </Link>
                {links}
            </div>
        </nav>
    );
};

export default Navbar;
