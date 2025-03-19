import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import s from './IAmSoLazy.module.css'

import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

  number: Yup.string().matches(
      /^\d{3}-\d{2}-\d{2}$/,
    'Phone number must be in the format XXX-XX-XX').required('Required'),
});



function ContactForm() {
  

  const dispatch = useDispatch();




    const nameFieldId = useId();
    const phoneFieldId = useId();

    const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

    return (

      <Formik
        initialValues={ initialValues } 
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >

        <Form >
          <div className={s.fckForm}>
            <label className={s.titleLabel} htmlFor={phoneFieldId}>Name</label>
            <Field className={s.fieldInput} id={phoneFieldId} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="span"
            />
            
            <label className={s.titleLabel} htmlFor={nameFieldId}>Phone</label>
            <Field className={s.fieldInput} id={nameFieldId} type="tel" name="number" />
            <ErrorMessage
              name="number"
              component="span"
            />
            
            
            
            <button className={s.btnSubForm} type="submit" >Add contact</button>
          </div>
        </Form>


      </Formik>
    );
  };


export default ContactForm