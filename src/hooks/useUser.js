import { useState, useEffect } from 'react';

export default function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const u = localStorage.getItem('ff-user');
    setUser(u);
  }, []);
  return user;
}
