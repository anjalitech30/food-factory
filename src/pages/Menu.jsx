import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import MenuCard from '../components/MenuCard';

const categories = [
  { id: 'veg',     label: 'Veg' },
  { id: 'nonveg',  label: 'Non-Veg' },
  { id: 'pizza',   label: 'Pizza' },
  { id: 'spicy',   label: 'Spicy Tadka' },
  { id: 'drinks',  label: 'Drinks' },
  { id: 'sweets',  label: 'Sweets' }
];

export default function Menu() {
  const [active, setActive] = useState('veg');

  const handleAdd = (item, qty) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItemIndex = cart.findIndex((i) => i.id === item.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += qty;
  } else {
    cart.push({ ...item, quantity: qty });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item.name} × ${qty} added to cart!`);
};

  return (
    <div className="container">
      <h2>🍴 Our Menu</h2>

      {/* category tabs */}
      <div className="tabs">
        {categories.map(cat => (
          <div
            key={cat.id}
            className={`tab ${active === cat.id ? 'active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </div>
        ))}
      </div>

      {/* card grid */}
      <div className="menu-grid">
        {menuData[active].map(item => (
          <MenuCard key={item.id} item={item} onAdd={handleAdd} />
        ))}
      </div>
    </div>
  );
}
