const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			host: 'https://playground.4geeks.com/contact/agendas/hermannjames/contacts',
			contacts: [],
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

			removeContact: async (id) => {
				const uri = host + `/contacts/${id}`;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(response.status);
					return;
				}
				setList(list.filter(item => item.id !== id));
				getContacts();
			}
		}
	};
};

export default getState;

