import React from 'react';
import {NavLink} from 'react-router-dom';



const NavItems = () => {

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
            title: "All Chefs",
            path: "/chefs"
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog"
        }
    ]

    return (
        <>
            {
                navBar.map(nav => <li key={nav.id}><NavLink to={nav.path}>{nav.title}</NavLink></li>)
            }
        </>
    );
};

export default NavItems;