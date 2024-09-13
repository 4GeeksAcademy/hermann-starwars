import React, { Component } from "react";
import starWarsLogo from "../../img/starwars-logo.png"; 

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p className="footer-phrase">
			"May the Force be with you."
		</p>
		<div className="footer-container">
			{/* Logo de Star Wars a la derecha */}
			<div className="footer-logo">
				<img src={starWarsLogo} alt="Star Wars Logo" />
			</div>

			{/* Enlaces a la izquierda */}
			<div className="footer-links">
				<a href="/">Home</a>
				<a href="/characters">Characters</a>
				<a href="/planets">Planets</a>
				<a href="/starships">Starships</a>
			</div>

		</div>
	</footer>

);
