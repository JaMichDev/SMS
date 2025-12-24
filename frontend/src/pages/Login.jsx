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
    window.location.href = 'http://localhost:5173/auth/google';
  };

  const loginGithub = () => {
    window.location.href = 'http://localhost:5173/auth/github';
  };

  const[email, setEmailState] = React.useState(''); //La fonction setEmailState pour mettre à jour la valeur de la variable  email 
  const[password, setPasswordState] = React.useState(''); //La fonction setPasswordState pour mettre à jour la valeur de la variable  password
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();  
    //Call the API to login the user with email and password  

    try {
      // Implement local login logic here, e.g., send email and password to backend

      //utilisation de axios pour envoyer une requête POST au backend
      //const response = await axios.post('http://localhost:5000/login',{ email, password });

      //Utilisation de fetch pour envoyer une requête POST au backend 
      const response = await fetch('http://localhost:3000/api/auth/login', {
           method: 'POST',
           headers: {
                     'Content-Type': 'application/json',
                    },
           body: JSON.stringify({ email, password }),
       });

               
      console.log('Local login with:', { email, password });
    } catch (error) {
      console.error('Login error:', error);
    }    
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-600 from-50% to gray-100 to-50% space-y-6 ">
      
      <h2 className="font-bold text-3xl ">Student Management System</h2>

      {/* Login local */}
      <form onSubmit={handleSubmit}>
              <div className="mb-4">Local Login
                 <label htmlFor='email' className="block text-gray-700">Email</label> 
                 <input onChange={(e)=>setEmailState(e.target.value)} type="email" placeholder="Username or Email" className="w-full px-3 py-2 border"/>
              </div> 
              <div className="mb-4">
                  <label htmlFor='password' className="block text-gray-700">Password</label> 
                  <input onChange={(e)=>setPasswordState(e.target.value)} type="password" placeholder="******" className="w-full px-3 py-2 border"/>

                  
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