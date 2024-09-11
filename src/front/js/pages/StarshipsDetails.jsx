import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const StarshipDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const handleFetch = async () => {
        let data = await actions.getCharactersDetails(params.charId);
        setCharacterDetails(data);
    }

    useEffect( () => {
        // handleFetch();
        actions.getStarshipsDetails(params.charId);
        return () => {
            actions.clearCharacterDetail();
        }
    }, []);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {store.starshipDetails.name === undefined ? 'leyendo' : 
            <>
                <div className="card mb-3 starwars-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={`${store.host_starwars_imgs}/starships/${params.charId}.jpg`}
                                className="img-fluid rounded starwars-image" 
                                alt={store.starshipDetails.name} 
                            />
                        </div>
                        <div className="col-md-8 position-relative">
                            <div className="card-body">
                                <h1 className="card-title starwars-title">{store.starshipDetails.name}</h1>
                                <div className="starwars-info">
                                    <p className="starwars-label">Mass</p>
                                    <p className="starwars-data">{store.starshipDetails.mass}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Height</p>
                                    <p className="starwars-data">{store.starshipDetails.height}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Hair Color</p>
                                    <p className="starwars-data">{store.starshipDetails.hair_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Eye Color</p>
                                    <p className="starwars-data">{store.starshipDetails.eye_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Skin Color</p>
                                    <p className="starwars-data">{store.starshipDetails.skin_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Gender</p>
                                    <p className="starwars-data">{store.starshipDetails.gender}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Birth Year</p>
                                    <p className="starwars-data">{store.starshipDetails.birth_year}</p>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="btn starwars-btn me-3 position-absolute bottom-0 end-0" 
                                onClick={() => navigate('/starships')}
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

export default StarshipDetail;