import React , {useState, useContext} from 'react';
import { Context } from '../store/appContext.js';


const ContactList = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="container">
            <h1>CONTACTS</h1>
            <ul className='contact-list'>
                {store.contacts.map((item) => (
                    <li key={item.id}>
                    <div className="contact-card">
                      <h2>{item.name}</h2>
                      <p><i className="fa fa-map-marker"></i> {item.address}</p>
                      <p><i className="fa fa-phone"></i> {item.phone}</p>
                      <p><i className="fa fa-envelope"></i> {item.email}</p>
                    </div>
                  </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
