import React from "react";
// import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


const Login = () => {
    // const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <div className="login-container cont-space">
            <div className="container-form">
                <div className="formulario">
                    <h2>Log In</h2>
                    <form onSubmit="">                        
                        <div className="mb-3 input-contenedor">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" id="email" required/>
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="mb-3 input-contenedor">
                        <i className="fa-solid fa-lock"></i>
                            <input type="password" id="password" required/>
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        {/* <div className="olvidar">
                            <label htmlFor="" className="form-label">
                                <input type="checkbox" className="form-control" id="" />
                                <a href="">Forgot my Password</a>
                            </label>
                        </div> */}
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