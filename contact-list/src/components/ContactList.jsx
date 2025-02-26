import React from "react"; 
import { useState } from 'react';
import ContactRow from "./ContactRow";
import { useEffect } from "react";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({ selectedContactId, setSelectedContactId }) { 

    const [contacts, setContacts] = useState(dummyContacts);

    useEffect(()=>{
        
        async function fetchContacts() {

            try {
                // logic here
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
                const data = await response.json()
                setContacts(data)

            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        }   
        fetchContacts()
        },[]); 

    console.log("Contacts: ", contacts)

    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>            
            {
               // Map over data here
               contacts.map((contact) => {

                console.log("Rendering Contact ID:", contact.id, "Selected ID:", selectedContactId);

                return (
                <ContactRow 
                    key={contact.id} 
                    contact={contact} 
                    setSelectedContactId={setSelectedContactId} 
                />
                );
            })}

          </tbody>
        </table>
    ); 
}
