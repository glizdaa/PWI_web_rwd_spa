import React from 'react';
import '../globalStyles.scss';

function Contact() {
  return (
    <div className="info-box">
      <h2>Kontakt</h2>
      <p>Jeśli masz jakiekolwiek pytania lub chciałbyś się "skontaktować", skorzystaj z poniższych informacji:</p>
      <ul>
        <li>Email: kontakt@przykladowastrona.pl</li>
        <li>Telefon: +00 123 456 789</li>
        <li>Adres: Ulica Przykładowa 1, 00-000 Miasto</li>
      </ul>
      <p>PS. Telefonu i tak nikt nie odbierze jak w US, ale próbować można...</p>
      <p>PS2. Listów też nie czytają.</p>
    </div>
  );
}

export default Contact;