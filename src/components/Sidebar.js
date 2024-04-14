import React, { useState } from 'react';
import '../globalStyles.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <div className="sidebar-content">
                <h2>Sidebar Title</h2>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    // Dodaj więcej linków lub zawartości, jak potrzebujesz
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;