import React from 'react';


export default function LearnMorePage() {
  return (
    <div className="learn-more-container">
      <h1 className="learn-more-title">Learn More About Sakhi</h1>
      
      <div className="learn-more-cards">
        
        <div className="learn-more-card">
          <h2 className="card-title">🤖 Chatbot Assistance</h2>
          <p className="card-text">
            Our 24/7 chatbot guides users to find NGOs, women's support organizations,
            emergency help, counselling contacts, and legal aid, offering quick, reliable answers.
          </p>
        </div>
        
        <div className="learn-more-card">
          <h2 className="card-title">🌟 Opportunities for Women</h2>
          <p className="card-text">
            Discover education, jobs, skill development, and entrepreneurship programs.
            Find workshops, government schemes, NGO initiatives, and training courses tailored to women's growth.
          </p>
        </div>
        
        <div className="learn-more-card">
          <h2 className="card-title">❤️ Our Commitment</h2>
          <p className="card-text">
            We are dedicated to safety, privacy, and empowerment. Sakhi offers a safe, supportive
            platform to help women connect with resources and build a better future.
          </p>
        </div>

      </div>
    </div>
  );
}
