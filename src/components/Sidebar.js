import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../globalStyles.css';

function Sidebar({ isOpen }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/placeholder1">Link Placeholder 1</Link></li>
          <li><Link to="/placeholder2">Link Placeholder 2</Link></li>
          <li><Link to="/placeholder3">Link Placeholder 3</Link></li>
          <li><Link to="/placeholder4">Link Placeholder 4</Link></li>
          {/* Dodaj więcej linków-placeholderów według potrzeb */}
        </ul>
      </div>
    );
}  

export default Sidebar;