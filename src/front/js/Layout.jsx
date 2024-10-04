import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Custom Components
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import AddContacts from './component/addContacts.jsx';
import EditContact from "./component/editContact.jsx";
import ContactList from "./component/ContactList.jsx";
import CharactersList from "./component/characterList.jsx";
import PlanetsList from "./component/planetsList.jsx";
import StarshipsList from "./component/starshipsList.jsx";
// Custom Pages / views
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import CharacterDetail from "./pages/CharacterDetails.jsx";
import PlanetDetail from "./pages/PlanetDetails.jsx";
import StarshipDetail from "./pages/StarshipsDetails.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<ContactList />} path="/contactlist" />
                        <Route element={<AddContacts />} path="/addcontact" />
                        <Route element={<EditContact />} path="/editcontact" />
                        <Route element={<CharactersList />} path="/characters" />
                        <Route element={<PlanetsList />} path="/planets" />
                        <Route element={<StarshipsList />} path="/starships" />
                        <Route element={<CharacterDetail />} path="/characters/:charId" />
                        <Route element={<PlanetDetail />} path="/planets/:charId" />
                        <Route element={<StarshipDetail />} path="/starships/:charId" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route element={<h1>Not found!</h1>} path="*"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
