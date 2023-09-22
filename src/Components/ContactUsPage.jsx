import React, { useState, useEffect } from 'react';

import firebase from '../firebase/index';


import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/careerPage.css';



import Footer from './Footer';

const CareersPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const sendData = () => {

        ////////////////////////////To take the current date and time//////////////////////////////////
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        ////////////////////////////To take the current date and time//////////////////////////////////

        let Data = {
            NAME: name,
            EMAIL: email,
            SUBJECT: subject,
            MESSAGE: message,
            currentTime: dateTime
        }

        //For storing all ads i.e to show at main page
        firebase.database().ref(`ContactUs/`).push(Data);

        alert("Thank you for contacting Us.We will reach back to you soon.");

    }

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#bottom" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>


            <br />
            <br />
            <br />
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5971131383563!2d38.782199199999995!3d9.001382299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ca607f7303%3A0x3a0a3036e2d86d34!2s2Q2J%2BHV3%20Grace%20Plaza%20%7C%20Atlas%20%7C%20%E1%8C%8D%E1%88%AC%E1%88%B5%20%E1%8D%95%E1%88%8B%E1%8B%9B%20%7C%20%E1%8A%A0%E1%89%B5%E1%88%8B%E1%88%B5%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1632352020589!5m2!1sen!2set" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

            <div className="container">

                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase text-primary">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            Contact Us
                    </ScrollAnimation>
                    </h1>
                    
                    <br />
                    <h6 style={{ fontWeight: "lighter", textAlign: "left" }}>
                        <ScrollAnimation animateIn='bounceInRight' delay={400}>
                            We will try to reach you soon
                        </ScrollAnimation>
                    </h6>
                    <br />

                    <label id="bottom" className="form-label">Your Name (required)</label>
                    <input type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Email (required)</label>
                    <input type="email" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Subject</label>
                    <input type="text" placeholder="Enter your subject here" onChange={(e) => setSubject(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Your Message</label>
                    <textarea className="form-control" placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>

                    <br />

                  


                    {(name == "" || email == "" || subject == "" || message == "" ) ? (
                        <div>
                            <button disabled={true} className="btn btn-dark btn-lg" onClick={sendData}>Submit</button>
                            <br/> <br/>
                            <p className="text-danger">* Please fill all the fields to continue</p>
                        </div>
                    ) : (
                            <div>
                                <button className="btn btn-success btn-lg" onClick={sendData}>Submit</button>
                            </div>
                        )}



                    <br />



                </div>


            </div>
            <Footer />
            {/* <div id="bottom"></div> */}
        </div>
    )
}
export default CareersPage;