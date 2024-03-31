import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (arrContacts, filter) => {
  console.log("filter: ", filter);
  console.log(arrContacts);
  return arrContacts.filter((task) => task.name !== filter);
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.filters.name);

  const visibleTasks = getVisibleContacts(contacts, selectNameFilter);

  // const contacts = useSelector((state) => state.contacts.contacts.items);
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact {...visibleTasks} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
