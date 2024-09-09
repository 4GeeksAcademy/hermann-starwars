import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CharacterDetail = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(()=> {
        actions.getCharactersDetails(params.uid);
    }, []);

    return (
        <div className="container">
            <h1>DETAILS</h1>
            {store.characterDetails === undefined ? 'leyendo' : 
            <>
                <p>{params.uid}</p>
                <p>{store.characterDetails.name}</p>
            </>
        };
        </div>
    );

}

export default CharacterDetail;