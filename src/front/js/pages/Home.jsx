import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import starWarsHeader from "../../img/starwars-header.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contenedor starwars-space">
			<header className="background">
				<img src={starWarsHeader} class="img-fluid"/>
			</header>
		</div>
	);
};
