// import searchImg from '../assets/Images/search.svg'
import React from 'react';

const Header =  ()=> {
    return ( 
        <div className="Header">
            <div className="container">
                <h2>Kontakte</h2>
                <div className="search">
                    <input type="search" placeholder='Suchen'/>
                    <a href='/newContact' className="add">+</a>
                </div>
            </div>
        </div>
     );
}


export default Header;

