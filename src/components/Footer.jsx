import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer-grid">
        <div className="footer-col">
          <h2 className="footer-heading">Information</h2>
          <ul className="footer-links">
            <li><Link to="/om-oss">Om oss →</Link></li>
            <li><Link to="/kontakt">Showroom</Link></li>
            <li><Link to="/under-konstruktion">Återförsäljare</Link></li>
            <li><Link to="/under-konstruktion">Köpvillkor</Link></li>
            <li><Link to="/under-konstruktion">CITES - Handelsregler</Link></li>
            <li><Link to="/under-konstruktion">Om tillverkare</Link></li>
            <li><Link to="/under-konstruktion">Klimatet &amp; gitarrer</Link></li>
            <li><Link to="/under-konstruktion">Artister &amp; band</Link></li>
            <li><Link to="/under-konstruktion">Önskemål</Link></li>
            <li><Link to="/under-konstruktion">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Tips &amp; Tricks</h2>
          <ul className="footer-links">
            <li><Link to="/under-konstruktion">Gitarrens delar</Link></li>
            <li><Link to="/under-konstruktion">Så skapas tonen</Link></li>
            <li><Link to="/under-konstruktion">Gitarrteori</Link></li>
            <li><Link to="/under-konstruktion">Underhåll &amp; justering</Link></li>
            <li><Link to="/under-konstruktion">Uppgradering</Link></li>
            <li><Link to="/under-konstruktion">Problemlösning</Link></li>
            <li><Link to="/under-konstruktion">Skapa rätt sound</Link></li>
            <li><Link to="/under-konstruktion">Spelövningar</Link></li>
            <li><Link to="/under-konstruktion">Test av instrument</Link></li>
            <li><a href="https://www.youtube.com/results?search_query=best+guitarists+of+all+time" target="_blank" rel="noopener noreferrer">Världens främsta gitarrister ↗</a></li>
            <li><Link to="/under-konstruktion">Sköna band &amp; artister</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">
            <Link to="/kontakt" className="footer-contact-link">Kontakta oss →</Link>
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
