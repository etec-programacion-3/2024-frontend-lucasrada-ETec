import './styles/App.css';
import './styles/Footer.css';
import './styles/main.css';

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;