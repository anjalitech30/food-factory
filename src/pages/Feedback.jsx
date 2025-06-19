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

        <div className="stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={rating >= num ? 'star filled' : 'star'}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
