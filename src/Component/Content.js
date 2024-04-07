import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
// import { Route, Routes } from 'react-router-dom';
import Slider from './Slider.js';
import Service from './Service.js'
import Contact from './Contact.js';

function Content() {
    return (
        <div>
            <Header />
            <Slider />

            <Service />
            <Contact />
            <Footer />
            {/* <Routes>
                <Route path="/" element={<div></div>} />
            </Routes> */}

        </div>
    )
}

export default Content