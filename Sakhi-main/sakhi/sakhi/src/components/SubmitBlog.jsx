import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function SubmitBlog() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    content: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_13m909u', 'template_dux3o22', formData, 'G8rRiKXq6JcwNtAU2')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('✅ Blog submitted successfully!');
          setFormData({ name: '', email: '', title: '', content: '' });
        },
        (err) => {
          console.log('FAILED...', err);
          setStatus('❌ Failed to submit blog. Try again later.');
        }
      );
  };

  return (
    <div className="blog-submit-form">
      <h2>Share Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Your Email" required />
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Blog Title" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your blog..." rows={8} required />
        <button type="submit">Submit Blog</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default SubmitBlog;
