import React from 'react';
import { FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '3px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  socialIcons: {
    marginTop: '5px',
  },
  socialIconsItem: {
    display: 'inline-block',
    marginRight: '20px',
    verticalAlign: 'top',
  },
  socialIconsItemLast: {
    marginRight: 0,
  },
  socialIconsLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease-in-out',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
  },
  socialIconsLinkHover: {
    backgroundColor: '#777',
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <ul style={styles.socialIcons}>
          <li style={styles.socialIconsItem}>
            <a style={styles.socialIconsLink} href="https://telegram.org">
              <FaTelegram />
            </a>
          </li>
          <li style={styles.socialIconsItem}>
            <a style={styles.socialIconsLink} href="https://web.whatsapp.com">
              <FaWhatsapp />
            </a>
          </li>
          <li style={styles.socialIconsItem}>
            <a style={styles.socialIconsLink} href="https://vk.com">
              <FaVk />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;
