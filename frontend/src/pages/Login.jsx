import React from 'react';  
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

/*
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;   
*/

export default function Login() {
  const loginGoogleRedirect = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const loginGithub = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Login local */}
      <form>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="button">Login</button>
      </form>

      <hr />

      {/* Google OAuth with react-oauth/google */}
      <GoogleLogin
        onSuccess={(response) => {
          console.log('Google credential:', response.credential);
          // TODO: send response.credential to backend
        }}
        onError={() => console.log('Google Login Failed')}
      />

      <hr />

      {/* GitHub OAuth (redirect flow) */}
      <button onClick={loginGithub}>Login with GitHub</button>
    </div>
  );
}