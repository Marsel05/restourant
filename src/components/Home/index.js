import React, {useState} from 'react';
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneFill, BsTelephoneFill} from "react-icons/bs";
import img from "../../img/lineabout.svg"
import img2 from "../../img/line2.svg"
import {FaUserEdit} from "react-icons/fa";



const Home = () => {
    const [modal, setModal] = useState(false)
    return (

        <div id="home">
            {/*<div className="container">*/}
            <div className="home">
                <div className="home--shift">
                    <div className="home--shift__delicuios">
                        <div className="home--shift__delicuios--lin">
                            <img src={img} alt=""/>
                            <div className="home--shift__delicuios--lin__lin2">

                            </div>
                        </div>
                        <h5>Delicious</h5>
                        <div className="home--shift__delicuios--lin">
                            <img src={img2} alt=""/>
                            <div className="home--shift__delicuios--lin__lin2">

                            </div>
                        </div>
                    </div>
                    <h1>Italian Cuisine</h1>
                    <p>Classic steak & delicious with delightfully unexpenced twists. <br/>
                        The Restaurant`s sunny decor was inspired by the diners</p>
                    <div className="home--shift__delicuios--lin__lin2">

                    </div>
                    <button
                        onClick={() => {
                            setModal(true)
                        }}
                    >Reserve Your Table</button>
                    <div className="home--shift__delicuios--lin__lin2">

                    </div>
                    <div className="home--shift__modal" style={{
                        display: modal ? "block" : "none"
                    }}>
                        <div className="home--shift__modal--inputs">
                            <h2 onClick={() => {
                                setModal(false)
                            }}>&times;</h2>
                            <div className="home--shift__modal--inputs__user">
                                <div className="home--shift__modal--inputs__user--icon">
                                    <FaUserEdit/>
                                </div>
                                <div className="">
                                    <h3>NAME</h3>
                                    <input className="home--shift__modal--inputs__input1" type="text" placeholder="Enter your name" />
                                </div>

                            </div>
                            <div className="home--shift__modal--inputs__user">
                                <div className="home--shift__modal--inputs__user--icon">
                                    <BsTelephoneFill/>
                                </div>
                                <div className="">
                                    <h3>PHONE</h3>
                                    <input type="text" placeholder="Enter your phone" />
                                </div>
                            </div>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
                <div className="home--number">
                    <div className="home--number__location">
                        <p>Location</p>
                        <div className="home--number__location--lin"></div>
                        <a href="#">
                            <ImLocation2/>
                        </a>
                        <p>Rua da moeda 1g,1200-275,Portugal</p>
                    </div>
                    <div className="home--number__location">
                        <p>Hotline</p>
                        <div className="home--number__location--lin"></div>
                        <a href="#">
                            <BsFillTelephoneFill/>
                        </a>
                        <p>+771219900</p>
                    </div>
                    <div className="modal" onClick={() => {
                        setModal(false)
                    }} style={{
                        display: modal === true ? "block" : "none"
                    }}></div>
                </div>
                <div className="home--absolute">
                    <div className="home--absolute__local1"></div>
                    <div className="home--absolute__local2"></div>
                    <div className="home--absolute__local3"></div>
                </div>
            </div>

            {/*</div>*/}
        </div>
    );
};

export default Home;