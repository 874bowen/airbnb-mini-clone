import React from "react";
import "./App.css"
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import wedPic from "./assets/wedding.png";
import bike from "./assets/mountain-bike.png";
import swim from "./assets/image-12.png";

function App() {
	const values = [1, 3, 4, 5, 7];
	const squareVals = values.map(x => x ** x);
	console.log(squareVals);

	const strs = ["alice", "bob", "charles", "dee", "eileen"]

	const capitalizedStrs = strs.map((str) => {
		let val = str.charAt(0).toUpperCase();
		let rest = str.slice(1);
		return val +rest
	})

	console.log(capitalizedStrs);
	
	
	
	
	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards">
				<Card img={swim} rating="5.0" reviewCount={6} country="USA" title="Life lessons with Katie Zeferes" price={136} />
				
			</section>
		</div>
	);
}

export default App;