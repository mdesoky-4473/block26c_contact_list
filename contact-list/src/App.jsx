import './App.css'
import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';


function App() {
  
  const [selectedContactId, setSelectedContactId] = useState(null)

  // return (
  //   <>
  //     <h1>My Contacts</h1>
  //     <ContactList />
  //   </>
  // );
  console.log("Currently Selected Contact ID in App:", selectedContactId);
  return (
      <>
      {selectedContactId ? (
        <>
          <h2>Selected Contact Details</h2>
          <SelectedContact 
            selectedContactId={selectedContactId} 
            setSelectedContactId={setSelectedContactId} 
          />
        </>
      ) : (
        <ContactList 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId} 
        />
      )}
    </>
  );

}

export default App
