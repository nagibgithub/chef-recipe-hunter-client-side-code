import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

    const [nav, setNav] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/nav')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])

    return (
        <div>
            {
                nav.map(pd => <NavLink key={pd.id} to={pd.path} >{pd.title}</NavLink>)
            }
        </div>
    );
};

export default Header;