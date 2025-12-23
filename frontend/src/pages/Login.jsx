import React from 'react';  
import { useAuth } from '../context/AuthContext';

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
  const { login } = useAuth();

  const loginLocal = async () => {
    // SIMULATION: backend response
    login({
      token: 'jwt-token',
      user: { role: 'student' } // admin | scolarite | student
    });
  };

  const loginGoogle = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const loginGithub = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginLocal}>Login with Username</button>
      <button onClick={loginGoogle}>Login with Google</button>
      <button onClick={loginGithub}>Login with GitHub</button>
    </div>
  );
}