import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PlanetDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        actions.getPlanetsDetails(params.charId);
    }, []);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {store.planetDetails.name === undefined ? 'leyendo' : 
            <>
                <div className="card mb-3 starwars-card">
                    <div className="row g-0 align-items-center"> {/* Alineamos los items verticalmente al centro */}
                        <div className="col-md-4 d-flex justify-content-center">
                            <img 
                                src={`${store.host_starwars_imgs}/planets/${params.charId}.jpg`}
                                className="img-fluid rounded starwars-image" 
                                alt={store.planetDetails.name} 
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h1 className="card-title starwars-title">{store.planetDetails.name}</h1>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Climate</p>
                                        <p className="starwars-data">{store.planetDetails.climate}</p>
                                    </div>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Gravity</p>
                                        <p className="starwars-data">{store.planetDetails.gravity}</p>
                                    </div>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Orbital Period</p>
                                        <p className="starwars-data">{store.planetDetails.orbital_period}</p>
                                    </div>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Surface Water</p>
                                        <p className="starwars-data">{store.planetDetails.surface_water}</p>
                                    </div>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Population</p>
                                        <p className="starwars-data">{store.planetDetails.population}</p>
                                    </div>
                                    <div className="starwars-info">
                                        <p className="starwars-label">Diameter</p>
                                        <p className="starwars-data">{store.planetDetails.diameter}</p>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button 
                                        type="button" 
                                        className="btn starwars-btn me-3" 
                                        onClick={() => navigate('/planets')}
                                    >
                                        Return
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        };
        </div>
    )
}

export default PlanetDetail;