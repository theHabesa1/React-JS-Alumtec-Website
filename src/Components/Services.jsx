import React from 'react';




import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import dc from '../UI/dc.JPEG XR'
import fe from '../UI/fe.JPEG XR'
import li from '../UI/li.JPEG XR'
import so from '../UI/gazeta.png'



const Services = () => {


    return (
        <div>
            <div className="container">
                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY' initiallyVisible={true}>
                            Our Services
                    </ScrollAnimation>
                    </h1>
                    {/* <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                        <ScrollAnimation animateIn='fadeIn' delay={400}>
                            AlumTech Glass and Aluminium offers a wide range of aluminium products and services.

                            All our products comply with Dubai Green Building Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
                    </ScrollAnimation>
                    </h5> */}
                    <br />

                    {/* Here will be all services */}
                    <div>
                        {/* Tabs navs */}
                        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">QR MENU</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">POWER BANK</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">ERP SYSTEM</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-4" data-mdb-toggle="tab" href="#ex3-tabs-4" role="tab" aria-controls="ex3-tabs-4" aria-selected="false">GAZETTAA.COM</a>
                            </li>
                        </ul>
                        {/* Tabs navs */}
                        {/* Tabs content */}
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                <span style={{ color: "#233982"}}>QR Menu</span>
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                Now, when you dine out, you're handed a QR code instead of a traditional menu. With a simple scan using your smartphone, you gain access to a digital menu that's interactive, visually appealing, and always up-to-date. It's a dining experience tailored to the digital age. <br /> <br />
                                                Contactless menus are more than just a temporary adaptation; they're a glimpse into the future of dining.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src="https://ik.imagekit.io/n0rrhn2df/photo1695209039%20(1).jpeg?updatedAt=1695209307780" width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                <span style={{ color: "#233982"}}>Power Bank</span>
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                Introducing our revolutionary Power Bank — the epitome of portable energy, designed with your convenience in mind. This sleek device comes with a powerful 20000mAh battery capacity, ensuring your devices stay charged and ready for action.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src="https://ik.imagekit.io/n0rrhn2df/photo1695209039.jpeg?updatedAt=1695209307234" width="80%" height="400" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">

                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                <span style={{ color: "#233982"}}>ERP sysem</span>
                                              </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                Imagine a seamless, interconnected ecosystem where every aspect of your business flows harmoniously. That's precisely what our Enterprise Resource Planning (ERP) system offers.

At its core, our ERP system is a digital nerve center that integrates and streamlines all of your company's critical processes, from finance and HR to supply chain management and customer relations. It empowers you with real-time insights, enabling smarter decision-making and boosting overall productivity.
                                              </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src="https://intuendi.com/wp-content/uploads/2022/11/erp.png.webp" width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-4" role="tabpanel" aria-labelledby="ex3-tab-4">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                            <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
    <a href="https://www.gazettaa.com" style={{ textDecoration: "none", color: "#233982" }}>
        Gazettaa.com
    </a>
</ScrollAnimation>

                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    <br />
                                                    Gazettaa is a news, entertainment and digital advertising website that is revolutionizing the way people consume content. Gazetta is a powerful platform for business owners and professionals to promote their goods and services and to connect with their target audience.
                                                    <br />
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={so} width="100%" height="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tabs content */}
                    </div>
                    {/* Here will be all services */}

                </div>
                <br />

            </div>
        </div>
    )
}
export default Services;