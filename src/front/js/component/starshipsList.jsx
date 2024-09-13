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
                        <div className="wrapper col-md-3 my-3" key={item.uid}>
                            <div className="card starships-cards">
                                <img src={`${store.host_starwars_imgs}/starships/${item.uid}.jpg`} alt={item.name} onError={handleError} />
                                <div className="info">
                                    <h3>{item.name}</h3>
                                    <button type="reset" className="btn btn-warning me-2" onClick={() => { handleDetails(item.uid) }}>DETAILS</button>
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