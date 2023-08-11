import {Phonebook} from './Phonebook';
import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
export const App = () => {
  const [contacts, setContacts] = useState ([]);
  const [filter, setFilter] = useState ('');
  const[isTrue,setIsTrue]=useState(false)

  const toggle = (name, tel) => {
    setIsTrue(true);
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
  const localStorageName = 'localName';
  const saveLocalStorage = (key, value) => {
    try {
      const serializedState = JSON.stringify (value);
      localStorage.setItem (key, serializedState);
    } catch (error) {
      console.error ('Set state error: ', error.message);
    }
  };
  const changeFilter = value => {
    setFilter (value);
   
  };
  const deleteContact = id => {
    setIsTrue(true)
    let objDel = contacts.filter (el => el.id !== id);
    setContacts (objDel);
  };
  useEffect (

    () => {
      if(!isTrue){
        return
      }
      saveLocalStorage (localStorageName, contacts);
    },
    [contacts,isTrue]
  );
  useEffect(()=>{
    const saveLocalStorage = localStorage.getItem(localStorageName)

    setContacts(saveLocalStorage?JSON.parse(saveLocalStorage):[])
  },[])
console.log(isTrue)
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
