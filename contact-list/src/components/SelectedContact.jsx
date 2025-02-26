import React from "react"; 
import { useState } from 'react';
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    
   // console.log("Row ID:", contact.id, "Is Selected?", isSelected);

   const [contact, setContact] = useState(null)

        useEffect(()=>{
            async function fetchContact() {
    
                try {
                    // logic here
                    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                    const data = await response.json()
                    setContact(data)
                   
                    console.log("Fetched contact: ", data); // ✅ Logs the correct data

    
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            }   
            fetchContact()
            },[selectedContactId]); 


            if (!contact) {
                return <p>Loading contact details...</p>;
            }

    return (
      
        <div>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Website:</strong> {contact.website}</p>
            <p><strong>Company:</strong> {contact.company?.name || "N/A"}</p>

            <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
        </div>
      
    
);
}
