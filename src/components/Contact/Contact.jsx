import { FiPhone } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <div className={css.contactWrapper}>
        <h4>
          <FiUser />
          {name}
        </h4>
        <p>
          <FiPhone /> {number}
        </p>
      </div>

      <button
        onClick={() => onDeleteContact(id)}
        className={css.deleteButton}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
