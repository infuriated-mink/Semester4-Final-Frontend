import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
//  import AmplifyConfig from '../config/AmplifyConfig.js'; For the singleton configuration.

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
if (!username || !password) {
    setError('Username and password are required.');
    return;
}

    try {
      await Auth.signIn(username, password);
      history.push('/landing');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;