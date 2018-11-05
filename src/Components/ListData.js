import React from 'react';

const listData = ({contacts, search}) => {
    const filteredData = contacts.filter(
    contacts => {
    return contacts.name.toLowerCase().includes(search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(search.toLowerCase()) ||
    contacts.phone_number.includes(search);
    })

    return (
    <div>
    {filteredData.map(contacts => 
        <ul className="gradient_text" key={contacts.name}>
        <li>Name: {contacts.name}</li>
        <li>Phone: {contacts.phone_number}</li>
        <li>Address: {contacts.address}</li>
        <hr />
        </ul>
        )}    

       </div>
        
        );
      
}

export default listData;
