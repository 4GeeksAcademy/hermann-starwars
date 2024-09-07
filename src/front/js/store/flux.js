const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			host: 'https://playground.4geeks.com/contact/agendas/hermannjames/contacts',
			contacts: [],
			changedContact: {},
			name: 'Hermann Ramos',
			phone: '123 456 789',
			email: 'hermann@gmail.com',
			address: 'Calle Hello World, 123'

		},
		actions: {
			getContacts: async () => {
				const uri = getStore().host;
				const options = {
					method: 'GET',
				}

				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(response.status);
					return;
				}
				const data = await response.json();

				setStore({ contacts: data.contacts });
			},

			addContacts: async (dataToSend) => {
				const uri = getStore().host;
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(response.status);
					return;
				}
				const data = await response.json();
				getActions().getContacts();

			},

			editContacts: async (dataToSend, id) => {
				const uri = `${getStore().host}/${id}`;
				const options = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(response.status);
					return;
				}
				const data = await response.json();
				getActions().getContacts();

			},

			setChangedContact: (changed) => { setStore({changedContact: changed})},

			removeContact: async (id) => {
				const uri = `${getStore().host}/${id}`;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(response.status);
					return;
				}
				
				getActions().getContacts();
			}
		}
	};
};

export default getState;

