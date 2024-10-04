import React from 'react';

const Protected = () => {

    const handleOnClick = () => {

    };

    return (
        <div className="container">
            <button className="btn btn-warning" onClick={handleOnClick} >Acceso a Protected</button>
        </div>
    );
}

export default Protected;