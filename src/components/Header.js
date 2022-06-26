// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 style={{marginBottom:"0%"}}>Call a Friend</h1>
            <p>your friendly contact app</p>
            <span><b>.....................</b></span>
            
        </div>
    )
}

export default Header;