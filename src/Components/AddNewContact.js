import React, {Component} from 'react';

class AddNewContact extends Component {
	constructor() {
		super();
		this.state = {
			name: null,
			phone_number: null,
			address: null
		}
		this.handleEdit = this.handleEdit.bind(this);
	}

	onChange = (event) => {
		this.setState ({
			[event.target.id] : event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addContact(this.state);
		event.target.reset();
	}

	handleEdit = (event) => {
		if((this.props.selectedContact) !== null )  {
		const selectedName = this.props.selectedContact[0];
		const name = selectedName.name;
		this.setState ({ name: name 
		})
		}
		else {
			console.log('null');
		}

	}

	render() {
	const {selectedContact} = this.props;
	return (
	<div className="addNewContactForm">
	<h3>ADD NEW CONTACT</h3>
	<form onSubmit={this.handleSubmit}>
		<div className="form-group">
		  <label htmlFor="example-text-input" className="col-2 col-form-label">Name</label>
		  <div className="col-10">
		  <input className="form-control" type="text" onChange={this.onChange} id="name" />
		  </div>
		</div>
		<div className="form-group">
		  <label htmlFor="example-tel-input" className="col-2 col-form-label">Telephone</label>
		  <div className="col-10">
		    <input className="form-control" type="text" onChange={this.onChange} id="phone_number" />
		  </div>
		</div>
		<div class="form-group">
		  <label htmlFor="example-text-input" class="col-2 col-form-label">Address</label>
		  <div className="col-10">
		    <input className="form-control" type="text" onChange={this.onChange} id="address" />
		  </div>
		</div>
		<button type="submit" class="btn btn-primary">Add</button>

		{/*{console.log(selectedContact[0])}*/}
	</form>
	</div>


		);
	}
}

export default AddNewContact;