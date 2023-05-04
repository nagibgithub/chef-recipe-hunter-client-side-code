import React from 'react';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import {Toaster} from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false}/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;