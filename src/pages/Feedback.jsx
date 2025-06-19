import { useState } from 'react';

export default function Feedback() {
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(5);

  const submit = () => {
    if (!msg.trim()) return alert('Please write something first 🙂');

    // open default email client with feedback
    const mail = `mailto:ankus@example.com
      ?subject=Food Factory Feedback (${rating}/5)
      &body=${encodeURIComponent(msg)}`.replace(/\s+/g, '');
    window.location.href = mail;       // triggers email compose

    alert('Thanks for your feedback! 📧');
    setMsg('');
    setRating(5);
  };

  return (
    <div className="container">
      <h2>Feedback</h2>

      <label>Rate us:</label>
      <select value={rating} onChange={e => setRating(+e.target.value)}>
        {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
      </select>

      <textarea
        style={{ width: '100%', marginTop: 12, padding: 10 }}
        rows="6"
        placeholder="Write your feedback…"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />

      <button
        onClick={submit}
        style={{ marginTop: 12, padding:'6px 16px', background:'#ff6347', color:'#fff',
                 border:'none', borderRadius:6 }}>
        Send
      </button>
      <p style={{fontSize:12, marginTop:8}}>✉ Feedback is e-mailed to <strong>anjalidreams30@gmail.com</strong>.</p>
    </div>
  );
}
