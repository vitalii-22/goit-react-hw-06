import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts-key");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts-key", JSON.stringify(contacts));
  }, [contacts]);

  const onAddNewContact = (contactData) => {
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    setContacts([...contacts, finalContact]);
  };

  const handleDelete = (contactDataId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactDataId));
  };

  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (evt) => {
    setSearchName(evt.target.value.toLowerCase());
    console.log(getFilteredContacts());
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchName)
    );
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>

      <ContactForm contacts={contacts} onAddNewContact={onAddNewContact} />
      <SearchBox onChange={handleSearchChange} searchName={searchName} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDelete}
      />
    </div>
  );
}

export default App;
