import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Text Content */}
        <div className="about-text">
          <h2>About Sakhi</h2>
          <p><strong>Sakhi</strong> is a purpose-driven platform designed to empower girls and women by bridging gaps in education, support, and access. 🌸</p>
          
          <p>Our mission is to create a safe, inclusive, and multilingual digital space where girls can:</p>
          <ul>
            <li> Access educational resources on gender rights and mental wellness</li>
            <li> Connect with verified NGOs and volunteer opportunities</li>
            <li> Find scholarships and career guidance</li>
            <li> Ask questions anytime via our AI-powered chatbot</li>
            <li> Share their own stories, experiences, and blogs</li>
          </ul>

          <h3>Why Sakhi?</h3>
          <p>
            In many regions, girls still face barriers to education, health, and safety. Sakhi was created to change that. By combining education, technology, and community outreach, we give every girl a voice, a choice, and a platform to grow.
          </p>

          <h3>Our Vision</h3>
          <p>
            To build a generation of confident, informed young women who can challenge stereotypes, access opportunities, and lead change — starting from the grassroots.
          </p>
        </div>

        {/* Image */}
        <div className="about-image-container">
          <img src="/aboutUs.jpeg" alt="About Sakhi" />
        </div>
      </div>
    </section>
  );
}

export default About;
