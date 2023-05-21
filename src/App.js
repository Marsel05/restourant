import './App.scss';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import React from "react";
import About from "./components/About";
import Best from "./components/Best";
import Main from "./components/Main";
import Interior from "./components/Interior";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={ <Home/> }/>
                <Route path={"/about"} element={  <About/> }/>
                <Route path={"/best"} element={ <Best/> }/>
                <Route path={"/main"} element={ <Main/> }/>
                <Route path={"/interior"} element={ <Interior/> }/>
                <Route path={"/footer"} element={ <Footer/> }/>
            </Routes>
        </div>
    );
}

export default App;
