import Contact from './contacts';
import s from './contact.module.css'
import { useSelector } from "react-redux";
import { contSelect } from '../redux/contactsSlice';
import { contFilter } from '../redux/filtersSlice';


function ContactList() {
  const contacts = useSelector(contSelect);
  const filter = useSelector(contFilter)
  const filteredData = contacts.filter(contact => contact.name.includes(filter))
    return (
    <div className={s.listOfContacts}>
      {filteredData.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </div>
  );
}




export default ContactList;