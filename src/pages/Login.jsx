import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    if (!email || !pw) return alert('Enter both fields');
    // mock auth: store email in localStorage
    localStorage.setItem('ff-user', email);
    alert('Logged in!');
    nav('/');          // go back to menu
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        style={{ width:'100%', padding:8, marginBottom:10 }}
        type="email" placeholder="Email"
        value={email} onChange={e=>setEmail(e.target.value)}
      />
      <input
        style={{ width:'100%', padding:8 }}
        type="password" placeholder="Password"
        value={pw} onChange={e=>setPw(e.target.value)}
      />
      <button onClick={handleLogin}
        style={{ marginTop:12, padding:'6px 16px', background:'#ff6347',
                 color:'#fff', border:'none', borderRadius:6 }}>
        Login
      </button>
    </div>
  );
}
