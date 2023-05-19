import React from 'react';
import line from "../../img/lineabout.svg"
import glaze from '../../img/glaze.png'
import foot from "../../img/spoon.png"

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="line">
                <img src={line} alt="img"/>
                <h3>About Us</h3>
            </div>
                <div className="about">
                    <div className="about--title">
                        <h1>A Journey Throught
                        Cafesio Flavors</h1>
                        <img src={foot} alt=""/>
                    </div>
                    <div className="about--lorem">
                        <p>Try dishes that will open up new tastes for you and delight your eyes with their appearance.
                            Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a
                            table now and enjoy a unique experience of taste discovery!</p>
                        <img src={glaze} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;