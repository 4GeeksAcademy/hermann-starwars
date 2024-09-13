import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const PlanetsList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }
    const handleDetails = (uid) => {
        navigate(`/planets/${uid}`);
    }
    const isFavorite = (item) => {
        return store.favorites.some(favorite => favorite.name === item.name);
    };

    return (
        <div className="container cont-space">
            <div className="row">
                <h1>PLANETS</h1>
                <div className="row">
                    {store.planets.map((item) => (
                        <div className="wrapper col-md-3 my-3" key={item.uid}>
                            <div className="card planets-cards">
                                <img src={`${store.host_starwars_imgs}/planets/${item.uid}.jpg`} alt={item.name} onError={handleError} />
                                <div className="info">
                                    <h3>{item.name}</h3>
                                    <button type="button" className="btn btn-warning me-2" onClick={() => { handleDetails(item.uid) }}>DETAILS</button>
                                    <button type="button" className="btn btn-secondary me-2" onClick={() => {actions.addFavorites({name: item.name, type: 'Planet'})}}><i className={`fas fa-heart ${isFavorite(item) ? 'is-favorite' : ''}`}></i></button>
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