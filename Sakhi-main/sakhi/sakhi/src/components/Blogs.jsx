// 1. Update `Blogs.jsx` to support navigation
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Blogs.css'; // optional for separating styles

const blogPosts = [
  {
    id: 1,
    title: "Breaking Stereotypes: Her Tech Journey",
    snippet: "Meet Sneha, a 19-year-old coder challenging norms in a male-dominated space...",
    image: "/hoo.jpeg"
  },
  {
    id: 2,
    title: "Education for All",
    snippet: "Initiatives and platforms making education accessible for girls in rural areas...",
    image: "/education.jpeg"
  },
  {
    id: 3,
    title: "Scholarships You Didn't Know About",
    snippet: "Explore amazing scholarships available to women in STEM and beyond...",
    image: "/scholarship.jpeg"
  }
];

function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="blogs-page">
      <h1 className="blogs-title">Women Empowerment Blogs</h1>
      <div className="blogs-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id} onClick={() => navigate(`/blogs/${post.id}`)}>
            <img src={post.image} alt={post.title} className="blog-img" />
            <h2>{post.title}</h2>
            <p>{post.snippet}</p>
            <span className="read-more">Read More →</span>
          </div>
        ))}
      </div>

      <div className="submit-blog">
        <h2>Want to share your story?</h2>
        <p>Write your blog and send it to us via email.</p>
        <a onClick={() => navigate('/submit-blog')} className="submit-btn">
  Submit Your Blog
</a>
      </div>
    </div>
  );
}

export default Blogs;
