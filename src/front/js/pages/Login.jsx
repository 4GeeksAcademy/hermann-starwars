import React from "react";

const Login = () => {
    return (
        <div className="login-container cont-space">
            <div className="container-form">
                <div className="formulario">
                    <form action="">
                        <h2>Log In</h2>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" name="" id="" required/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-contenedor">
                        <i className="fa-solid fa-lock"></i>
                            <input type="password" name="" id="" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="olvidar">
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                <a href="">Forgot my Password</a>
                            </label>
                        </div>
                    </form>

                    <div>
                        <button>Acceder</button>
                        <div className="registrar">
                            <p>No tengo cuenta <a href="">Crear Cuenta</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;