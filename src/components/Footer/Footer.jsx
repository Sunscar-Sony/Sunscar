import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-logo-heading">
          <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
          <h2 className="footer-heading">Stay Connected</h2>
        </div>
        <div className="footer-column footer-quick-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column footer-connect-form">
          <form>
            <label htmlFor="email">Subscribe to our newsletter:</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
