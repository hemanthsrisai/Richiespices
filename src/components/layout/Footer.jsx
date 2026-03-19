import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <h2>Richie Spices</h2>
            </div>
            <p className={styles.desc}>
              Delivering the authentic flavors of India globally. Premium whole, powder, and blended spices for consumers and businesses alike.
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/richieplusfoods/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/richieplusfoods?igsh=MXA3MDlqZTExMW0wZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/richie-spices-private-limited/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Links */}
          <div className={styles.linksCol}>
            <h3>Our Business</h3>
            <ul>
              <li><Link to="/b2b">B2B (HORECA/Wholesale)</Link></li>
              <li><Link to="/b2b2c">B2B2C Partnerships</Link></li>
              <li><Link to="/contact">Request a Quote</Link></li>
              <li><Link to="/about">Our Facilities</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h3>Get In Touch</h3>
            <ul className={styles.contactInfo}>
              <li>
                <MapPin size={20} className={styles.contactIcon} />
                <span>A-98/6, Wazirpur Industrial Area, Near Shalimar Bagh Metro Station, Delhi- 110052</span>
              </li>
              <li>
                <Phone size={20} className={styles.contactIcon} />
                <span>+91 8826694992</span>
              </li>
              <li>
                <Mail size={20} className={styles.contactIcon} />
                <span>info@richiespices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Richie Spices Company. All Rights Reserved.</p>
          <div className={styles.footerLegal}>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
