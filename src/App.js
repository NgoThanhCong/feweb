import { Routes, Route } from 'react-router-dom'
import './App.css';
import './style.css';
import Login from './page/admin/Login'
import './css/style.css'
import './css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ideas from './page/qam/ViewIdeas';
import Cat from './page/qam/CategoryEditor';

function App() {
  return (      
    <Routes>
        <Route path='/Login' element={<Login />} /> 
        <Route path='/' element={<Ideas />} /> 
        <Route path='/CatEditor' element={<Cat />} />
    </Routes>
  )
}

export default App;
