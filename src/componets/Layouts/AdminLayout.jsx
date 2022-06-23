import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Homepage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';
import Playvideos from '../PlayVideos/PlayVideos';
const Adminlayout = () => {
    return (
        <div>                    
            <Navbar/>
            <Playvideos />
            <Homepage />
            <Footer />
            <Outlet/>            
        </div>
    );
}

export default Adminlayout;
