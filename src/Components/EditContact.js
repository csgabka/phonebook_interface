import React, {Component} from 'react';
const API = "https://www.mocky.io/v2/581335f71000004204abaf83";

class EditContact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
            name: null,
            phone_number: null,
            address: null,
            index: ''
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
	}

	editContact(EditWithThisValue)
	{
		const  { contacts, name, phone_number, address, index } = this.state;
        const updatedObj = {...contacts[index], name: name, address: address, phone_number: phone_number};
	    const updatedContacts = [
        ...contacts.slice(0, index),
        updatedObj,
        ...contacts.slice(index + 1),
        ];
        this.setState({contacts: updatedContacts});
        console.log(updatedContacts);
  	}

	handleInputChange = (event, index) => {
        this.setState ({
        [event.target.id] : event.target.value,
        index: index
        });
  }

	render() {
	const { search, direction} = this.props;
	const { contacts } = this.state;
    const contactDetail = (contacts, index) =>
        <ul className="gradient_text" key={contacts.name}>
        <li>Name: <input name="name" id="name" onChange={event => this.handleInputChange(event, index)} defaultValue={contacts.name}/></li>
        <li>Phone: <input name="phone_number" id="phone_number" onChange={event => this.handleInputChange(event, index)} defaultValue={contacts.phone_number}/></li>
        <li>Address: <input name="address" id="address" onChange={event => this.handleInputChange(event, index)} defaultValue={contacts.address}/></li>
        <li>Index: {index}</li>
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
	