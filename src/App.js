import React from "react";
import "./app.css";

import Logo from "./components/logo";

function App() {
	return (
		<div className="container">
			<div className="item" id="initial">
				<nav class="navbar">
					<a href="#initial"><Logo /></a>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
				<main>
					<Logo />
				</main>
	  		</div>
			<div className="item" id="home">
				{/* <Logo /> */}
			</div>
			<div className="item" id="about">
				{/* <Logo /> */}
			</div>
			<div className="item" id="skills">
				{/* <Logo /> */}
			</div>
			<div className="item" id="contact">
				{/* <Logo /> */}
			</div>
		</div>
	);
}

export default App;
