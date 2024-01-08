import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';

const PasswordGeneratorComponent = () => {
  const [passwordLength, setPasswordLength] = useState(8); // デフォルトのパスワード長さ
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    axios.post('/.netlify/functions/makePassword', { length: passwordLength })
      .then(response => {
        const password = response.data.password;
        setGeneratedPassword(password);
        // 生成されたパスワードを利用する処理をここに記述
        console.log('Generated Password:', password);
      })
      .catch(error => {
        console.error('Error generating password:', error);
      });
  };

  return (
    <div>
      <label>Password Length:</label>
      <Input.Number
        value={passwordLength}
        onChange={(value) => setPasswordLength(value)}
      />
      <Button onClick={handleGeneratePassword}>Generate Password</Button>
      <p>{generatedPassword}</p>
    </div>
  );
};

export default PasswordGeneratorComponent;
