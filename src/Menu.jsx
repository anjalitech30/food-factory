import React from 'react';
import './Menu.css';

const foodItems = [
  { name: 'Pizza',  price: '₹199', image: 'https://i.imgur.com/um4KBNQ.jpg' },
  { name: 'Burger', price: '₹149', image: 'https://i.imgur.com/dRZ5sAS.jpg' },
  { name: 'Pasta',  price: '₹179', image: 'https://i.imgur.com/eYmN0nw.jpg' },
  { name: 'Fries',  price: '₹99',  image: 'https://i.imgur.com/DH3r8r2.jpg' },
  { name: 'Momos',  price: '₹89',  image: 'https://i.imgur.com/yNqN3Cm.jpg' },
];

function Menu() {
  return (
    <div className="menu-container">
      <h2>🍽️ Our Menu</h2>
      <div className="menu-grid">
        {foodItems.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
