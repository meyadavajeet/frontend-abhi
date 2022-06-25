import React from 'react';
function Banner() {
    return <>
        {/* <Main /> */}
        <div className="hero-section hero-section-bg">
            <div className="line_wrap">
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
            </div>
            <div className="container sidebar-toptext">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-top-contact">
                            <span className="phone_contact">+91 8887965575</span>
                            <span className="email_contact">frontendabhi@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-contact">
                < a href='@' className="top-contact-btn smooth-scroll">
                    <i className="icofont-envelope"></i>
                </a>
            </div>
            <div className="hero-single sidebar-hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-1 col-sm-12 pl-20">
                            <div className="hero-content wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".6s">
                                <h2 data-splitting className="top-title pt-30 wow fadeInUp" data-wow-duration=".001s" data-wow-delay=".001s">Abhishek <span className="colored">Singh.</span></h2>
                                <div className="typed-strings">
                                    <p> <span className="type_color">Front End Developer</span></p>
                                    <p> <span className="type_color">React Developer</span></p>
                                    <p> <span className="type_color">UI Developer</span></p>
                                </div>
                                <p className="text-16 header_type_text text-white mb-2 mb-md-3">
                                    <span className="typed"></span>
                                </p>
                                <p className="header-intro-text wow fadeInUp pt-10" data-wow-duration=".6s" data-wow-delay=".8s">UI (Front End Developer) with over 6 years of successful experience in
                                    Front End Development and 1 year experience in ReactJs.</p>
                                <div className="hro-btn wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".9s">
                                    < a href="img/Abhishek_Singh_Frontend.pdf" className="theme-btn" download>
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-50">
                            <div className="right-social-icon">
                                <ul className="social-icon">
                                    <li>< a href="@" ><i className="fab fa-facebook-f"></i></a></li>
                                    <li>< a href="@" ><i className="fab fa-dribbble"></i></a></li>
                                    <li>< a href="@" ><i className="fab fa-behance"></i></a></li>
                                    <li>< a href="@" ><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-scroll-down text-center">
                <a href="google.com" className="scroll-down-arrow scroll_down smooth-scroll"><i className="icofont-scroll-bubble-down"></i></a>
            </div>
        </div>
    </>;
}

export default Banner;
