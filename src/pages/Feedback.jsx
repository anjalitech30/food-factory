import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!msg.trim()) {
      alert('Please write something first 🙂');
      return;
    }

    const res = await fetch('https://formspree.io/f/mdkzlajl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg, rating })
    });

    if (res.ok) {
      alert('Thanks for your feedback 😊');
      setMsg('');
      setRating(0);
    } else {
      alert('Something went wrong 😢');
    }
  };

  return (
    <div className="feedback-container">
      <h2>We'd love your Feedback!</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your thoughts..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        {/* ---------- STAR RATING (click‑to‑gold) ---------- */}
<label className="rating-label">
  Rating:
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? 'filled' : ''}`}
        onClick={() => setRating(star)}      // store numeric 1‑5
        role="button"
      >
        ★
      </span>
    ))}
  </div>

  {/* hidden field: sends rating to Formspree */}
  <input type="hidden" name="rating" value={`${rating} Stars`} />
</label>


        <button type="submit">Send Feedback</button>
{/*  ── New line to show your email to users ── */}
<p className="note">
  Feedback is delivered directly to <strong>anjalidreams30@gmail.com</strong>
</p>

      </form>
    </div>
  );
};

export default Feedback;
