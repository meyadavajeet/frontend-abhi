import React from 'react';
import { Link } from "react-router-dom";

function Main() {
	return <>
		<header className="header">
			<div className="main-navigation sd-nav">
				<div className="navbar navbar-expand-lg bsnav bsnav-sidebar bsnav-scrollspy bsnav-sidebar-left">
					<Link className="navbar-brand mb-20" to="/">
						<img src="img/profile-avatar.jpg" className="logo-display" alt="thumb" />
						<span className="profile_name">Abhishek Singh</span>
					</Link>
					<button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse justify-content-sm-center pt-20">
						<ul className="navbar-nav navbar-mobile mr-0">
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/"><i className="icofont-home"></i>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/about"><i className="icofont-contact-add"></i>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/service"><i className="icofont-file-document"></i>
									Skills
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/portfolio"><i className="icofont-briefcase-1"></i>
									Portifilo
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/experiance"><i className="icofont-quote-left"></i>
									Experiance
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link smooth-scroll " to="/contact"><i className="icofont-envelope"></i>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="sidebar-copyright pt-10">
						<p className="copyright">Copyright @ Abhi</p>
					</div>
				</div>
				<div className="bsnav-mobile">
					<div className="bsnav-mobile-overlay"></div>
					<div className="navbar"></div>
				</div>
			</div>
		</header>
	</>
}

export default Main;
