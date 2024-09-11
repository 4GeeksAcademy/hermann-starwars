import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PlanetDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const handleFetch = async () => {
        let data = await actions.getPlanetsDetails(params.charId);
        setCharacterDetails(data);
    }

    useEffect( () => {
        // handleFetch();
        actions.getPlanetsDetails(params.charId);
        
    }, []);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {store.planetDetails.name === undefined ? 'leyendo' : 
            <>
                <div className="card mb-3 starwars-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={`${store.host_starwars_imgs}/planets/${params.charId}.jpg`}
                                className="img-fluid rounded starwars-image" 
                                alt={store.planetDetails.name} 
                            />
                        </div>
                        <div className="col-md-8 position-relative">
                            <div className="card-body">
                                <h1 className="card-title starwars-title">{store.planetDetails.name}</h1>
                                <div className="starwars-info">
                                    <p className="starwars-label">Mass</p>
                                    <p className="starwars-data">{store.planetDetails.climate}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Height</p>
                                    <p className="starwars-data">{store.planetDetails.gravity}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Hair Color</p>
                                    <p className="starwars-data">{store.planetDetails.orbital_period}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Eye Color</p>
                                    <p className="starwars-data">{store.planetDetails.population}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Skin Color</p>
                                    <p className="starwars-data">{store.planetDetails.rotation_period}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Gender</p>
                                    <p className="starwars-data">{store.planetDetails.surface_water}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Birth Year</p>
                                    <p className="starwars-data">{store.planetDetails.terrain}</p>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="btn starwars-btn me-3 position-absolute bottom-0 end-0" 
                                onClick={() => navigate('/planets')}
                            >
                                Return
                            </button>
                        </div>
                    </div>
                </div>

            </>
        };
        </div>
    )
}

export default PlanetDetail;