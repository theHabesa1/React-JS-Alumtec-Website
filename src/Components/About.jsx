import React from 'react';

import { Link } from "react-router-dom";

import proudlycanadian from "../UI/etthiopia.png"

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/About.css';


const About = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <h1 style={{ textTransform: "uppercase" }}>
                <ScrollAnimation delay={400}
                    animateIn='flipInX'
                    animateOut='flipOutY'
                >
                    <span style={{ color: "#233982"}}>Shama Limited </span>
            </ScrollAnimation>
            </h1>
            <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                Shama is a marketing company focused on digitalization and developing innovative solutions for other businesses
                </ScrollAnimation>

            </h3>
            <h5 style={{ fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                Shama is currently working with around 2000 restaurants in Addis Ababa by giving services on payment integration in collaboration with banks Customized QR menu presented with pictures taken by professional camera crew of the company. In addition to this creating digital solutions for the restaurants.
                </ScrollAnimation>
            </h5>
            <br />
            <div style={{ textAlign: "center", color:"#233982" }}>
                <Link id="aboutuspagebtn" to="/about" className="btn">Learn More</Link>
            </div>

            <br />

            <div className="text-center">
                <img src={proudlycanadian} width="250" alt="proudlycanadian" />

                <br />

                <br/>

                <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                    <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                        Proudly Ethiopian
                </ScrollAnimation>
                </h3>

            </div>



            <br />

        </div>
    )
}
export default About;