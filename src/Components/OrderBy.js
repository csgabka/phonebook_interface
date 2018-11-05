import React, {Component} from 'react';
import '../css/OrderBy.css';

class OrderBy extends Component {

handleEvent = (event) => {
	this.props.sortIt(event.target.value);
}

render(){
	return (
			<div className="sorting_menu">
			<label>Please sort your data</label>
		    <select onChange={this.handleEvent} className="form-control" id="exampleFormControlSelect1">
		    <option name="notsorted" value="notsorted">Please select</option>
		    <option name="Ascending" value="Ascending">Ascending</option>
		    <option name="Descending" value="Descending">Descending</option>
		    </select>	
			</div>
			);
		}		
	}

export default OrderBy;