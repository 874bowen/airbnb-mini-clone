import React from "react";
import swim from "../assets/image-12.png";
import "./Card.css";

type Card = {
	img: string,
	rating: number,
	reviewCount: number,
	country: string,
	title: string,
	price: number
}

const Card = (props: Card) => {
	
	return (
			<div className="cards__card">
				<img className="cards__img" src={`/src/assets/${props.img}`} alt="" />
				<p className="cards__p">sold out</p>
				<div className="cards__caption">
					<p>
						⭐{props.rating}<span className="cards__span-fade">({props.reviewCount}).{props.country}</span>
					</p>
					<p className="">{props.title}</p> 
               <p><span className="cards__span-bold">From ${props.price}</span> / person</p>
				</div>
			</div>
	);
};

export default Card;
