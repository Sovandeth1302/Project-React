import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information (initially null)

  const loginUser = (email) => {
    if (email === 'sovandeth@gmail.com') {
      setUser({ email: 'sovandeth@gmail.com', image: '/src/assets/images/user_login.png' });
    }
  };

  const logoutUser = () => {
    setUser(null); // Clear user info when logging out
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};