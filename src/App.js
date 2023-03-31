import { Routes, Route } from 'react-router-dom'
import './App.css';
import './style.css';
import Login from './page/admin/Login'
import './css/style.css'
import './css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (      
    <Routes>
        <Route path='/' element={<Login />} />     
    </Routes>
  )
}

export default App;
