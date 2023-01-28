import React, { Component } from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Modal from './Modal';
import shortid from 'shortid';
import { Title } from './Form/Form.styled';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Bruce Wayne', number: '459-12-56' },
      // { id: 'id-2', name: 'Matt Murdock', number: '443-89-12' },
      // { id: 'id-3', name: 'Sam Fisher', number: '645-17-79' },
      // { id: 'id-4', name: 'Felicia Hardy', number: '227-91-26' },
      // { id: 'id-5', name: 'Peter Parker', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal} )=> ({
      showModal: !showModal,
    }));
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLocalStorage);
    // console.log("parsedContacts", parsedContacts)
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      // console.log('contacts updateed');
    }
    // console.log('componentDidUpdate');
  }
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
    this.toggleModal();
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
    // console.log('App render');
    const { showModal } = this.state;
    return (
      <Box>
        <Title>Phone Book</Title>
        <button type="button" onClick={this.toggleModal}>
          Add contact
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Form submitProp={this.addToContacts} />

            <button type="button" onClick={this.toggleModal}>
              minimize
            </button>
          </Modal>
        )}
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
