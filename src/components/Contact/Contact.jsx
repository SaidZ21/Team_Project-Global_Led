import React from 'react';
import Karta from './Karta';

function Contact() {
  return (
    <div className="contackMain">
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem',
      }}
      >
        <Karta />
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2rem', borderRadius: '1rem', marginTop: '2rem',
        }}
        >
          <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Мои контакты:</h1>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '2rem',
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', marginRight: '1rem' }} />
              <h4>Адрес: Деревня Голиково 55</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <i className="fas fa-phone" style={{ fontSize: '2rem', marginRight: '1rem' }} />
              <h4>Контакты руководителя:    </h4>
              <h4 style={{ marginLeft: '10px' }}>Тимур</h4>
              <h4 style={{ marginLeft: '10px' }}>+7(925)-275-90-98</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
