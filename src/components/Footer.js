import React from 'react';
import ContactUs from './ContactUs'
function Footer() {
    return <>
        <div className="clearfix"></div>
        <footer id="contact" className="footer">
            <div className="container pl-20">
                <div className="site-title text-center pt-80">
                    <span className="resume-title contact-title wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".6s">Contact</span>
                    <h2 data-splitting className="about-tl-3 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                        Get in Touch
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="contact-area">
                            <div className="contact-left mt-20">
                                <ContactUs />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-right mt-40">
                            <ul>
                                <li>
                                    <div className="addr mt-10 wow fadeInUp" data-wow-duration=".3s" data-wow-delay=".8s">
                                        <div className="contact-right-icon two">
                                            <i className="icofont-envelope"></i>
                                        </div>
                                        <p className="mb-0 contact_itext">
                                            frontendabhi@gmail.com
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="addr mt-10 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                        <div className="contact-right-icon three">
                                            <i className="icofont-brand-whatsapp"></i>
                                        </div>
                                        <p className="mb-0 contact_itext">
                                            +91-8887965575
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="addr mt-10 wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".8s">
                                        <div className="contact-right-icon one">
                                            <i className="icofont-google-map"></i>
                                        </div>
                                        <p className="mb-0 contact_itext">
                                            Noida, Uttar Pradesh
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="gmap-area mt-10">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mt-50">
                            <div className="copyright-left wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".7s">
                                <span className="copyright-text">all rights reserved by Singh Abhi.</span>
                            </div>
                        </div>
                        <div className="col-md-4 mt-50">
                            <div className="copyright-right wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                <div className="copyright-menu">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-50">
                            <div className="copyright-social wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".9s">
                                <ul className="footer-social">
                                    <li>< a href="@"><i className="fab fa-facebook-f"></i></a></li>
                                    <li>< a href="@" ><i className="fab fa-twitter"></i></a></li>
                                    <li>< a href="@" ><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}
export default Footer;
