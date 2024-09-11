import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const PlanetsList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    return (
        <div className="container">
            <div className="row">
                <h1>PLANETS</h1>
                <div className="row">
                {store.planets.map((item) => (
                    <div key={item.uid} className="col-md-3 my-3">
                        <div className="card">
                            <img src={`${store.host_starwars_imgs}/planets/${item.uid}.jpg`} className="card-img-top" alt={item.name} onError={handleError} style = {{aspectRatio:"1/1", width:"100%"}}/>
                            <div className="card-body bg-dark">
                                <h2 className="card-title">{item.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default PlanetsList;