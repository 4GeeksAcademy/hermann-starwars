import React, {useContext} from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    // const handlePostsDetails = () => {
    //     navigate(`/posts/${id}`);
    // }
    const handleErrorImage = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    }
    return (
        <div className="container cont-space">
            <div className="row">
                <h1>DASHBOARD</h1>
                <div className="row">
                    {store.posts.results && store.posts.results.length > 0 ? (
                        store.posts.results.map((item) => (
                            <div className="wrapper col-md-3 my-3 dashboards-cards" key={item.id}>
                                <div className="card">
                                    <img src={item.image_url} onError={handleErrorImage}/>
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <button type="button" className="btn btn-warning me-2">DETAILS</button>
                                </div>
                                </div>
                            </div>
                        ))
                    ) : (<p>No hay publicaciones disponibles.</p>)}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;