
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ScolarityDashboard from './pages/ScolarityDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard';
import StudentCourse from './pages/StudentCourse';
import Unauthorized from './pages/Unauthorized';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

/*
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/login'/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
*/


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute roles={['admin']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scolarity-dashboard"
            element={
              <ProtectedRoute roles={['scolarite']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
 
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute roles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-course"
            element={
              <ProtectedRoute roles={['student']}>
                <StudentCourse />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App










