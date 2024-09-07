import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ContactList from '../component/ContactList.jsx';

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
		</div>
	);
};
