import React, { Component } from 'react';
import SearchBox from './Components/SearchBox';
import OrderBy from './Components/OrderBy';
import './App.css';
import ListData from './Components/ListData';
import FilteredAndSorted from './Components/FilteredAndSorted';
const API = "http://www.mocky.io/v2/581335f71000004204abaf83";

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
    search: '',
    contacts: [],
    direction: 'notsorted'
  }
}

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data.contacts }))
      .catch(error => console.log(error));
    }  

  filterContacts = (event) => {
    const {contacts} = this.state;
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

    render() {
    const {contacts, search, direction} = this.state;
    return (
      <div className="App">
          <h1>Phonebook</h1>
          <div className="container">
               <div className="row">
                  <div className="col">
                  <OrderBy sortIt={this.sortIt}/>
                  {(direction === 'notsorted') ?
                  <ListData contacts={contacts} search={search}/>
                  :
                  <FilteredAndSorted contacts={contacts} search={search} sortIt={this.sortIt}
                  direction={direction}/>}
                  </div>
                   <div className="col">
                   <SearchBox filterContacts={this.filterContacts}/>
                  </div>
               </div>
          </div>       
       
      </div>
    );
  }
}

export default App;
