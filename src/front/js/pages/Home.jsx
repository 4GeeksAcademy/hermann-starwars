import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import starWarsHeader from "../../img/starwars-header.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contenedor">
			<header className="background">
				<img src={starWarsHeader} />
			</header>
		</div>
	);
};
