import React from 'react';

export default function LearnSigns() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>The Master Guide to Road Signs</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Road signs are designed to be understood in a fraction of a second. In India, they strictly follow the guidelines set by the Indian Roads Congress (IRC).
      </p>

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
              <h3><span className="color-dot" style={{ background: '#27ae60' }}></span>Green or Blue</h3>
              <p><strong>Guide / Informatory.</strong></p>
          </div>
      </div>

      <h2 style={{ marginTop: '50px' }}>2. The 3 Categories of Indian Road Signs</h2>
      
      {/* Category 1: Mandatory Signs */}
      <h3 style={{ color: '#c0392b', marginTop: '30px' }}>🛑 Mandatory / Regulatory Signs</h3>
      <p>Violation of these signs is a legal offense. They are generally circular with a red border.</p>
      <div className="details-grid">
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/stop.jpg'} alt="Stop Sign" style={{ width: '80px', marginBottom: '10px' }} />
              <h4>Stop</h4>
              <p style={{ fontSize: '0.9rem' }}>The only octagonal sign. You must come to a complete halt.</p>
          </div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/giveway.webp'} alt="Give Way Sign" style={{ width: '80px', marginBottom: '10px' }} />
              <h4>Give Way</h4>
              <p style={{ fontSize: '0.9rem' }}>The only inverted triangle. Yield to traffic on the main road.</p>
          </div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/noentry.png'} alt="No Entry Sign" style={{ width: '80px', marginBottom: '10px' }} />
              <h4>No Entry</h4>
              <p style={{ fontSize: '0.9rem' }}>Entry is strictly prohibited for all vehicles.</p>
          </div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/speed.jpeg'} alt="Speed Limit 50" style={{ width: '80px', marginBottom: '10px' }} />
              <h4>Speed Limit (50)</h4>
              <p style={{ fontSize: '0.9rem' }}>Maximum legal speed permitted in km/h.</p>
          </div>
      </div>

      {/* Category 2: Cautionary Signs */}
      <h3 style={{ color: '#f39c12', marginTop: '40px' }}>⚠️ Cautionary / Warning Signs</h3>
      <p>These alert drivers to potential hazards ahead. They are always triangular with a red border and black symbol.</p>
      <div className="details-grid">
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/Pedestrian Crossing.png'} alt="Pedestrian Crossing" style={{ width: '90px', marginBottom: '10px' }} />
              <h4>Pedestrian Crossing</h4>
              <p style={{ fontSize: '0.9rem' }}>Slow down and prepare to stop for crossing pedestrians.</p>
          </div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/School Ahead.jpg'} alt="School Ahead" style={{ width: '90px', marginBottom: '10px' }} />
              <h4>School Ahead</h4>
              <p style={{ fontSize: '0.9rem' }}>Drive slowly, children may be crossing the road.</p>
          </div>
          <div className="detail-card" style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/Right Hairpin Bend.jpeg'} alt="Right Hairpin Bend" style={{ width: '90px', marginBottom: '10px' }} />
              <h4>Right Hairpin Bend</h4>
              <p style={{ fontSize: '0.9rem' }}>A sharp, U-shaped curve to the right is approaching.</p>
          </div>
      </div>
    </div>
  );
}