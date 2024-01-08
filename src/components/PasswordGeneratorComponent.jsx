import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Row, Col } from 'antd';

const PasswordGeneratorComponent = () => {
  const [passwordLength, setPasswordLength] = useState(8); // Default password length
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    axios
      .post('/.netlify/functions/makePassword', { length: passwordLength })
      .then((response) => {
        const password = response.data.password;
        setGeneratedPassword(password);
        console.log('Generated Password:', password);
      })
      .catch((error) => {
        console.error('Error generating password:', error);
      });
  };

  return (
    <Row gutter={[0, 0]}> {/* Adjust gutter for spacing */}
      <Col span={7}>
        <label>Password Length:</label>
      </Col>
      <Col span={8}>
        <Input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </Col>
      <Col span={8}>
        <Button onClick={handleGeneratePassword}>Generate Password</Button>
      </Col>
      <Col span={24}>
        <p>{generatedPassword}</p>
      </Col>
    </Row>
  );
};

export default PasswordGeneratorComponent;
