import React, { useState } from 'react';
import User from './component/user';
import Authorisation from './component/Authorisation';

const Authorised = Authorisation(User);

function App() {
  const [user, setUser] = useState({ name: 'deepak' }); // Initial user state
  const [isAuth, setIsAuth] = useState(true); // Simulate authorization state

  const ref = () => {
    const names = ['deepak', 'sharan', 'tamil', 'sabeel'];
    const i = Math.floor(Math.random() * names.length);
    setUser({ name: names[i] }); // Update the user state
  };

  return (
    <div>
      <Authorised isAuth={isAuth} user={user} />
      <button onClick={ref}>Change User</button>
    </div>
  );
}

export default App;
