import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "/workspace/Contactlist-webapp/src/img/rigo-baby.jpg"


export const Navbar = () => {
	const {store, actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Fawncy contact list</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className ="btn btn-primary" onClick={()=>actions.addContact({ 
						name: "Juan", 
						address: "colombia", 
						email: "juanfeguto2@gmail.com", 
						phone: "+573013182183", 
						img:rigoImage
						})}>Add New Contact
						</button>
				</Link>
			</div>
		</nav>
	);
};