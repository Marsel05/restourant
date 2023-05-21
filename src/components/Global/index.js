import React from 'react';
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Best from "../Best";
import Main from "../Main";
import Interior from "../Interior";
import Footer from "../Footer";

const Global = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Best/>
            <Main/>
            <Interior/>
            <Footer/>
        </div>
    );
};

export default Global;