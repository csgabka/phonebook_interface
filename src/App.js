import React, { Component } from 'react';
import SearchBox from './Components/SearchBox';
import OrderBy from './Components/OrderBy';
import './App.css';
const API = "http://www.mocky.io/v2/581335f71000004204abaf83";

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
    search: '',
    contacts: [],
    sortBy: 'Ascending',
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data.contacts }))
      .catch(error => console.log(error));
    }  

  filterContacts = (event) => {
    this.setState({ search: event.target.value });
  }

  sortIt = (event) => {
    if ((this.state.sortBy) === 'Ascending'){
      this.setState({ sortBy: 'Descending' });
    }
    else {
      this.setState({ sortBy: 'Ascending'});
    }
  }

  render() {
    //const {contacts} = this.state;

    let loaded = this.state.contacts
    .filter(
    contacts => {
    return contacts.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.phone_number.includes(this.state.search);
    });

    {/*let filteredAndSortedAsc = this.state.contacts
    .sort((a, b) => { if(a.name < b.name) { return -1; } if(a.name > b.name) { return 1; } return 0; })
    .filter(
    contacts => {
    return contacts.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.phone_number.includes(this.state.search);
    });

    let filteredAndSortedDesc = this.state.contacts
    .sort((a, b) => { if(a.name > b.name) { return -1; } if(a.name < b.name) { return 1; } return 0; })
    .filter(
    contacts => {
    return contacts.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.address.toLowerCase().includes(this.state.search.toLowerCase()) ||
    contacts.phone_number.includes(this.state.search);
    });*/}

    return (
      <div className="App">
      
          <h1>Phonebook</h1>
          <div class="container">
               <div class="row">
                  <div class="col">
                  <OrderBy sortIt={this.sortIt} sortBy={this.state.sortBy}/>
                  {loaded.map(contacts => //"loaded" replaced with "filteredAndSortedAsc" or "filteredAndSortedDesc" works
                  <ul className="gradient_text"> {/*need to activate this with onClick*/}
                  <li>Name: {contacts.name}</li>
                  <li>Phone: {contacts.phone_number}</li>
                  <li>Address: {contacts.address}</li>
                  <hr />
                  </ul>
                  )}
                  </div>
                   <div class="col">
                   <SearchBox filterContacts={this.filterContacts}/>
                  </div>
               </div>
          </div>       
       
      </div>
    );
  }
}

export default App;
