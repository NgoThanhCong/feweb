import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./style.css";
// import "./css/style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CreateAccount from "./page/admin/CreateAccount";
import QamIdeas from "./page/qam/ViewIdea";
import Cat from "./page/qam/CategoryEditor";
import UserList from "./page/admin/UserList";
import ViewIdea from "./page/admin/ViewIdea";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/NavBar" element={<NavBar />} />  
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/ViewIdea" element={<ViewIdea />} />
      <Route path="/" element={<QamIdeas />} />
      <Route path="/qamIdea" element={<Ideas />} />
      <Route path="/CatEditor" element={<Cat />} />   
    </Routes>
  );
}

export default App;
