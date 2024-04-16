import React from 'react';
import { Link } from 'react-router-dom';
import smurfImage from '../smurf.jpg';
import '../globalStyles.css';

function Sidebar({ isOpen }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img src={smurfImage} alt="Whoops" style={{ width: '100%', height: 'auto'}} />
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