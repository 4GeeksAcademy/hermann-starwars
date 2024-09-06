const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		host: 'https://playground.4geeks.com/contact/agendas/hermannjames/contacts',
		contacts: []

		},
		actions: {
			getContacts: async () => {
				const uri = `${getStore().host}`;
				const options = {
					method: 'GET'
				}
				
				const response = await fetch(uri, options);
				if(!response.ok){
				 console.log(response.status);
				 return;
				}
				const data = await response.json();
		 
				setStore({contacts: data.contacts});
			},

			addContacts: async () => {
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
			
			   },

			removeContact: async (id) => {
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
			
				},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
