import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContacts = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmitContact = (e) =>{
        e.preventDefault();
        const dataToSend = {
            name: `${name}`,
            phone: `${phone}`,
            email: `${email}`,
            address: `${address}`
        }
        actions.addContacts(dataToSend);
        navigate('/contactlist');
    }

    return (
        <div className="container-add-contacts">
            <h1>Add New Contact</h1>
            <form onSubmit={handleSubmitContact}>
            <div className="mb-3">
                <label htmlFor='name' className="form-label">Name</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="name" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor='phone' className="form-label">Phone</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-phone"></i></span>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Phone" id="phone" required/>
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
                <label htmlFor='address' className="form-label">Address</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-map-marker-alt"></i></span>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" id="address" required/>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-secondary me-3" onClick={() => navigate('/contactlist')}>Cancel</button>
                <button type="submit" className="btn btn-warning">Save</button>
            </div>
            </form>
        </div>
    );
}

export default AddContacts;
