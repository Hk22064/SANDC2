// App.jsx

import React from 'react';
import PasswordForm from './components/PasswordForm'; // 作成したパスワードフォームコンポーネント
import PasswordGeneratorComponent from './components/PasswordGeneratorComponent';

const App = () => {
  return (
    <div>
      <header>Password Manager App</header>
      <PasswordForm /> {/* 作成したパスワードフォームを呼び出す */}
      <PasswordGeneratorComponent/>
    </div>
  );
};

export default App;
