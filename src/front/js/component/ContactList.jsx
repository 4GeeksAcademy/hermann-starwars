import React , {useState, useContext} from 'react';
import { Context } from '../store/appContext.js';
import droidImage from "../../img/droid.png";

const ContactList = () => {
    const {store} = useContext(Context);

    return (
        <div className="container">
            <div className="encabezado">
                <h1>CONTACTS</h1>
                <button type="button" class="btn btn-success">Add Contact</button>
            </div>
            <ul className='contact-list'>
                {store.contacts.map((item) => (
                    <li key={item.id}>
                        <div className="contact-card">
                            <img src={droidImage} className="profile-pic" />
                            <div className="contact-info">
                                <h2>{item.name}</h2>
                                <p><i className="fa fa-map-marker"></i> {item.address}</p>
                                <p><i className="fa fa-phone"></i> {item.phone}</p>
                                <p><i className="fa fa-envelope"></i> {item.email}</p>
                            </div>
                        </div>
                  </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
