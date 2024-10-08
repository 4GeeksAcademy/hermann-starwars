import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [fisrtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const dataToSend = {
            email: `${email}`,
            first_name: `${fisrtName}`,
            last_name: `${lastName}`,
            password: `${password}`
        }
        actions.signup(dataToSend);
        navigate('/dashboard');
    }

    return (
        <div className="container-add-contacts">
            <h1>Add New User</h1>
            <form onSubmit={handleSignUp}>
            <div className="mb-3">
                <label htmlFor='fisrtName' className="form-label">First Name</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" value={fisrtName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" id="fisrtName" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor='lastName' className="form-label">Last Name</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}  placeholder="Last Name" id="lastName" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor='email' className="form-label">Email</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-envelope"></i></span>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor='password' className="form-label">Password</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                    <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" required/>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-secondary me-3" onClick={() => navigate('/')}>Cancel</button>
                <button type="submit" className="btn btn-warning">Save</button>
            </div>
            </form>
        </div>
    );
}

export default SignUp;