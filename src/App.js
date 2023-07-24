import React, { useState } from 'react';
import UserForm from './UserForm';
import UserDetails from './UserDetails';

const App = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleUserSubmit = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.error('Greška prilikom dohvaćanja korisnika:', error);
        setUser(null);
      });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => {
        console.error('Greška prilikom dohvaćanja repozitorija:', error);
        setRepositories([]);
      });
  };

  const handleReset = () => {
    setUser(null);
    setRepositories([]);
  };

  return (
    <div>
      {user ? (
        <UserDetails user={user} repositories={repositories} onReset={handleReset} />
      ) : (
        <UserForm onUserSubmit={handleUserSubmit} />
      )}
    </div>
  );
};

export default App;
