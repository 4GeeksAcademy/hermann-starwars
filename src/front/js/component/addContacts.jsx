import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext'; // Asegúrate de que Context esté correctamente importado

const AddContacts = () => {
    const { store, actions } = useContext(Context); // Si tienes acciones en tu contexto para manejar contactos
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crea el objeto con los datos del nuevo contacto
        const newContact = {
            name,
            phone,
            email,
            address
        };
        
        // Si tienes una acción en tu contexto para agregar el contacto, la llamas aquí
        actions.addContact(newContact);

        // Redirige a otra página después de guardar el contacto
        navigate('/');
    };

    return (
        <div className="container bg-dark text-secondary w-50 rounded m-auto p-5">
            <h1 className="text-light pt-4">Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                        Name <span className="text-warning">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">
                        Phone <span className="text-warning">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                        Email <span className="text-warning">*</span>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">
                        Address <span className="text-warning">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-warning me-3">Save</button>
                    <button type="reset" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddContacts;
