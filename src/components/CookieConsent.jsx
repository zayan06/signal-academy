import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('signalAcademyConsent');
    if (!consent) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    Cookies.set('signalAcademyConsent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      backgroundColor: 'var(--primary)', color: 'white',
      padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', zIndex: 1000
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        🍪 We use cookies to save your login session and enhance your learning experience. 
      </p>
      <button onClick={handleAccept} className="btn-submit" style={{ padding: '0.5rem 1rem' }}>
        Got it!
      </button>
    </div>
  );
}