import Contact from './contacts';
import s from './contact.module.css'
import { useDispatch, useSelector } from "react-redux";
import { contSelect, selectFilter, selectLoading, selectRejected } from '../redux/contactsSlice';
import { useEffect } from 'react';
import { contactThunk } from '../redux/contactsOps';


function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactThunk());
  }, [dispatch])

  const contacts = useSelector(contSelect);
  const filter = useSelector(selectFilter)
  const filteredData = contacts.filter(contact => contact.name.includes(filter))
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectRejected);
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
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong, try again</h2>}
    </div>
  );
}




export default ContactList;