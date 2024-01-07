// PasswordForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState('');

  const handleSavePassword = () => {
    axios.post('/.netlify/functions/savePassword', { password })
      .then(response => {
        console.log(response.data.message);
        // パスワード保存の成功処理
      })
      .catch(error => {
        console.error('Error saving password:', error);
        // パスワード保存の失敗処理
      });
  };

  const showSavedPassword = () => {
    axios.get('/.netlify/functions/getSavedPassword')
      .then(savedPasswordResponse => {
        console.log(savedPasswordResponse.data.savedPassword);
        setSavedPassword(savedPasswordResponse.data.savedPassword);
      })
      .catch(error => {
        console.error('Error fetching saved password:', error);
      });
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSavePassword}>Save Password</button>
      <button onClick={showSavedPassword}>Show Saved Password</button>
      <p>{savedPassword}</p>
    </div>
  );
};

export default PasswordForm;
