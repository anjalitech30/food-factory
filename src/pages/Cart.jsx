import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px", color: "#E44D26" }}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#777" }}>Your cart is empty.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#fdfdfd",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{item.name}</h3>
              <p>Price: <strong>₹{item.price}</strong></p>
              <p>Quantity: <strong>{item.quantity}</strong></p>
              <p>Total: <strong>₹{item.price * item.quantity}</strong></p>
            </div>
          ))}
          <h3 style={{ marginTop: "20px", fontSize: "22px", color: "#28a745" }}>
            Grand Total: ₹{getTotalAmount()}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
