import React from 'react';



import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/Products.css';



import cwf from '../UI/cwf.JPEG XR'
import aw from '../UI/aw.JPEG XR'
import ad from '../UI/ad.JPEG XR'
import asf from '../UI/asf.JPEG XR'
import agr from '../UI/agr.JPEG XR'
import ip from '../UI/ip.JPEG XR'

const Products = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <hr />
            <h1 className="text-center text-uppercase">
                <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
                    Our Clients
                </ScrollAnimation>
            </h1>
            <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                <ScrollAnimation animateIn='fadeIn' delay={400}>
                Our extensive and professional network boasts over 100+ restaurants, showcasing our commitment to delivering exceptional dining experiences to our valued customers. With a dedicated team and a diverse culinary lineup, we're setting the standard for excellence in the restaurant industry.
                </ScrollAnimation>
            </h5>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/WEG.jpg?updatedAt=1695199876247" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    WEG COFFEE
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/WILD%20COFFEE.jpg?updatedAt=1695199884878" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    WILD COFFEE
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/TIRU%20KITFO.jpg?updatedAt=1695199863380" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    TIRU KITFO 
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/LANOUVELE.jpg?updatedAt=1695199851903" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    LANOUVELE
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/GRUB%20ON.jpg?updatedAt=1695199838171" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                GRUB ON
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src="https://ik.imagekit.io/n0rrhn2df/BABIS.jpg?updatedAt=1695199819581" alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    BABIS BISTRO
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;