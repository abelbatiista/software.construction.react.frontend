import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAuth = (auth) => {
    if (!auth) {
      clearAuth();
      return;
    }

    setUser(auth);
    localStorage.setItem('auth', JSON.stringify(auth));
  };

  const getAuth = () => {
    if (user) return user;

    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setUser(JSON.parse(storedAuth));
    }
  };

  const clearAuth = () => {
    setUser(null);
    localStorage.clear();
  };

  const auth = getAuth();

  return (
    <UserContext.Provider value={{ auth, setAuth, clearAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
