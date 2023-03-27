
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './style.css';
import Login from './page/admin/Login'

function App() {
  return (
    <BrowserRouter>
          
                <Routes>
                    <Route path='/' element={<Login />} />                    
                </Routes>
          
        </BrowserRouter>
  
  )
}

export default App;
