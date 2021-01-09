import React, { useEffect, useState, useRef } from "react";
import Icon, { FontAwesome } from 'react-web-vector-icons';
import axios from 'axios';

import "./app.css";
import img from "./assets/model.png"
import Logo from "./components/logo";


function App() {
	const [repos, setRepos] = useState([]);
	const skills = useRef();
	const [isVisable, setIsVisable] = useState();
	
	function isInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	
		);
	}
	useEffect(() => {
		(async () => {
			const response = await axios.get('https://api.github.com/users/khausxl/repos');
	
			setRepos(response.data)
		})();
	},[]);

	const variavel = {
		'php':{
			'--teste': '28%'
		},
		'python':{
			'--teste': '87%'
		},
		'js':{
			'--teste': '65%'
		},
		'reactjs':{
			'--teste': '80%'
		},
		'rn':{
			'--teste': '90%'
		},
		'nodejs':{
			'--teste': '85%'
		},
	}

	return (
		<div className="container" onScroll={() => {
			if(isInViewport(skills.current)){
				setIsVisable(true)
			}else{
				setIsVisable(false)
			}
		}} >
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
				<div className="titlePage">
					<h1>Projects</h1>	
				</div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Linguagem</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
						repos.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.language}</td>
								<td><a href={item.html_url}>Open</a></td>
							</tr>
						))
						}
					</tbody>
				</table>
			</div>


			<div className="item" id="skills" ref={skills} >

				<div className="titlePage">
					<h1>Skills</h1>	
				</div>

				<div className="bars">
					<label>PHP</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.php} data={variavel.php["--teste"]}></div>
					</div>
					<label>python</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.python} data={variavel.python["--teste"]}></div>
					</div>
					<label>javascript</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.js} data={variavel.js["--teste"]}></div>
					</div>
					<label>reactjs</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.reactjs} data={variavel.reactjs["--teste"]}></div>
					</div>
					<label>react native</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.rn} data={variavel.rn["--teste"]}></div>
					</div>
					<label>nodejs</label>
					<div className="bar" >
						<div className={isVisable ? "progress anime" : "progress animeReverse"} style={variavel.nodejs} data={variavel.nodejs["--teste"]}></div>
					</div>
				</div>

			</div>


			<div className="item" id="contact">
				<div className="titlePage">
					<h1>Contact</h1>	
				</div>
				<div className="main">
					<div className="txt">
						<h1>Send me a message</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
					</div>

					<div className="inputs">
						<input type="text" placeholder="Your name" />
						<input type="text" placeholder="Your mail" />
						<textarea placeholder="Your message" />
						<button>Send</button>
					</div>
				</div>

				<footer>
					<div className="center">
						<FontAwesome name="facebook" color="white" size={40} />
					</div>
					<div className="bottom">
						&copy;
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
