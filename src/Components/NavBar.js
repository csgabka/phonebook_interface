import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  	
	    <ul className="navbar-nav mr-auto center">
	      <li className="nav-item">
	        <NavLink to="/" className="nav-link">Browse</NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink to="/add" className="nav-link">Add</NavLink>
	      </li>
	      <li className="nav-item">
	        <NavLink to="/edit" className="nav-link">Edit</NavLink>
	      </li>
	    </ul>
	 	 
		</nav>
	</div> 
	);
	
}

export default Navbar;