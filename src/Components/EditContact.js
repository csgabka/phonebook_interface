import React, {Component} from 'react';
const API = "https://www.mocky.io/v2/581335f71000004204abaf83";

class EditContact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
      fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data.contacts }))
      .catch(error => console.log(error));
    }  

    onSubmit() {
		this.editContact(this.state);
		//am I thinking right?
	}

	editContact(EditWithThisValue)
	{
		const  { contacts } = this.state;
		const updated = {
		...contacts, 
		//what goes here
		}
  	}

	handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
    	[name]: value
    });
    console.log(this.state);
  }

	render() {
	const { search, sortIt, sortBy, direction, deleteContact, editContact} = this.props;
	const {name, contacts} = this.state;
    const contactDetail = (contacts) =>
        <ul className="gradient_text" key={contacts.name}>
        <li>Name: <input name="name" id="name" onChange={this.handleInputChange} defaultValue={contacts.name}/></li>
        <li>Phone: <input name="phone_number" id="phone_number" onChange={this.handleInputChange} defaultValue={contacts.phone_number}/></li>
        <li>Address: <input name="address" id="address" onChange={this.handleInputChange} defaultValue={contacts.address}/></li>
        <button type="button" className="btn btn-light" onClick={() => this.onSubmit()}>Save</button>
        <hr />
        </ul>
    
    if (direction === 'notsorted') {
    let filteredAndSortedData = contacts.filter(
    contacts => {
    return contacts.name.toLowerCase().includes(search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(search.toLowerCase()) ||
    contacts.phone_number.includes(search);
    })
        return (
            <div>
            {filteredAndSortedData.map(contactDetail)}    
            </div>
            );
    
    }
    else if(direction === 'Ascending') {
        let filteredAndSortedData = 
    contacts
    .sort((a, b) => { if(a.name < b.name) { return -1; } if(a.name > b.name) { return 1; } return 0; })
    .filter(
    contacts => {
    return contacts.name.toLowerCase().includes(search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(search.toLowerCase()) ||
    contacts.phone_number.includes(search);
    })
        return (
            <div>
            {filteredAndSortedData.map(contactDetail)}    
            </div>
        );
    }

    else if(direction === 'Descending') {
        let filteredAndSortedData = 
    contacts
    .sort((a, b) => { if(a.name > b.name) { return -1; } if(a.name < b.name) { return 1; } return 0; })
    .filter(
    contacts => {
    return contacts.name.toLowerCase().includes(search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(search.toLowerCase()) ||
    contacts.phone_number.includes(search);
    })
        return (
            <div>
            {filteredAndSortedData.map(contactDetail)}    
            </div>
        );
    	}
	}
}


export default EditContact;
	