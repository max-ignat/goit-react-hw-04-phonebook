import {
  ContactList,
  Button,
  Contact,
  ContactData,
  ListTitle,
} from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
//   console.log(contacts);
    return (
      <div>
        <ListTitle>Contacts</ListTitle>
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <ContactData>
                {name}: <span> {number} </span>
              </ContactData>

              <Button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </Button>
            </Contact>
          ))}
        </ContactList>
      </div>
    );
};

export default Contacts;
