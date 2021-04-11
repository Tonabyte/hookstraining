import React, { useState } from 'react';

// Router
import AppRouter from './AppRouter';

// Context
import UserContext from './UserContext';


const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
