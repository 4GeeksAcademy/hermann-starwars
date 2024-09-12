import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import starWarsHeader from "../../img/starwars-header.jpg";
import starwarsVideo from "../../img/darthvader-video.mp4";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contenedor">
			<header className="background">
			<video src={starwarsVideo} class="object-fit-contain" autoplay></video>
			</header>
		</div>
	);
};
