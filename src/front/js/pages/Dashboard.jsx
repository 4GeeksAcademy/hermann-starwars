import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const Dashboard = () => {
    const {actions} = useContext(Context);

    const handleonClick = () => {
        actions.accessProtected();
    };

    return (
        <div className="container cont-space">
            <h1>Dashboard</h1>
            <button className="btn btn-warning" onClick={handleOnClick} >Acceso a Protected</button>
            <button className="btn btn-success" onClick={() => actions.getPosts()} >Get Posts</button>
        </div>
    );
}

export default Dashboard;