import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    useEffect(() => {
        actions.getPlanetsDetails(params.charId);
    }, []);

    return (
        <div className="container cont-space">
            <h1>DETAILS</h1>
            {store.planetDetails.name === undefined ? 'Loading...' : 
            <>
                <div className="container card-details">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5">
                            <img src={`${store.host_starwars_imgs}/planets/${params.charId}.jpg`} className="img-fluid" onError={handleError}/>
                        </div>
                        <div className="col-12 col-md-7">
                            <h1>{store.planetDetails.name}</h1>
                            <div className="info-data d-flex flex-wrap my-3">
                                <div className="data-item">
                                    <h4>Climate</h4>
                                    <p>{store.planetDetails.climate}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Gravity</h4>
                                    <p>{store.planetDetails.gravity}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Orbital Period</h4>
                                    <p>{store.planetDetails.orbital_period}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Surface Water</h4>
                                    <p>{store.planetDetails.surface_water}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Population</h4>
                                    <p>{store.planetDetails.population}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Diameter</h4>
                                    <p>{store.planetDetails.diameter}</p>
                                </div>                            
                            </div>
                        </div>
                        <div className="button text-end mt-4">
                            <button type="button" className="btn btn-warning me-3" onClick={() => navigate('/planets')}>Return</button>
                        </div>
                    </div>
                </div>
            </>
            };
        </div>
    )
}

export default PlanetDetail;