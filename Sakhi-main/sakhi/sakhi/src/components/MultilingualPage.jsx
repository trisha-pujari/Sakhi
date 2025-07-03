import React from 'react';

const videos = [
  {
    title: 'Women’s Rights in Hindi',
    thumbnail: '/hindi.jpeg',
    link: 'https://youtu.be/e63E7Geivs8?si=X-8uVFhSfvn0f6SD'
  },
  {
    title: 'Health Awareness in Tamil',
    thumbnail: '/tamil.jpeg',
    link: 'https://youtu.be/3D1GUqNtvVI?si=bmi3FQlYhTp0P1Ru'
  },
  {
    title: 'Financial Literacy in Bengali',
    thumbnail: '/bengali.jpeg',
    link: 'https://youtu.be/SpQkcMJU928?si=17x9QckmoRJkC1kT3'
  },
  {
    title: 'Safety and Support in Marathi',
    thumbnail: '/marathi.jpeg',
    link: 'https://youtu.be/uOdqT7bXA-Y?si=6qIxcZWwM46vaFes'
  },
  {
    title: 'Women’s Education in English',
    thumbnail: '/english.jpeg',
    link: 'https://youtu.be/4brSpSF9P5Y?si=m-gGYTfWJLPGsT3Q'
  },
  {
    title: 'Career Guidance in Gujarati',
    thumbnail: '/gujrati.jpeg',
    link: 'https://youtu.be/qUcB9Rlj0mE?si=2Dlosb5gyfJsfUnX'
  },
  {
    title: 'Gender equality:Breaking barriers in english',
    thumbnail: '/malyalam.jpeg',
    link: 'https://youtu.be/-Zf04sHNuAg?si=h-x0jh_ERWNrf3Au'
  },
  {
    title: 'Legal Rights for Women in english',
    thumbnail: 'kannada.jpeg',
    link: 'https://youtu.be/zykDjctzY-k?si=MeJWgPb-bn9v6J8d'
  },
  
];

export default function MultilingualPage() {
  return (
    <div className="multilingual-container">
      <h2>Multilingual Video Resources</h2>
      <div className="video-grid">
        {videos.map((video, idx) => (
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="video-card"
          >
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h3>{video.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
