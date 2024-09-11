import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CharacterDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const[characterDetails, setCharacterDetails] = useState({});

    const handleFetch = async () => {
        let data = await actions.getCharactersDetails(params.charId);
        setCharacterDetails(data);
    }

    useEffect( () => {
        handleFetch();
    }, [params.charId]);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {characterDetails.name === undefined ? 'leyendo' : 
            <>
                <div className="card">
                    <img src={`${store.host_starwars_imgs}/characters/${characterDetails.charId}.jpg`} className="card-img-top" alt={characterDetails.name} />
                    <div className="card-body">
                        <h5 className="card-title">{characterDetails.name}</h5>
                    </div>
                </div>
            </>

        };
        </div>
    )
}

export default CharacterDetail;