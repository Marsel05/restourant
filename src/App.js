import './App.scss';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import React from "react";
import Global from "./components/Global";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Global/> }/>
                <Route path="/menu" element={ <Menu/> }/>
            </Routes>
        </div>
    );
}

export default App;
