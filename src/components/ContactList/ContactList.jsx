import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";


const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);


    return (
        <div className={s.contactListBox}>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>        
    )
};

export default ContactList;
