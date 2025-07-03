
import React, { useRef, useState } from 'react';
 import emailjs from '@emailjs/browser';
// import './Contact.css';  // optional for styling

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_13m909u',      // Replace with your EmailJS service ID
      'template_dux3o22',     // Replace with your template ID
      form.current,
      'G8rRiKXq6JcwNtAU2'       // Replace with your EmailJS public key
    ).then(() => {
        setSuccess(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setSuccess(false);
      });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading">Lets Start A Conversation</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name *</label>
        <div className="name-fields">
          <input type="text" name="first_name" required placeholder="First" />
          <input type="text" name="last_name" required placeholder="Last" />
        </div>
        <label>Email *</label>
        <input type="email" name="user_email" required placeholder="Your Email" />

        <label>Subject</label>
        <select name="subject">
          <option>I want to know more about Sakhi</option>
          <option>I have a question</option>
          <option>Other</option>
        </select>

        <label>Please Ask Your Doubt Here *</label>
        <textarea name="message" required placeholder="Type your message here" />

        <button type="submit">Send Message</button>
      </form>
      {success && <p className="success-message">Message sent successfully!</p>}
    </div>
  );
}
