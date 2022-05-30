import React, { memo } from 'react';

import './style.css';

function Header() {    
    return (
        <header className="Header">
            <span>Rick & Morty</span>
        </header>
    );
}

export default memo(Header);