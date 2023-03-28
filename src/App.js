
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './style.css';
import Login from './page/admin/Login'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />                    
    </Routes>
  )
}

export default App;
