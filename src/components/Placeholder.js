import React from 'react';
import underConstructionImage from '../placeholder.png';
import '../globalStyles.scss';

function Placeholder() {
  return (
    <div className="info-box">
      <h2>Ojej!</h2>
      <h2>Cierpliwości... budowa strony trwa w najlepsze!</h2>
      <img src={underConstructionImage} alt="Strona w budowie" />
    </div>
  );
}

export default Placeholder;