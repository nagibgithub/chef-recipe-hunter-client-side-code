import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import NavItems from './NavItems';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [isTrue, setIsTrue] = useState(false)

    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label onClick={()=>setIsTrue(!isTrue)} tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon className='h-7 w-7' icon={!isTrue? faBars : faXmark} />
                        </label>
                        <ul onClick={() => setIsTrue(false)} tabIndex={0} className={`${ !isTrue ? 'hidden' : ''} dropdown-content menu menu-compact mt-3 p-2 shadow-md bg-base-200 rounded-box w-52`}>
                            <NavItems></NavItems>
                        </ul>
                    </div>
                    <Link to={'/'}><img className='w-44' src={'name.png'} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavItems></NavItems>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'} className="btn">Log In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;