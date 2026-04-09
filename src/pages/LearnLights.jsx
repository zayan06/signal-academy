import React, { useState, useEffect } from 'react';

export default function LearnLights() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const cycleLight = () => setPhase((prev) => (prev === 3 ? 0 : prev + 1));

  const getLightColor = (targetLight) => {
    if (targetLight === 'red' && phase === 0) return "#e74c3c";
    if (targetLight === 'yellow' && (phase === 1 || phase === 3)) return "#f1c40f";
    if (targetLight === 'green' && phase === 2) return "#2ecc71";
    return "#1a252f";
  };

  const msgs = ["STOP", "PREPARE TO GO", "GO", "CAUTION"];

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>The Master Guide to Traffic Signals</h1>
      <div className="video-container">
        <h3>🚦 Interactive Signal Simulator</h3>
        <div className="simulator-box">
          <div className="light-circle" style={{ backgroundColor: getLightColor('red') }} />
          <div className="light-circle" style={{ backgroundColor: getLightColor('yellow') }} />
          <div className="light-circle" style={{ backgroundColor: getLightColor('green') }} />
        </div>
        <button onClick={cycleLight} className="btn">Advance Light Phase</button>
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>Current Phase: {msgs[phase]}</p>
      </div>

      <h2 style={{ marginTop: '50px' }}>1.  Signals</h2>
      <div className="details-grid">
        <div className="detail-card" style={{ borderTop: '4px solid var(--success)' }}>
            <h3>⬅️ Solid Green </h3>
            <p><strong>Protected Turn:</strong> Absolute right of way.</p>
        </div>
        <div className="detail-card" style={{ borderTop: '4px solid var(--warning)' }}>
            <h3>🟡 Flashing Yellow </h3>
            <p><strong>Permissive Turn:</strong> Yield to oncoming traffic.</p>
        </div>
        <div className="detail-card" style={{ borderTop: '4px solid var(--danger)' }}>
            <h3>🟥 Solid Red </h3>
            <p><strong>No Turning:</strong> Wait for green.</p>
        </div>
      </div>
    </div>
  );
}