import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    useEffect( () => {

    }, []);

    return (
        <div className="container cont-space">
            <h1>POST DETAILS</h1>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="header">
                            {store.posts.results.title}
                            {store.posts.results.date}
                        </div>
                        <div className="photo">
                            <img src={store.posts.results.image_url} />
                        </div>
                        <div className="info">
                            {store.posts.results.description}
                        </div>
                        <div className="button text-end mt-4">
                            <button type="button" className="btn btn-warning me-3" onClick={() => navigate('/dashboard')}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;