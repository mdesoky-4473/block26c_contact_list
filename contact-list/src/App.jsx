import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Contacts</h1>
      <ContactList />
    </>
  );

}

export default App
