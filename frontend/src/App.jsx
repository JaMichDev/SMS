
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Login from './pages/Login.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import ScolarityDashboard from './pages/Scolarity/ScolarityDashboard.jsx';
import StudentDashboard from './pages/Student/StudentDashboard.jsx';
import StudentCourse from './pages/Student/StudentCourse.jsx';

import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
         

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Scolarity */}
          <Route
            path="/scolarite"
            element={
              <ProtectedRoute roles={['admin', 'scolarite']}>
                <ScolarityDashboard />
              </ProtectedRoute>
            }
          />

          {/* Student */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute roles={['admin', 'scolarite', 'student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/course"
            element={
              <ProtectedRoute roles={['student']}>
                <StudentCourse />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}