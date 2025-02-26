import React from "react"; 
//import { useState } from 'react';

export default function ContactRow({ contact, setSelectedContactId, isSelected }) {
    
   // console.log("Row ID:", contact.id, "Is Selected?", isSelected);
    
    return (
        <tr
        onClick={() => {
            console.log("Clicked Contact ID:", contact.id); 
            setSelectedContactId(contact.id);
        }}
        style={{
            cursor: "pointer",
        }}
        >
      
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      
      </tr>
    
);
}
