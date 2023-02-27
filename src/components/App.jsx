import React, { useState, useEffect } from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Modal from './Modal';
import { ModalButton } from './Modal/Modal.styled';
import shortid from 'shortid';
import { Title } from './Form/Form.styled';

const  App = () => {
  const [contacts, setContacts] = useState(() => {
   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
})
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState (false)
  
  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
   }
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addToContacts = ({ name, number }) => {
    // console.log('State from Form', 'Name', name, 'Number', number);
    const lowerCasedName = name.toLowerCase();
    
    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (added) {
      alert(`${name} is already in contacts`);
      return;
    }

    

    setContacts(prevSate =>  [...prevSate, contact] );
    toggleModal();
  };

  const deleteContact = id => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== id),
    );
  };

  const changeFilter = ({target}) => {
    setFilter( target.value );
  };

  // const { contacts } = contacts;
  // const { filter } = filter;
   const filteredContacts = () => {
     const lowerCasedFilter = filter.toLowerCase();
     return contacts.filter(contact =>
       contact.name.toLowerCase().includes(lowerCasedFilter)
     );
   };
    return (
      <Box>
        <Title>Phone Book</Title>
        <ModalButton type="button" onClick={toggleModal}>
          Add contact
        </ModalButton>
        {showModal && (
          <Modal onClose={toggleModal}>
            <Form submitPropValue={addToContacts} />

            <ModalButton type="button" onClick={toggleModal}>
              minimize
            </ModalButton>
          </Modal>
        )}
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={filteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Box>
    );
  
}

export default App;
