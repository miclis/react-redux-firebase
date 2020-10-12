import React from 'react';
import { NavLink } from 'react-router-dom';
import * as authActions from '../../redux/actions/authActions';
import { connect } from 'react-redux';

const SingedInLinks = (props) => {
    return (
        <ul className='right'>
            <li>
                <NavLink to='/create'>New Project</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
};

const mapDispatchToProps = {
    signOut: authActions.signOut,
};

export default connect(null, mapDispatchToProps)(SingedInLinks);
