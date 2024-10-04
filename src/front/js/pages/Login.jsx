import React, {useState} from "react";
// import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


const Login = () => {
    // const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="login-container cont-space">
            <div className="container-form">
                <div className="formulario">
                    <h2>Log In</h2>
                    <form onSubmit={handleLogIn}>                        
                        <div className="mb-3 input-contenedor">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="mb-3 input-contenedor">
                        <i className="fa-solid fa-lock"></i>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                    </form>
                    <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-secondary me-3" onClick={() => navigate('/')}>Cancel</button>
                        <button type="submit" className="btn btn-warning">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;