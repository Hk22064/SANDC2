import React, { useState } from 'react';
import axios from 'axios';

const PasswordComponent = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSavePassword = () => {
    axios.post('/.netlify/functions/savePassword', { password: newPassword })
      .then(response => {
        // パスワード保存後、保存されたパスワードを取得して表示する
        axios.get('/.netlify/functions/getSavedPassword')
          .then(savedPasswordResponse => {
            setPassword(savedPasswordResponse.data.savedPassword);
          })
          .catch(error => {
            console.error('Error fetching saved password:', error);
          });
      })
      .catch(error => {
        console.error('Error saving password:', error);
      });
  };

  const handleInputChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <div>
      <h2>Saved Password:</h2>
      <p>{password}</p>

      <h2>Save Password:</h2>
      <input
        type="text"
        placeholder="Enter new password"
        value={newPassword}
        onChange={handleInputChange}
      />
      <button onClick={handleSavePassword}>
        Save Password
      </button>
    </div>
  );
};

export default PasswordComponent;
