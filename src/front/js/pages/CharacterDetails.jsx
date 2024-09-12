import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CharacterDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        actions.getCharactersDetails(params.charId);
        return () => {
            actions.clearCharacterDetail();
        }
    }, []);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {store.characterDetails.name === undefined ? 'leyendo' : 
            <>
                <div className="card mb-3 starwars-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={`${store.host_starwars_imgs}/characters/${params.charId}.jpg`}
                                className="img-fluid rounded starwars-image" 
                                alt={store.characterDetails.name} 
                            />
                        </div>
                        <div className="col-md-8 position-relative">
                            <div className="card-body">
                                <h1 className="card-title starwars-title">{store.characterDetails.name}</h1>
                                <div className="starwars-info">
                                    <p className="starwars-label">Mass</p>
                                    <p className="starwars-data">{store.characterDetails.mass}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Height</p>
                                    <p className="starwars-data">{store.characterDetails.height}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Hair Color</p>
                                    <p className="starwars-data">{store.characterDetails.hair_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Eye Color</p>
                                    <p className="starwars-data">{store.characterDetails.eye_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Skin Color</p>
                                    <p className="starwars-data">{store.characterDetails.skin_color}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Gender</p>
                                    <p className="starwars-data">{store.characterDetails.gender}</p>
                                </div>
                                <div className="starwars-info">
                                    <p className="starwars-label">Birth Year</p>
                                    <p className="starwars-data">{store.characterDetails.birth_year}</p>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="btn starwars-btn me-3 position-absolute bottom-0 end-0" 
                                onClick={() => navigate('/characters')}
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

export default CharacterDetail;