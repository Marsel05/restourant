import React from "react";
import img1 from "../../src/img/cheir.png"
import img2 from "../../src/img/cheir2.png"
import img3 from "../../src/img/cheir3.png"
import img4 from "../../src/img/cheir4.png"
import img5 from "../../src/img/cheir5.png"
import logo from "../../src/img/lineabout.svg"
import logo2 from  "../../src/img/line2.svg"
import Slider from "react-slick";

import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {GrMail} from "react-icons/gr";

function Interior(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };
    return(
        <div id="interior">
            <div className="container">
                <div className="interior">
                    <div className="interior-blocks">
                        <img src={logo} alt=""/>
                        <div className="interior-text">
                            <h1>modern interior</h1>
                        </div>
                        <img src={logo2} alt=""/>
                    </div>
                </div>
                <div className="">
                    <div>
                        <Slider {...settings}>
                            <div className="flex">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="items">
                                <img src={img2} alt=""/>
                                <div className="res">
                                    <img src={img3}  alt="" width="185px" height="240px"/>
                                    <img src={img4} alt="" width="200px" height="240px"/>
                                </div>
                            </div>
                            <div>
                                <img src={img5} alt=""/>
                            </div>
                            <div className="flex">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="items">
                                <img src={img2} alt=""/>
                                <div className="res">
                                    <img className="res1" src={img3}  alt="" width="185px" height="240px"/>
                                    <img className="res2" src={img4} alt="" width="200px" height="240px"/>
                                </div>
                            </div>
                            <div>
                                <img src={img5} alt=""/>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div className="interior-visit">
                    <div>
                        <div className="text">
                            <img src={logo} alt=""/>
                            <h1>Visit Restaurant</h1>
                        </div>
                        <h2>Join Us  for
                            <br/>Happy Hours</h2>
                        <h3>Your neighborhood</h3>
                        <h4>225$.Lake Ave.Suite 1150
                            <br/>>Pasadena,CA 911101</h4>
                        <h3>Opening hours:</h3>
                        <h4>Mon-Thu: 10:00 am - 01:00 am
                            <br/>>Fri-Sun: 10:00 am - 02:00 am</h4>
                        <button className="btn">Purchase gift card
                            <svg className="svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.21484 2.96509L10.2498 6.00009L7.21484 9.03509" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 6H10.165" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="text2">
                        <h1>contact Info</h1>
                        <h4 className="h4"><BsFillTelephoneInboundFill className="icon1"/>+771219900</h4>
                        <h4 className="h4"><GrMail  className="icon1"/>motionweb312@gmail.com</h4>
                        <div className="icon">
                            <FaTelegramPlane className="iconn"/>
                            <AiFillInstagram/>
                        </div>
                        <div className="maps">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46778.723206671355!2d74.5130323216797!3d42.8798047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1684396026993!5m2!1sru!2skg"
                                width="390" height="190"  style={{border: "0px", color: "", }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Interior