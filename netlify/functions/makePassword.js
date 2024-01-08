// functions/makePassword.js

exports.handler = async (event) => {
    try {
      const { length } = JSON.parse(event.body); // クライアントからのリクエストで文字数を受け取る
      const password = generateRandomPassword(length); // 指定された文字数のランダムなパスワードを生成
  
      return {
        statusCode: 200,
        body: JSON.stringify({ password }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error generating password' }),
      };
    }
  };
  
  // 指定された文字数のランダムなパスワードを生成する関数
  function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?-=[];,./';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  