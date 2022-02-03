import React, { useState, useEffect } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Contact from '../Components/Contact';
const Favorites =  ()=> {
    const [Contacts,setContacts] = useState([])
    const murl = "http://localhost:4000/contacts";
    useEffect((()=> {
        axios(murl)
        .then( (response) => {
            console.log(response.data)
          setContacts(response.data.filter(i => i.isFav == true));
        })    
    }
    ),[])
        return (  
            <div className="Favorites">
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

export default Favorites;

