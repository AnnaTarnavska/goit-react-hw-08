import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({contact}) => {

    const dispatch = useDispatch();

    return (
        <div className={s.contactbox}>
            <ul className={s.contactInfoBox}>
                <li className={s.contactInfo}>
                    <IoPersonSharp size="17" />{contact.name}</li>
                <li className={s.contactInfo}>
                    <FaPhoneAlt size="17" />{contact.number}</li>
            </ul>
            <button onClick={() => dispatch(deleteContact(contact.id))} className={s.buttonDel}>Delete</button>
        </div>
        
    );
};

export default Contact;
