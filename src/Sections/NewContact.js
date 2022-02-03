import { useState } from 'react';
import axios from "axios";

const NewContact = () => {
    const [name,setName] = useState('')
    const [number,setnumber] = useState('')
    const [url,setUrl] = useState('')
    const addNew =(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:4000/newContact?mobil=${number}&isFav=false&name=${name}&url=${url}`)
    }
    return ( 
        <div className="NewContact">
            <form action="">
                <input type="text" onChange={(e)=> {setName(e.target.value)}} placeholder="Name" name="name" />
                <input type="text" onChange={(e)=> {setnumber(e.target.value)}} placeholder="Number" name="number" />
                <input type="text" onChange={(e)=> {setUrl(e.target.value)}} placeholder="Bild Url" name="url" />
                <input type="submit"  onClick={addNew} value='ADD' className='submit'/>
            </form>
        </div>
     );
}
 
export default NewContact;