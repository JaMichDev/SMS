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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-600 from-50% to gray-100 to-50% space-y-6 ">
      
      <h2 className="font-bold text-3xl ">Student Management System</h2>

      {/* Login local */}
      <form>
              <div className="mb-4">Local Login
                 <label htmlFor='email' className="block text-gray-700">Email</label> 
                 <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Username or Email" className="w-full px-3 py-2 border"/>
              </div> 
              <div className="mb-4">
                  <label htmlFor='password' className="block text-gray-700">Password</label> 
                  <input type="password" placeholder="******" className="w-full px-3 py-2 border"/>
               </div>  
               <div className="mb-4 flex items-center justify-between">
                  <label className="inline-flex items-center">
                     <input type="checkbox" className="form-checkbox"/>
                     <span className="ml-2 text-gray-700">  Remember me</span>  
                  </label>
                  <a href='#' className="text-sm text-blue-600 hover:underline"> Forgot Password?</a> 

               </div>
                <div className="mb-4">
                    <button type="submit" className="w-full bg-teal-600 text-white py-2">Login</button>  
               </div>
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