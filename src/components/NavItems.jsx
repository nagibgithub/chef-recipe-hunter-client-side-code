import React from 'react';
import {Link} from 'react-router-dom';



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
            title: "Blog",
            path: "/blog"
        }
    ]

    return (
        <>
            {
                navBar.map(nav => <li key={nav.id}><Link to={nav.path}>{nav.title}</Link></li>)
            }
        </>
    );
};

export default NavItems;