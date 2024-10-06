import { useSelector } from 'react-redux';
import { getItems } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getItems);

  if (contacts.length === 0) return;
  return (
    <ul className={styles.contact}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
