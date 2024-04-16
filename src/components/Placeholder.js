import React from 'react';
import underConstructionImage from '../placeholder.png';
import '../globalStyles.css';

function Placeholder() {
  return (
    <div className="info-box">
      <h2>Ojej!</h2>
      <h2>Cierpliwości... budowa strony trwa w najlepsze!</h2>
      <h1><img src={underConstructionImage} alt="Strona w budowie" style={{ width: '26%', height: 'auto', marginTop: '20px' }} /></h1>
    </div>
  );
}

export default Placeholder;