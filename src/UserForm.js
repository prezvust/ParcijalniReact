import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Unesite korisničko ime GitHub-a"
      />
      <button type="submit">Traži</button>
    </form>
  );
};

UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
