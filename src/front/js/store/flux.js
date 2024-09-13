const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			host: 'https://playground.4geeks.com/contact/agendas/hermannjames/contacts',
			contacts: [],
			changedContact: {},
			name: 'Hermann Ramos',
			phone: '123 456 789',
			email: 'hermann@gmail.com',
			address: 'Calle Hello World, 123',
			isAgendaCreated: false,

			host_starwars: 'https://www.swapi.tech/api',
			host_starwars_imgs: 'https://starwars-visualguide.com/assets/img',
			characters: [],
			planets: [],
			starships: [],
			characterDetails: {},
			planetDetails: {},
			starshipDetails: {},
			favorites: []

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
			createAgenda: async () => {
				const uri = 'https://playground.4geeks.com/contact/agendas/hermannjames';
				const dataToSend = {
					slug: "hermannjames"
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
				getActions().getContacts();
				setStore({isAgendaCreated: true});
			},
			checkAgendaStatus: async () => {
				const uri = 'https://playground.4geeks.com/contact/agendas/hermannjames';
				const response = await fetch(uri);
				
				if (response.ok) {
					setStore({ isAgendaCreated: true });
				} else {
					setStore({ isAgendaCreated: false });
				}
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
			},

			// API STARWARS
				// Metodo 'GET'
			getCharacters: async () => {
				/* if (localStorage.getItem('character')){
					alert('Ya existen los personajes');
					setStore({characters: JSON.parse(localStorage.getItem('characters'))})
					return;
				} */
				const uri = `${getStore().host_starwars}/people`;
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({characters: data.results})
				localStorage.setItem('characters', JSON.stringify(data.results))
			},

			getPlanets: async () => {
				/* if (localStorage.getItem('planets')){
					alert('Ya existen los planetas');
					setStore({planets: JSON.parse(localStorage.getItem('planets'))})
					return;
				} */
				const uri = `${getStore().host_starwars}/planets`;
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({planets: data.results})
				localStorage.setItem('planets', JSON.stringify(data.results))
			},

			getStarships: async () => {
				/* if (localStorage.getItem('starships')){
					alert('Ya existen las naves espaciales');
					setStore({starships: JSON.parse(localStorage.getItem('starships'))})
					return;
				} */
				const uri = `${getStore().host_starwars}/starships`;
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({starships: data.results})
				localStorage.setItem('starships', JSON.stringify(data.results))
			},
			getCharactersDetails: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({characterDetails: data.result.properties});
			},
			getPlanetsDetails: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({planetDetails: data.result.properties});
			},
			getStarshipsDetails: async (uid) => {
				const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
				if(!response.ok){
					console.log(response.status);
					return;
				}
				const data = await response.json();
				setStore({starshipDetails: data.result.properties});
			},
			clearCharacterDetail: () => {
				setStore({characterDetails: {}});
			},
			addFavorites: (newFavorite) => {
				const duplicate = getStore().favorites.some(favorite => favorite.name === newFavorite.name)
				if(!duplicate){
					setStore({favorites: [...getStore().favorites, newFavorite]});
				} else {
					getActions().removeFavorites(newFavorite);
				}
			},
			removeFavorites: (item) => {
				const newFavorite = getStore().favorites.filter((element) => element.name !== item.name);
				setStore({favorites: newFavorite});
			}
		}
	};
};

export default getState;

