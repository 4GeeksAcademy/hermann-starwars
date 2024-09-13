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
        <div className="container cont-space">
            <h1>DETAILS</h1>
            {store.characterDetails.name === undefined ? 'Loading...' : 
            <>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5">
                            <img src={`${store.host_starwars_imgs}/characters/${params.charId}.jpg`} className="img-fluid rounded" />
                        </div>
                        <div className="col-12 col-md-7">
                            <h1>{store.characterDetails.name}</h1>
                            <div className="info-data d-flex flex-wrap my-3">
                                <div className="data-item">
                                    <h4>Birth Year</h4>
                                    <p>{store.characterDetails.birth_year}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Height</h4>
                                    <p>{store.characterDetails.height}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Mass</h4>
                                    <p>{store.characterDetails.mass}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Gender</h4>
                                    <p>{store.characterDetails.gender}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Eye Color</h4>
                                    <p>{store.characterDetails.eye_color}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Skin Color</h4>
                                    <p>{store.characterDetails.skin_color}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Hair Color</h4>
                                    <p>{store.characterDetails.hair_color}</p>
                                </div>
                            </div>
                        </div>
                        <div className="button text-end mt-4">
                            <button type="button" className="btn btn-warning me-3" onClick={() => navigate('/characters')}>Return</button>
                        </div>
                    </div>
                </div>
            </>
        }
        </div>
    )
}

export default CharacterDetail;