
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
const Result = () => {
    return (
        <p>Sucessfully Submited </p>
    )
}

const ContactUs = () => {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b6enxcf', 'template_keaa8lw', e.target, 'user_6fbM9o8YAhWgXiRBnZx9j').then(result => {
            console.log(result)
        }).catch(err => console.log(err));

        e.target.reset();
        showResult(true);
    };

    setTimeout(() => {
        showResult(false)
    }, 5000);

    return (
        <>

            <form className="contact-form" onSubmit={sendEmail}>
                <div className="row g-4">
                    <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                        <input type="text" name="subject" className="form-control input-style-2" placeholder="Subject" />
                    </div>
                    <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
                        <input type="text" name="name" className="form-control input-style-2" placeholder="Your name" />
                    </div>
                    <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                        <input type="email" name="email" className="form-control input-style-2" placeholder="Your Email Here" />
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
                        <textarea className="form-control input-style-2" name="message" placeholder="Drop Message"></textarea>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
                        <button type="submit" className="theme-btn send-me mt-30 text-center">
                            Send Me
                        </button>
                    </div>
                    <div className="col-12 text-center">
                        <p className="form-message">
                            {result ? <Result /> : null}
                        </p>
                    </div>
                </div>
            </form>

        </>
    )
}

export default ContactUs