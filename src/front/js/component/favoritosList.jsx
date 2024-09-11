import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const FavoritsList = () => {
    const {store, actions} =useContext(Context);

    return (
        <div className="container">
            <ul>
                {store.favorites.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritsList;
