
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/admin-dashboard'/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/admin-dashboard" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
