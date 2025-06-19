// src/pages/Feedback.jsx
import React, { useState, useRef } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState('5⭐');
  const email = localStorage.getItem('ff-user') || '';   // email from login
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple front‑end validation
    if (!msg.trim()) {
      alert('Please write something first 🙂');
      return;
    }

    // If everything is fine, submit the HTML form to Formspree
    formRef.current.submit();
  };

  return (
    <div className="feedback-container">
      <h2>Give Us Your Feedback</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mdkzlajl"
        method="POST"
        className="feedback-form"
      >
        {/* hidden field lets Formspree reply directly */}
        <input type="hidden" name="_replyto" value={email} />

        <label>
          Your Email:
          <input
            type="email"
            name="email"
            value={email}
            readOnly
            placeholder="login required"
            required
          />
        </label>

        <label>
          Rating:
          <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="5⭐">5 ⭐ Excellent</option>
            <option value="4⭐">4 ⭐ Good</option>
            <option value="3⭐">3 ⭐ Average</option>
            <option value="2⭐">2 ⭐ Poor</option>
            <option value="1⭐">1 ⭐ Very Bad</option>
          </select>
        </label>

        <label>
          Your Feedback:
          <textarea
            name="message"
            rows="4"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
        </label>

        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}
