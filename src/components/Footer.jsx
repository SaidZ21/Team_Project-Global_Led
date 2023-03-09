import React from 'react';
import { FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  socialIcons: {
    marginTop: '10px',
  },

  socialIconsItem: {
    display: 'inline-block',
    marginRight: '10px',
    verticalAlign: 'top', // add this property
  },
  socialIconsItemLast: {
    marginRight: 0,
  },
  socialIconsLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    fontSize: '30px',
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
        <h3 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Ссылки на соц.сети:</h3>
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
