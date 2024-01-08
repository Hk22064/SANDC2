// PasswordGeneratorComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PasswordGeneratorComponent = () => {
  const [passwordLength, setPasswordLength] = useState(8); // デフォルトのパスワード長さ

  const handleGeneratePassword = () => {
    axios.post('/.netlify/functions/makePassword', { length: passwordLength })
      .then(response => {
        const generatedPassword = response.data.password;
        // 生成されたパスワードを利用する処理をここに記述
        console.log('Generated Password:', generatedPassword);
      })
      .catch(error => {
        console.error('Error generating password:', error);
      });
  };

  return (
    <div>
      <label>Password Length:</label>
      <input
        type="number"
        value={passwordLength}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
      />
      <button onClick={handleGeneratePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGeneratorComponent;
