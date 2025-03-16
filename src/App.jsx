
import ContactList from './components/contactList'
import ContactForm from './components/form/contactForm'
import SearchBox from './components/searchBox'

import './App.css'










function App() {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
     <SearchBox />
      <ContactList/>
      
    </>
  );
}

export default App;