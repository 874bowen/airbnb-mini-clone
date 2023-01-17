import React from "react";
import heroImg from "../assets/group-77.png";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__img-div">
				<img className="hero__img" src={heroImg} alt="" />
			</div>
			
			<div>
				<h2 className="hero__h2">Online Experiences</h2>
				<p className="hero__p">
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
};

export default Hero;
