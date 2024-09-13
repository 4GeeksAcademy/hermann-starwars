import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

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
        <div className="container cont-space">
            <div className="row">
                <h1>CHARACTERS</h1>
                <div className="row">
                {store.characters.map((item) => (
                    <div className="wrapper col-md-3 my-3" key={item.uid}>
                        <div className="card characters-cards">
                            <img src={`${store.host_starwars_imgs}/characters/${item.uid}.jpg`} alt={item.name} onError={handleError} />
                            <div className="info">
                                <h3>{item.name}</h3>
                                <button type="button" className="btn btn-warning me-2" onClick={() => {handleDetails(item.uid)}}>DETAILS</button>
                                <button type="button" className="btn btn-secondary me-2" onClick={() => {actions.addFavorites({name: item.name, type: 'Character'})}}><i className="fas fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CharactersList;