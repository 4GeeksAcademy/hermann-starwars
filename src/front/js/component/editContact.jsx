import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const EditContact = () => {
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);
    const changed = store.changedContact;

    const [name, setName] = useState(changed.name);
    const [phone, setPhone] = useState(changed.phone);
    const [email, setEmail] = useState(changed.email);
    const [address, setAddress] = useState(changed.address);

    const handleEditContact = (e) => {
        e.preventDefault();
        const dataToSend = {
            name: `${name}`,
            phone: `${phone}`,
            email: `${email}`,
            address: `${address}`
        };
        actions.editContacts(dataToSend, changed.id);
        actions.setChangedContact({});
        navigate('/contactlist');
    }

    return (
        <div className="container-edit-contacts">
            <h1>Edit Contact</h1>
            <form onSubmit={handleEditContact}>
            <div className="mb-3">
                <label for='name' className="form-label">Name</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="name" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for='phone' className="form-label">Phone</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-phone"></i></span>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Phone" id="phone" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for='email' className="form-label">Email</label>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-envelope"></i></span>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for='address' className="form-label">Address</label>
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

export default EditContact;