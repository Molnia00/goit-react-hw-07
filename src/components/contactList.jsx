import Contact from './contacts';
import s from './contact.module.css'
import { useDispatch, useSelector } from "react-redux";
import { contSelect, selectLoading, selectRejected } from '../redux/contactsSlice';
 import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';


function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const contacts = useSelector(contSelect);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectRejected);
  return (
    <div className={s.listOfContacts}>
      {contacts.map((item) => (
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