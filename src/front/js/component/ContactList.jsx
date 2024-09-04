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
   // Metodo 'PUT'
   const editContacts = async (id) => {
    const uri = host + `/contacts/${id}`;
    const dataToSend = {
        "name": `${contact}`,
        "phone": "",
        "email": "",
        "address": ""
      }
    const options = {
        method: 'PUT',
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
    const data = response.json();
    getContacts();
   }

   useEffect(() => {
    getContacts()
   }, []);

   return (
    <div className="container">
        <h1>Contact List</h1>
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    {item}
                </li>
            ))};
        </ul>
    </div>
   );
}

