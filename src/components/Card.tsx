import React from "react";
import swim from "../assets/image-12.png";
import "./Card.css";

type Stats = {
	rating: number,
	reviewCount: number
}

type Card = {
	coverImg: string,
	stats: Stats,
	location: string,
	title: string,
	price: number,
	openSpots: number
}

type Prop = {
	key: number,
	item: Card
}
const Card = (props: Prop) => {
	let cardText;

	if (props.item.openSpots === 0) cardText = "sold out";
	else if (props.item.location === "Online") cardText = "Online"
	
	return (
			<div className="cards__card">
				<img className="cards__img" src={`/src/assets/${props.item.coverImg}`} alt="" />
				{cardText && <p className="cards__p">{cardText}</p>}
				<div className="cards__caption">
					<p>
						⭐{props.item.stats.rating}<span className="cards__span-fade">({props.item.stats.reviewCount}).{props.item.location}</span>
					</p>
					<p className="">{props.item.title}</p> 
               <p><span className="cards__span-bold">From ${props.item.price}</span> / person</p>
				</div>
			</div>
	);
};

export default Card;
