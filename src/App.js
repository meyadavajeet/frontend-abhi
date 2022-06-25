
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Experiance from './components/Experiance';
import Service from './components/Service';
import Footer from './components/Footer';
import { Routes, Route, MemoryRouter, } from "react-router-dom";
import Portifilo from './components/Portifilo';
import Main from './components/Main';


const App = () => {
	return (
		<>
			<div id="main-wrapper">
				<div className="main-area-width">
					<main className="main">
						<BrowserRouter>
						{/* <MemoryRouter UNSAFE_allowNesting> */}
						{/* <MemoryRouter> */}
							<Main />
							<Routes>
								<Route path="/" exact element={<Banner />} />
								<Route path="/about" element={<About />} />
								<Route path="/experiance" element={<Experiance />} />
								<Route path="/portfolio" element={<Portifilo />} />
								<Route path="/service" element={<Service />} />
								<Route path="/contact" element={<Footer />} />
							</Routes>
						{/* </MemoryRouter> */}
						</BrowserRouter>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
