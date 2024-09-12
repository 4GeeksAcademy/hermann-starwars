import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import darthvaderSlider from "../../img/darthvader-slider.jpg";

const CharactersList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = (uid) => {
        navigate(`/characters/${uid}`);
    }
    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    return (
        <div className="container">
            <div className="row">
                <h1>CHARACTERS</h1>
                <div className="row">
                {store.characters.map((item) => (
                    <div key={item.uid} className="col-md-3 my-3">
                        <div className="card">
                            <img src={`${store.host_starwars_imgs}/characters/${item.uid}.jpg`} className="card-img-top" alt={item.name} onError={handleError} style = {{aspectRatio:"3/4", width:"100%"}}/>
                            <div className="card-body bg-dark">
                                <h3 className="card-title">{item.name}</h3>
                                <button type="reset" className="btn btn-warning me-2" onClick={() => {handleDetails(item.uid)}}>DETAILS</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="wrapper">
                <div className="card">
                    <img src={darthvaderSlider} alt="" />
                    <div className="info">
                        <h3>Name Character</h3>
                        <button type="reset" className="btn btn-warning me-2" onClick={() => {handleDetails(item.uid)}}>DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharactersList;