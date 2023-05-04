import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import NavItems from './NavItems';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faCircleUser, faXmark} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../contexts/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [isTrue, setIsTrue] = useState(false);
    const handleLogout = () => {
        logOut()
    }
    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label onClick={() => setIsTrue(true)} tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon className='h-7 w-7' icon={faBars} />
                        </label>
                        <ul onClick={() => setIsTrue(false)} tabIndex={0} className={`${ !isTrue ? 'hidden' : '' } dropdown-content menu menu-compact mt-3 p-2 shadow-md bg-base-200 rounded-box w-52`}>
                            <NavItems></NavItems>
                        </ul>
                    </div>
                    <Link to={'/'}><img className='w-44' src={'/name.png'} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavItems></NavItems>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className='flex items-center'>
                                    {
                                        user.photoURL ?
                                            <div data-tip={user.displayName} className='tooltip tooltip-left'>
                                                <img className='w-12 h-12 rounded-full border-2 border-black' src={user.photoURL} alt="User Photo" />
                                            </div>
                                            :
                                            <div data-tip={user.displayName || user.email} className='tooltip tooltip-left'><FontAwesomeIcon className='w-12 h-12 text-gray-700' icon={faCircleUser} /></div>
                                    }
                                    <button onClick={handleLogout} className='btn ml-2'>Log Out</button>
                                </div>
                            </>
                            :
                            <Link to={'/login'} className="btn">Log In</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;