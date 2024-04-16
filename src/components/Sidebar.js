import React from 'react';
import { Link } from 'react-router-dom';
import '../globalStyles.css';

function Sidebar({ isOpen }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        O kurde, znalazłeś mnie!
        <ul>
          <li><Link to="/placeholder">Link Placeholder 1</Link></li>
          <li><Link to="/placeholder">Link Placeholder 2</Link></li>
          <li><Link to="/placeholder">Link Placeholder 3</Link></li>
          <li><Link to="/placeholder">Link Placeholder 4</Link></li>
        </ul>
      </div>
    );
}  

export default Sidebar;