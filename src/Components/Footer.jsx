import React from 'react';



import Logo from '../UI/follow.png';

import footerimg from '../UI/footerimg.JPEG XR';

import '../Styling/Footer.css';


const Footer = () => {



    return (
        <div style={{ backgroundColor: "#292b2c",color:"white" }}>
            <br />

            <br />
            <br />


            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <h4 style={{fontWeight:"bolder"}}>Our Socials</h4>
                        
                    </div>
                    <div className="col-md-6">
                        <div id="footerIcons" style={{ display:"flex" }}>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/" role="button"><i className="fab fa-facebook-f" /></a>
                            {/* Twitter */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                            {/* Instagram */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/" role="button"><i className="fab fa-instagram" /></a>
                            {/* Linkedin */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/" role="button"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <div className="row">
                    {/* <div className="col-md-3">
                        <img id="imageFooterRow" src={footerimg} alt=""/>
                    </div> */}
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>HEAD OFFICE</li>
                            <li>Shama Ltd.</li>
                            <li>Address: Bole Grase Plaza 3rd floor</li>
                        
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>CONTACT</li>
                            <li>Tel: (251) 911069428</li>
                            <li>E-mail: info@shamalimited.com</li>
                        </ul>
                    </div>
                    {/* <div className="col-md-3">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>SERVICE</li>
                            <li>TOLL 1.800.565.1851</li>
                            <li>PHONE 416.743.3667</li>
                            <li>Fax: (866) 831-0737</li>
                            <li>CUSTOMER SERVICE ext 226 or 230</li>
                        </ul>
                    </div> */}
                </div>
      
                <hr/>
                <br/>
                <div className="row">
                    <h6 style={{fontWeight:"lighter"}}>© 2023 Shama limited. All rights reserved.</h6>
                </div>
            </div>

            <br />
            <br />

        </div>
    )
}
export default Footer;