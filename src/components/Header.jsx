import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

    const navBar = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "About Us",
            path: "/about"
        },
        {
            id: 3,
            title: "Log In",
            path: "/login"
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog"
        }
    ]
    return (
        <div>
            {
                navBar.map(pd => <NavLink className={({isActive, isPending}) =>
                    isActive
                        ? "bg-sky-300"
                        : isPending
                            ? "bg-gray-300"
                            : ""} key={pd.id} to={pd.path} >{pd.title}</NavLink>)
            }
        </div>
    );
};

export default Header;