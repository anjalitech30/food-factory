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
