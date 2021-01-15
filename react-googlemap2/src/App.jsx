import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from "./components/map/Map"
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

function App() {
	const location = {
		address: "1600 Amphitheatre Parkway, Mountain View, california.",
		lat: 37.42216,
		lng: -122.08427,
	};

	return (
		<div className="App">
		  <IntroSection />
		  <ContactSection />
		  <MapSection location={location} zoomLevel={17} />
		  <DisclaimerSection />
		  <FooterSection />
		</div>
	);
}

export default App;
