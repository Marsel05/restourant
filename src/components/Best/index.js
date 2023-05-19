import line from "../../img/lineabout.svg";
import Slider from "react-slick"
import cok1 from "../../img/cook1.svg"
import cok2 from "../../img/cook2.svg"
import cok3 from "../../img/cook3.svg"
import cok4 from "../../img/cook4.svg"
import cok5 from "../../img/cook5.svg"
import {RxDoubleArrowLeft, RxDoubleArrowRight} from "react-icons/rx";

const Best = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        nextArrow: <RxDoubleArrowRight/>,
        prevArrow: <RxDoubleArrowLeft/>
    };
    return (
        <div id="best">
            <div className="container">
                <div className="best">
                    <div className="best--title">
                        <div className="best--title__line">
                            <img src={line} alt="img"/>
                            <h3>Best Sellers</h3>
                        </div>
                        <h1>You Only Reserve
                            Exception</h1>
                        <p>Each location has a menu that`s curated just for them.
                            See what new at your Cafesio and You`ll find Cafesio
                            Covent Carden moments.</p>
                    </div>
                    <div className="best--slide">
                        <Slider {...settings}>
                            <div>
                                <img src={cok1} alt="img"/>
                            </div>
                            <div>
                                <img src={cok2} alt="img"/>
                            </div>
                            <div>
                                <img src={cok3} alt="img"/>
                            </div>
                            <div>
                                <img src={cok4} alt="img"/>
                            </div>
                            <div>
                                <img src={cok5} alt="img"/>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;