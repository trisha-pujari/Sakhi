// GetStarted.jsx
import React from 'react';


export default function GetStarted() {
  return (
    <div className="get-started-container">
      <h2 className="title">Get Started</h2>
      <div className="card-grid">
        
        <div className="card">
          <div className="icon">✔️</div>
          <h3>Categories</h3>
          <ul className="numbered">
            <li><strong>1️⃣ Legal Rights</strong> – Know your rights, report abuse, key laws.</li>
            <li><strong>2️⃣ Mental Health</strong> – Counseling, support, helpline numbers.</li>
            <li><strong>3️⃣ Gender Myths</strong> – Breaking stereotypes, common misconceptions.</li>
            <li><strong>4️⃣ Success Stories</strong> – Inspiring journeys of empowered women.</li>
            <li><strong>5️⃣ Education & Careers</strong> – Scholarships, opportunities, STEM for girls.</li>
          </ul>
        </div>
        
        <div className="card">
          <div className="icon">🌐</div>
          <h3>Multilingual Support</h3>
          <ul>
            <li>Language Options – Content in multiple regional languages.</li>
            <li>AI Translation – Auto-translate for text, videos, chatbots.</li>
            <li>Voice & Text Support – Users can read or listen in their language.</li>
            <li>Easy Switch – Toggle between languages anytime.</li>
          </ul>
        </div>
        
        <div className="card">
          <div className="icon">⭐</div>
          <h3>Ngo Connection Platform</h3>
          <ul>
            <li>Find NGOs – Search by location & category (education, legal aid, mental health).</li>
            <li>Get Support – Connect for help, resources, and guidance.</li>
            <li>Volunteer & Donate – Contribute time or funds to verified NGOs.</li>
            <li>Impact Stories – See real success stories from NGO initiatives.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

