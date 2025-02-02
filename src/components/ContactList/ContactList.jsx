
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { useSelector } from "react-redux";
const ContactList = () => {
 const filteredContacts = useSelector(selectFilteredContacts);
  
  
  
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))};
    
    </ul>
  );
};

export default ContactList;