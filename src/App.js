import React, {useRef, useEffect, useState} from "react";
import "./app.css";

import img from "./assets/model.png"

// https://api.github.com/users/tennebris/repos

import Logo from "./components/logo";

function App() {
	return (
		<div className="container">
			<div className="item" id="home">
				<nav className="navbar">
					<a href="#initial"><Logo /></a>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
				<main>
					<Logo />
				</main>
	  		</div>


			<div className="item" id="about">
				<div className="titlePage">
					<h1>About</h1>	
				</div>
				<div className="texts">
					<h1 className="title">Alisson Santos</h1>
					<h1 className="subtitle">Webdesigner and developer</h1>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
					</div>
				</div>

				<div className="image">
					<img src={img} alt="myPhoto" />
				</div>
			</div>


			<div className="item" id="projects">
				
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
