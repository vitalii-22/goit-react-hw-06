import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact {...contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
