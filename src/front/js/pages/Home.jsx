import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import darthvaderSlider from "../../img/darthvader-slider.jpg";
import soldierSlider from "../../img/soldier-slider.jpg";
import starshipslider from "../../img/starships-slider.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<header className="background">
				<div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active" data-bs-interval="4000">
							<img src={darthvaderSlider} className="d-block w-100" />
								<div className="carousel-caption d-none d-md-block">
									<h2>CHARACTERS</h2>
									<p>Discover the characters of the Star Wars Universe</p>
									<Link to="/characters">
										<button className="btn btn-warning">Explore</button>
									</Link>
								</div>
						</div>
						<div className="carousel-item" data-bs-interval="4000">
							<img src={soldierSlider} className="d-block w-100" />
								<div className="carousel-caption d-none d-md-block">
									<h2>PLANETS</h2>
									<p>Explore the Planets from across the Galaxy</p>
									<Link to="/planets">
										<button className="btn btn-warning">Explore</button>
									</Link>
								</div>
						</div>
						<div className="carousel-item" data-bs-interval="4000">
							<img src={starshipslider} className="d-block w-100" />
								<div className="carousel-caption d-none d-md-block">
									<h2>STARSHIPS</h2>
									<p>See the iconic Starships that rule the Galaxy</p>
									<Link to="/starships">
										<button className="btn btn-warning">Explore</button>
									</Link>
								</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</header>
		</div>
	);
};
