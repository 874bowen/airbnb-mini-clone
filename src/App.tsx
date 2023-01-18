import React from "react";
import "./App.css"
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { data } from "./data"

function App() {
	
	const cardData = data.map((d) => {
		return (
		<Card
			key={d.id}
			item={d}
		/>
		)
	})
	
	
	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards">
				{cardData}
			</section>
		</div>
	);
}

export default App;