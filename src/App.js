import './App.scss';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import React from "react";



function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/menu" element={ <Menu/> }/>
            </Routes>
        </div>
    );
}

export default App;
