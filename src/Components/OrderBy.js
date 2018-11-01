import React, { Component } from 'react';
import '../css/OrderBy.css';

const OrderBy = ({sortIt, sortBy}) => {
		return (
			<div class="sorting_menu">
		    <button className="gradient_text" href="#" name="ascending" onClick={sortIt} value="Name">Sort by name: {sortBy} order</button>	
			</div>
			);
	}


export default OrderBy;