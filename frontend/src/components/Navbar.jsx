import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav>
      {user.role === 'admin' && (
        <>
          <a href="/dashboard">Admin Dashboard</a>
          <a href="/users">Users</a>
          <a href="/reports">Reports</a>
        </>
      )}

      {user.role === 'scolarite' && (
        <>
          <a href="/dashboard">Scolarite Dashboard</a>
          <a href="/students">Students</a>
        </>
      )}

      {user.role === 'student' && (
        <>
          <a href="/student-dashboard">Student Dashboard</a>
          <a href="/student-course">Student Course</a>
        </>
      )}

      <button onClick={logout}>Logout</button>
    </nav>
  );
}