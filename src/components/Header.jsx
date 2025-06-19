import React from 'react';

export default function Header() {
  return (
    <header style={{
      width: '100vw',             // Full screen width
      backgroundColor: '#ff6347',
      padding: '1rem 0',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }}>
      <h1 style={{ margin: '0', fontSize: '2.5rem' }}>🍔 Food Factory</h1>
      <p style={{ marginTop: '0.5rem' }}>Delicious food delivered to your doorstep</p>
    </header>
  );
}
