import React, { Component } from 'react';
import SearchBox from './Components/SearchBox';
import OrderBy from './Components/OrderBy';
import './App.css';
import FilteredAndSorted from './Components/FilteredAndSorted';
import AddNewContact from './Components/AddNewContact';
import EditContact from './Components/EditContact';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
const API = "https://www.mocky.io/v2/581335f71000004204abaf83";

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
    search: '',
    contacts: [],
    name: '',
    phone_number: '',
    address: '',
    direction: 'notsorted',
    form: 'add'
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

  sortIt = (direction) => {
   if ((direction) === 'Ascending') {
    this.setState ({direction: 'Ascending'})
   }
   else if ((direction) === 'Descending') {
    this.setState ({direction: 'Descending'})
   }
   else {
    this.setState({direction: 'notsorted'})
   }
  }

  addContact = (contact) => {
    let contacts = [...this.state.contacts, contact];
    this.setState ({
      contacts: contacts
    })
  }

  deleteContact = (id) => {
    let contacts = this.state.contacts.filter(contact => {
      return contact.name !== id
    });
    this.setState({
      contacts: contacts
    })

  }

  saveContact = (name) => {
    console.log(name);
  }

    render() {
    const {contacts, search, direction} = this.state;
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar />
          <h1>Phonebook</h1>
          <div className="container">
               <Switch>
               <Route exact path='/' render={(routeProps) => (
                <div>
                <SearchBox filterContacts={this.filterContacts}/>
                <OrderBy sortIt={this.sortIt}/>
                <FilteredAndSorted contacts={contacts} search={search} deleteContact={this.deleteContact} sortIt={this.sortIt}
                  direction={direction} filteredContacts={this.state.filteredContacts} editContact={this.editContact}/>
                </div>
                   )} />
                  <Route exact path='/add' render={(routeProps) => (<AddNewContact addContact={this.addContact} editContact={this.editContact}  contact={this.state.contacts}/> )} />
                  <Route exact path='/edit' render={(routeProps) => (
                  <div>
                  <SearchBox filterContacts={this.filterContacts}/>
                  <EditContact contacts={contacts} search={search} deleteContact={this.deleteContact} sortIt={this.sortIt}
                  direction={direction} filteredContacts={this.state.filteredContacts} editContact={this.editContact}/>
                  </div> )} />
                 </Switch>
          </div>       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
