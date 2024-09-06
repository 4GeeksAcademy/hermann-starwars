import React , {useState, useContext} from 'react';
import { Context } from '../store/appContext.js';


const ContactList = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="container">
            <h1>Contact List</h1>
            <ul>
                {store.contacts.map((item) => (
                    <li key={item.id}>
                    <div className="contact-info">
                      <h2>{item.name}</h2>
                      <p><i className="fa fa-map-marker"></i> {item.address}</p>
                      <p><i className="fa fa-phone"></i> {item.phone}</p>
                      <p><i className="fa fa-envelope"></i> {item.email}</p>
                    </div>
                    <div className="contact-actions">
                      <button className="edit-btn"><i className="fa fa-pencil"></i></button>
                      <button className="delete-btn"><i className="fa fa-trash"></i></button>
                    </div>
                  </li>
                ))};
            </ul>
        </div>
    );
}

export default ContactList;
