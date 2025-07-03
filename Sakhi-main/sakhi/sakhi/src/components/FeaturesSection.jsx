import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routes

const features = [
  {
    title: 'NGO Connection Platform',
    description: 'Connect with NGOs working for women empowerment.',
    image: '/ngo.jpeg',
    link: 'https://www.guidestarindia.org'
  },
  {
    title: 'Multilingual Support',
    description: 'Educational videos available in multiple Indian languages.',
    image: '/Language.jpeg',
    link: '/multilingual' // internal route
  },
  {
    title: 'Women Empowerment',
    description: 'Resources and stories to inspire and uplift.',
    image: '/empower.jpeg',
    link: 'https://en.wikipedia.org/wiki/Women%27s_empowerment'
  },
  {
    title: 'Gender Myths',
    description: 'Breaking gender stereotypes with awareness.',
    image: '/gender.jpeg',
    link: 'https://inbreakthrough.org/breaking-gender-stereotypes/'
  },
  {
    title: 'Scholarship Opportunities',
    description: 'Discover scholarships and financial aid for girls.',
    image: '/girl.jpeg',
    link: 'https://www.buddy4study.com/scholarships/girls'
  }
];

function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => {
          const isInternal = feature.link.startsWith('/');
          const CardContent = (
            <>
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </>
          );

          return isInternal ? (
            <Link to={feature.link} key={index} className="feature-card">
              {CardContent}
            </Link>
          ) : (
            <a
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="feature-card"
            >
              {CardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturesSection;
