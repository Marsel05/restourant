import React from "react";
// import {BsFillTelephoneInboundFill} from "react-icons/bs";
// import {GrMail} from "react-icons/gr";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

function Footer(){
    return(
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-foot">
                        <h1>Restaurant</h1>
                        <div>
                            <a href="">interior</a>
                            <a href="">About us</a>
                            <a href="">Menu</a>
                            <a href="">Contacts</a>
                        </div>
                        <div>
                            <FaTelegramPlane className="icon2"/>
                            <AiFillInstagram className="icon2"/>
                        </div>
                    </div>
                </div>

                <h4 className="foot-h4">c 2023 Motion Study LLC</h4>
            </div>
        </div>
    )
}
export default Footer;