import React, { useContext } from 'react';

// Context
import UserContext from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser({ id: 1234, name: 'Tona' })}>
        Modify User
      </button>
    </div>
  )
};

export default LoginScreen;
