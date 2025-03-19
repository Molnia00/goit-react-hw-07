import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './contact.module.css'
import { useDispatch } from "react-redux";
 import { deleteContact } from '../redux/contactsOps';


function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    
    return (
        <div>

            <div className={s.contactContainer}>
                <p><HiUser size="24" /> {name}</p>
            
                <p><BsFillTelephoneFill size="24" /> {number}</p>
            </div>

            <button className={s.btnContactDelete} onClick={() => dispatch(deleteContact(id))} type="button"> Delete</button>


        </div>
    )
}


export default Contact
