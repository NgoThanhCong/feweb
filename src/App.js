import { Routes, Route } from 'react-router-dom'
import './App.css';
import './style.css';
import Login from './page/admin/Login'
import './css/style.css'
import './css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './page/admin/CreateAccount';

function App() {
  return (      
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />        
        <Route path='/CreateAccount' element={<CreateAccount />} />        
    </Routes>
  )
}

export default App;
