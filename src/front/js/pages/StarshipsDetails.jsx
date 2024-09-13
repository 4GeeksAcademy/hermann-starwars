import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const StarshipDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    useEffect( () => {
        actions.getStarshipsDetails(params.charId);
        return () => {
            actions.clearCharacterDetail();
        }
    }, []);

    return (
        <div className="container cont-space">
            <h1>DETAILS</h1>
            {store.starshipDetails.name === undefined ? 'Loading...' : 
            <>
                <div className="container card-details">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5">
                            <img src={`${store.host_starwars_imgs}/starships/${params.charId}.jpg`} className="img-fluid" onError={handleError}/>
                        </div>
                        <div className="col-12 col-md-7">
                            <h1>{store.starshipDetails.name}</h1>
                            <div className="info-data d-flex flex-wrap my-3">
                                <div className="data-item">
                                    <h4>Model</h4>
                                    <p>{store.starshipDetails.model}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Starship Class</h4>
                                    <p>{store.starshipDetails.starship_class}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Crew</h4>
                                    <p>{store.starshipDetails.crew}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Manufacturer</h4>
                                    <p>{store.starshipDetails.manufacturer}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Passengers</h4>
                                    <p>{store.starshipDetails.passengers}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Consumables</h4>
                                    <p>{store.starshipDetails.consumables}</p>
                                </div>
                                <div className="data-item">
                                    <h4>Cost In Credits</h4>
                                    <p>{store.starshipDetails.cost_in_credits}</p>
                                </div>
                            </div>
                        </div>
                        <div className="button text-end mt-4">
                            <button type="button" className="btn btn-warning me-3" onClick={() => navigate('/starships')}>Return</button>
                        </div>
                    </div>
                </div>
            </>
        };
        </div>
    )
}

export default StarshipDetail;