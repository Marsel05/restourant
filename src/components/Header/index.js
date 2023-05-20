import {useState} from "react";

const Header = () => {
    const [modal, setModal] = useState(false)
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>Restaurant</h1>
                    <div className="header--nav" style={{
                        display: modal ? "block" : "none",
                        zIndex: modal ? "97" : ""
                    }}>
                        <a href="#">interior</a>
                        <a href="#">About Us</a>
                        <a href="#">Contacts</a>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="header--search">
                        <input type="search" placeholder="   search..."/>
                        <select>
                            <option>En</option>
                            <option>Ru</option>
                            <option>Kg</option>
                        </select>
                    </div>
                    <div className="header--burger" style={{
                        zIndex: modal ? "99" : ""
                    }} onClick={() => {
                        setModal(!modal)
                    }}>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;