import React, { useState } from 'react';

export default function MenuCard({ item, onAdd }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p className={`tag ${item.veg ? 'veg' : 'nonveg'}`}>
        {item.veg ? 'Veg' : 'Non-veg'}
      </p>
      <p className="price">₹{item.price}</p>

      <div className="qtybox">
        <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
        <span>{qty}</span>
        <button onClick={() => setQty(q => q + 1)}>＋</button>
      </div>

      <button className="add-btn" onClick={() => onAdd(item, qty)}>
        Add to Cart
      </button>
    </div>
  );
}
