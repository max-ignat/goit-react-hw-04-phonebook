import React, { Component } from 'react';
import {Box} from '../App.styled'
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Bruce Wayne', number: '459-12-56' },
      { id: 'id-2', name: 'Matt Murdock', number: '443-89-12' },
      { id: 'id-3', name: 'Sam Fisher', number: '645-17-79' },
      { id: 'id-4', name: 'Felicia Hardy', number: '227-91-26' },
      { id: 'id-5', name: 'Peter Parker', number: '227-91-26' },
    ],
    filter: '',
  };

  addToContacts = ({ name, number }) => {
    // console.log('State from Form', 'Name', name, 'Number', number);
    const lowerCasedName = name.toLowerCase();
    const { contacts } = this.state;
    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );

    if (added) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevSate => ({ contacts: [...prevSate.contacts, contact] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };
  render() {
    return (
      <Box>
        <Form submitProp={this.addToContacts} />
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter} />
        <Contacts
          contacts={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
