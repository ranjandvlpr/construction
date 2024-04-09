import React, { useRef } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.js'
import Footer from './Footer.js'
import Slider from './Slider.js';
import Service from './Service.js'
import Contact from './Contact.js';




function Content() {

    return (
        <div>
            <Header />

            <Footer />
        </div>
    )
}

export default Content