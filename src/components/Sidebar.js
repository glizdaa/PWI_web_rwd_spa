import React, { useState } from 'react';
import '../globalStyles.css';

function Sidebar({ isOpen }) { // Przyjęcie props isOpen
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Zawartość Sidebar */}
      </div>
    );
  }  

export default Sidebar;