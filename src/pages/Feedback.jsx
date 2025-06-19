// src/pages/Feedback.jsx
import React, { useState, useRef } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [msg, setMsg]     = useState('');
  const [rating, setRating] = useState(5);                // numeric 1‑5
  const email = localStorage.getItem('ff-user') || '';    // from login
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg.trim()) {
      alert('Please write something first 🙂');
      return;
    }
    formRef.current.submit();   // send to Formspree
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
        {/* Formspree will reply to this address */}
        <input type="hidden" name="_replyto" value={email} />

        <label>
          Your Email:
          <input type="email" name="email" value={email} readOnly required />
        </label>

        <label className="rating-label">
          Rating:
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
                role="button"
              >
                ★
              </span>
            ))}
          </div>
          {/* send rating (1–5 stars) to Formspree */}
          <input type="hidden" name="rating" value={`${rating} Stars`} />
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
