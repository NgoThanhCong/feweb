import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import Login from "./page/admin/Login";
import "./css/style.css";
import "./css/style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAccount from "./page/admin/CreateAccount";
import QamIdeas from "./page/qam/ViewIdea";
import Cat from "./page/qam/CategoryEditor";
import UserList from "./page/admin/UserList";
import ViewIdea from "./page/admin/ViewIdea";
import QacIdeas from "./page/qac/ViewIdea";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/ViewIdea" element={<ViewIdea />} />
      <Route path="/" element={<QamIdeas />} />
      <Route path="/CatEditor" element={<Cat />} />   
    </Routes>
  );
}

export default App;
