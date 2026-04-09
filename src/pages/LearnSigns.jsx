import React from 'react';

export default function LearnSigns() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>The Master Guide to Road Signs</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>Road signs are designed to be understood in a fraction of a second.</p>

      <div className="video-container">
          <h3>🎥 Watch: The Secret Language of Road Signs</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/n3Hn1q-0Yg8" title="Road Signs Explained" allowFullScreen style={{ border: 'none', borderRadius: '8px' }}></iframe>
      </div>

      <h2 style={{ marginTop: '50px' }}>1. Decoding by Color</h2>
      <div className="details-grid">
          <div className="detail-card" style={{ borderTop: '4px solid #c0392b' }}>
              <h3><span className="color-dot" style={{ background: '#c0392b' }}></span>Red</h3>
              <p><strong>Stop, Yield, or Prohibited.</strong></p>
          </div>
          <div className="detail-card" style={{ borderTop: '4px solid #f1c40f' }}>
              <h3><span className="color-dot" style={{ background: '#f1c40f' }}></span>Yellow</h3>
              <p><strong>General Warning.</strong></p>
          </div>
          <div className="detail-card" style={{ borderTop: '4px solid #27ae60' }}>
              <h3><span className="color-dot" style={{ background: '#27ae60' }}></span>Green</h3>
              <p><strong>Guide / Directional.</strong></p>
          </div>
      </div>

      <h2 style={{ marginTop: '50px' }}>2. Decoding by Shape</h2>
      <div className="tech-box">
          <h3>🛑 Octagon (8 Sides) = Exclusive to STOP Signs</h3>
          <p>No other sign on the road uses this shape.</p>
      </div>
      <div className="tech-box">
          <h3>🔽 Inverted Triangle = Exclusive to YIELD Signs</h3>
          <p>This tells you to slow down and prepare to stop.</p>
      </div>
    </div>
  );
}