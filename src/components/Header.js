import React from 'react';
import Navigation from './Navigation';
import '../globalStyles.css';

function Header() {
    return (
        <header>
            <h1>Moja SPA</h1>
            <Navigation />
        </header>
    );
}

export default Header;