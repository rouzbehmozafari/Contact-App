import favs from '../assets/Images/SF Symbol.png'
import rec from '../assets/Images/recent.png'
import conts from '../assets/Images/contacts.png'
function Footer () {
    return (
        <div className="Footer">
            <a href="/favorites" className="favorites"><img src={favs} alt="f" /><p>Favorites</p></a>
            <a href="/recents" className="recents"><img src={rec} alt="f" /><p>Recents</p></a>
            <a href="/" className="contacts"><img src={conts} alt="f" /><p>Contacts</p></a>
        </div>
    )
}
export default Footer