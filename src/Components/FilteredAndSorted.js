import React from 'react';

const filteredAndSorted = ({contacts, search, sortIt, sortBy, direction, deleteContact, editContact}) => {

    const contactDetail = (contacts) =>
        <ul className="gradient_text" key={contacts.name}>
        <li>Name: {contacts.name}</li>
        <li>Phone: {contacts.phone_number}</li>
        <li>Address: {contacts.address}</li>
        <button type="button" className="btn btn-light" onClick={() => deleteContact(contacts.name)}>delete</button>
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

export default filteredAndSorted;