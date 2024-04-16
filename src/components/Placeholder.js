import React from 'react';
import underConstructionImage from '../placeholder.png';
import '../globalStyles.css';

function Placeholder() {
  return (
    <div className="info-box">
      <h2>Ojej!</h2>
      <p>Cierpliwości... budowa strony trwa w najlepsze!</p>
      <img src={underConstructionImage} alt="Strona w budowie" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
    </div>
  );
}

export default Placeholder;