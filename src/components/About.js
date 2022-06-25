import React from 'react';
const About = () => {
    return <>
        {/* <Main/> */}
        <div className="about-area de-padding">
            <div className="line_wrap">
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
            </div>
            <div className="about-wpr mt-20">
                <div className="container pl-20">
                    <div className="row">
                        <div className="col-md-5 mb-50">
                            <div className="about-left wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                <div className="about-header-img">
                                    <img src="img/about-me.png" alt="about me" className="responsive-fluid bounce-animate" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about-right wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                                <span className="top-title">About Me</span>
                                <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                    Front End Developer
                                </h2>
                                <p className="wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                                    UI (Front End Developer) with over 6 years of successful experience in
                                    Front End Development and 1 year experience in ReactJs.
                                    Recognized consistently for performance excellence and contributions to
                                    success in IT industry.<br></br> Enthusiastic Website designer eager to contribute
                                    to team success through hard work, attention to detail and excellent
                                    organizational skills. Motivated to learn, grow and excel in IT Industry.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="about-cn">
                                            <ul>
                                                <li><i className="fas fa-user-tie"></i> Abhishek Singh</li>
                                                <li><i className="fab fa-skype"></i> singhabhi93</li>
                                                <li><i className="far fa-envelope"></i> frontendabhi@gmail.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="about-cn">
                                            <ul>
                                                <li><i className="fas fa-map-marker-alt"></i>Grater Noida</li>
                                                <li><i className="fas fa-birthday-cake"></i> 24 Dec, 1993</li>
                                                <li><i className="fab fa-whatsapp"></i> +91-8887965575</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>;
}

export default About;
