import React from 'react';

import '../Styling/SlideShow.css';

import video from '../UI/shamavid.mp4';

import { Link } from "react-router-dom"



const SlideShow = () => {

    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video autoPlay loop muted controls>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h3 className="animateIt" style={{ fontWeight: "lighter" }}> <span style={{ color: "#233982", fontWeight: "bold" }}>SHAMA LTD</span><br /> A marketing company focused <br/>on digitalization and developing innovative solutions for other businesses</h3>
                    {/* <h4 className="animateIt" >
    <span style={{ color: "#233982", fontWeight: "bold" }}>The Past</span><br />
    <span style={{ color: "white", fontWeight: "bold" }}>The Present</span><br />
    <span style={{ color: "#233982", fontWeight: "bold" }}>The Future</span>
</h4> */}

                    <Link to="/about" className="btns">Read More</Link>
                </div>
            </section>

        </div>
    )
}
export default SlideShow;