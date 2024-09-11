import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const StarshipsList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }
    const handleDetails = (uid) => {
        navigate(`/starships/${uid}`);
    }

    return (
        <div className="container">
            <div className="row">
                <h1>STARSHIPS</h1>
                <div className="row">
                {store.starships.map((item) => (
                    <div key={item.uid} className="col-md-3 my-3">
                        <div className="card">
                            <img src={`${store.host_starwars_imgs}/starships/${item.uid}.jpg`} className="card-img-top" alt={item.name} onError={handleError} style = {{aspectRatio:"3/2", width:"100%"}}/>
                            <div className="card-body bg-dark">
                                <h2 className="card-title">{item.name}</h2>
                                <button type="reset" className="btn btn-warning me-2" onClick={() => {handleDetails(item.uid)}}>DETAILS</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default StarshipsList;