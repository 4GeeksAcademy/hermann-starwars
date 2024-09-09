import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const FilmsList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <h1>FILMS</h1>
                <div className="row">
                {store.films.map((item) => (
                    <div key={item.episode_id} className="col-md-3 my-3">
                        <div className="card">
                            <img src={`${store.host_starwars_imgs}/films/${item.episode_id}.jpg`} className="card-img-top" alt={item.title}/>
                            <div className="card-body bg-dark">
                                <h2 className="card-title">{item.title}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default FilmsList;