import React from 'react';
import Navigation from './Navigation';
import '../globalStyles.scss';

function Header() {
    return (
        <header>
            <h1>SPA</h1>
            <Navigation />
        </header>
    );
}

export default Header;