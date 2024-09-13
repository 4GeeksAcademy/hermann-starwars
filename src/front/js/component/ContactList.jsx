import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import droidImage from "../../img/droid.png";
import darkImage from "../../img/dark.png";
import mandalorian from "../../img/mandalorian.png";


const ContactList = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const images = [droidImage, darkImage, mandalorian];

    const handleAddContact = (e) => {
        e.preventDefault();
        navigate('/addcontact');
    }

    const handleCreateAgenda = () => {
        actions.createAgenda();
        alert('Puedes empezar a Añadir Contactos');
    }

    const handleDeleteContact = (id) => {
        actions.removeContact(id);
    }

    const handleEditContact = (itemChanged) => {
        actions.setChangedContact(itemChanged);
        navigate('/editcontact');
    }

    return (
        <div className="container cont-space">
            <div className="encabezado">
                <h1>CONTACTS</h1>
                <div className="botones">
                    <button type="button" className="btn btn-warning me-3" onClick={handleCreateAgenda}>Create Agenda</button>
                    <button type="button" className="btn btn-secondary" onClick={handleAddContact} disabled={!store.isAgendaCreated}>Add Contact</button>
                </div>
            </div>
            <ul className="contact-list">
                {store.contacts.map((item, index) => (
                    <li key={item.id}>
                        <div className="contact-card">
                            <img src={images[index % images.length]} className="profile-pic" />
                            <div className="contact-info">
                                <h2>{item.name}</h2>
                                <p><i className="fa fa-map-marker"></i> {item.address}</p>
                                <p><i className="fa fa-phone"></i> {item.phone}</p>
                                <p><i className="fa fa-envelope"></i> {item.email}</p>
                            </div>
                            <button type="reset" className="btn btn-secondary me-2" onClick={() => handleEditContact(item)}><i className="fas fa-edit"></i></button>
                            <button type="button" className="btn btn-warning" onClick={() => handleDeleteContact(item.id)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;