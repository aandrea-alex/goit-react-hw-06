import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) return;
  return (
    <ul className={styles.contact}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
