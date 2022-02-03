import React, { useState, useEffect } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Contact from '../Components/Contact';
const MainContainer =  ()=> {
    const [Contacts,setContacts] = useState([])
    const murl = "http://localhost:4000/contacts";
    useEffect((()=> {
        axios(murl)
        .then( (response) => {
            console.log(response.data)
          setContacts(response.data);
        })    
    }
    ),Contacts)
        return (  
            <div className="MainContainer">
                {Contacts.map(i => 
                    <Contact
                        key = {uuidv4()}
                        bild = {i.bild}
                        name = {i.name}
                        isFav = {i.isFav}
                        mobil = {i.mobil}
                        />
                )}
    
            </div>
         );
    }


export default MainContainer;
