import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const FavoritsList = () => {
    const {store, actions} =useContext(Context);

    return (
        <div className="dropdown me-5 favorites-container">
            <button className="btn btn-warning dropdown-toggle favs-list" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                FAVS <span className="badge text-bg-secondary">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.map((item, index) => (
                    <li key={index} className="dropdown-item d-flex justify-content-between">
                        {item.name}
                        <button type="button" className="btn-icon" onClick={() => actions.removeFavorites(item)}>
                            <i className="fas fa-times delete-icon"></i>
                        </button>
                    </li>  
                ))}
            </ul>
        </div>
    );
}

export default FavoritsList;
