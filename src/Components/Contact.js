import axios from "axios";
const Contact = (props) => {
    const {bild,name,isFav,mobil} = props
    const changeFav =(e)=>{
        axios.get(`http://localhost:4000/fav?mobil=${mobil}&isFav=${isFav}`)
        .then(()=> {
            if (e.target.style.backgroundColor == 'yellow'){
                e.target.style.backgroundColor = 'white'
            }
            else {
                e.target.style.backgroundColor = 'yellow'
            }
        })
    }
    return ( 

        <div className="Contact">
            <img src={bild} alt="bild" />
            <p>{name}</p>
            <p className="fav" onClick={changeFav} style={{backgroundColor: isFav? 'yellow' : 'white'  , color : isFav? 'black' : 'black'}}>FAV</p>
        </div>
     );
}
 
export default Contact;