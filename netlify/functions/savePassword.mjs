// functions/savePassword.js

let savedPassword = ''; // パスワードを保存する変数

exports.handler = async (event) => {
  try {
    const { password } = JSON.parse(event.body);
    savedPassword = password; // パスワードを保存

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Password saved successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving password' }),
    };
  }
};

exports.getSavedPassword = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ savedPassword }), // 保存されたパスワードを返す
  };
};
