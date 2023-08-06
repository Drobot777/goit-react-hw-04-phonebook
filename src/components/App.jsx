import {Phonebook} from './Phonebook';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
export const App = () => {
  const [contacts, setContacts] = useState ([]);
  const [filter, setFilter] = useState ('');

  const toggle = (name, tel) => {
    let masName = [];
    contacts.forEach (date => {
      return masName.push (date.name);
    });
    if (masName.includes (name)) {
      return alert ('Rosie Simpson is already in contacts');
    }
    return setContacts ([
      ...contacts,
      {
        name: name,
        id: nanoid (),
        tel: tel,
      },
    ]);
  };

  const changeFilter = value => {
    setFilter (value);
  };
  const deleteContact = id => {
    let objDel = contacts.filter (el => el.id !== id);
    setContacts (objDel);
  };

  return (
    <div>

      <h1 style={{textAlign: 'center'}}>Phonebook</h1>
      <Phonebook toggle={toggle} />
      <h2 style={{textAlign: 'center'}}>Contact</h2>
      <Filter changeFilter={changeFilter} />
      <Contacts
        allContacts={contacts}
        valueFilter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};
