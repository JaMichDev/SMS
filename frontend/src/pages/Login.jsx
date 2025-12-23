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
  const loginGoogle = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const loginGithub = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div>
      <h2>Login</h2>

      <form>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>

      <hr />

      <button onClick={loginGoogle}>Login with Google</button>
      <button onClick={loginGithub}>Login with GitHub</button>
    </div>
  );
}


export default function LoginWithGoogle() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(response) => {
          console.log(response.credential);
          // send credential to backend
        }}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
}