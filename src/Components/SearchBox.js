import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({filterContacts}) => {

		return (
			<div className="search_box">
			<h3 className="gradient_text">>Search</h3>
			<div class="dropdown">
			<input type="text" class="search_field" onChange={filterContacts}></input>
			</div>
			<br />
			

			</div>

			);
	}


export default SearchBox;