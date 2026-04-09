import React from 'react';

export default function LearnRow() {
  const htmlContent = `
    <p style="text-align: center; margin-bottom: 40px;">Right of way isn't something you "take"—it's something you <strong>yield</strong>.</p>
    <h2>1. The 4-Way Intersection</h2>
    <div class="rule-box">
        <span class="rule-title">🥇 The Golden Rule</span><br/>
        The vehicle that arrives <strong>first</strong> gets to proceed <strong>first</strong>.
    </div>
    <div class="rule-box">
        <span class="rule-title">🤝 The "Right" Rule</span><br/>
        If simultaneous, the vehicle on the <strong>right</strong> has right of way. 
    </div>
    <h2 style="margin-top: 50px;">2. T-Intersections</h2>
    <div class="tech-box">
        <p>The road that "ends" must yield to the through-street.</p>
    </div>
  `;

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>The Master Guide to Right of Way</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}