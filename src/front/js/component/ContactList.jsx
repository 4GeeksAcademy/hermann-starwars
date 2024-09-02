import React , {useState, useEffect} from 'react';


const ContactList = async () => {
   const [contact, setContact] = useState('');
   const [list, setList] = useState([]);
   const host = 'https://playground.4geeks.com/contact/agendas/hermannjames';


   // Metodo 'GET'
   const getContacts = async () => {
       const uri = host + '/contacts';
       const options = {
           method: 'GET'
       }


       const response = await fetch(uri, options);
       if(!response.ok){
        console.log(response.status);
        return;
       }
       const data = await response.json();

       setList(data);
   }


   // Metodo 'POST'
   const AddContacts = async () => {
    const uri = host + '/contacts';
    const dataToSend = {
        "name": `${contact}`,
        "phone": "",
        "email": "",
        "address": ""
      }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    }
    const response = await fetch(uri, options);
   if(!response.ok){
    console.log(response.status);
    return;
   }
   const data = await response.json();

   getContacts();
   setContact('');

   }

   // Metodo 'DELETE'
   const removeContact = async (id) => {
    const uri = host + `/contacts/${id}`;
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(uri, options);
    if(!response.ok){
        console.log(response.status);
        return;
    }
    setList(list.filter(item => item.id !== id));
    getContacts();

   }

   useEffect(() => {
    getContacts()
   }, []);

   return (
    <div className="container">
        <h1>Contact List</h1>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add New Contact</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
        </div>
        <ul></ul>
    </div>
   );
}

