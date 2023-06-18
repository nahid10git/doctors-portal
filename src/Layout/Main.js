import React from 'react';
import Navbar from '../Pages/Sheard/Navbar/Navbar';
import Footer from '../Pages/Sheard/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;