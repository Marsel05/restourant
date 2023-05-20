import React from 'react';
import line2 from "../../img/line2.svg"
import line from "../../img/lineabout.svg"
import {useState} from 'react';
import { NavLink} from "react-router-dom";

const Main = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const tabs = [
        {
            title: 'Desserts',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Beer Brewery</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$24</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },
        {
            title: 'Hot Drinks',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Burger&Pasta</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$14</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },
        {
            title: 'Cold Drinks',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Burger&Pasta</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$14</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },
        {
            title: 'National Foods',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Burger&Pasta</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$14</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },
        {
            title: 'Eastern cuisine',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Burger&Pasta</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$14</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },
        {
            title: 'Fast foods',
            // content: <div className="card">
            //     <div className="card--text">
            //         <h1>Burger&Pasta</h1>
            //         <p>.....................................................................................</p>
            //         <h4>$14</h4>
            //     </div>
            //     <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om
            //         pneumativ.</p>
            // </div>
        },

    ];

    return (
        <div id="main">
            <div className="container">
                <div className="menu ">
                    <div className="menu--title">
                        <img src={line} alt="img"/>
                        <h4>Main Menu</h4>
                        <img src={line2} alt="img"/>
                    </div>
                    <h1>Exceptional Quality. Delightfully Delicious</h1>
                </div>
                <div className="tab">
                    <ul className="tab--list">
                            {
                                tabs.map((tab, index) => (
                                    <li key={index}>
                                        <NavLink to="/menu">
                                            <center>
                                                <button
                                                    className={`tab--list__link ${activeTab === index ? 'active' : ''}`}
                                                    onClick={() => handleTabClick(index)}
                                                >
                                                    {tab.title}   {activeTab === index && <div className="line"/>}
                                                </button>
                                                <div className="liner">SDFDS</div>
                                            </center>


                                        </NavLink>

                                    </li>))
                            }


                    </ul>
                    <div className="tab--content">
                        <div className="card">
                            <div className="card--text">
                                <h1>Beer Brewery</h1>
                                <p>.....................................................................................</p>
                                <h4>$24</h4>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <div className="flex flex-col justify-center items-center absolute right-0">
                                <h3>Order Now</h3>
                                <div className="card--chyzyc"></div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="card--text">
                                <h1>Burger&Pasta</h1>
                                <p>.....................................................................................</p>
                                <h4>$14</h4>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <div className="flex flex-col justify-center items-center absolute right-0">
                                <h3>Order Now</h3>
                                <div className="card--chyzyc"></div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="card--text">
                                <h1>Burger&Pasta</h1>
                                <p>.....................................................................................</p>
                                <h4>$14</h4>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <div className="flex flex-col justify-center items-center absolute right-0">
                                <h3>Order Now</h3>
                            <div className="card--chyzyc"></div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="card--text">
                                <h1>Burger&Pasta</h1>
                                <p>.....................................................................................</p>
                                <h4>$14</h4>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <div className="flex flex-col justify-center items-center absolute right-0">
                                <h3>Order Now</h3>
                                <div className="card--chyzyc"></div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="card--text">
                                <h1>Burger&Pasta</h1>
                                <p>.....................................................................................</p>
                                <h4>$14</h4>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <div className="flex flex-col justify-center items-center absolute right-0">
                                <h3>Order Now</h3>
                                <div className="card--chyzyc"></div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Main;