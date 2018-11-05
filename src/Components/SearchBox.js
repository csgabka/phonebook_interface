import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({filterContacts}) => {

		return (
			<div className="search_box">
			<h3 className="gradient_text">Search</h3>
			<div className="dropdown">
			<input type="text" className="search_field" onChange={filterContacts}></input>
			</div>
			<br />
			</div>
			);
	}


export default SearchBox;