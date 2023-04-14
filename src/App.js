import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CreateAccount from "./page/admin/CreateAccount";
import QamIdeas from "./page/qam/ViewIdea";
import Cat from "./page/qam/CategoryEditor";
import UserList from "./page/admin/UserList";
import Login from "./Login";
import NavBar from "./NavBar";
import QacIdeas from "./page/qac/ViewIdea";
import SetDate from "./page/admin/SetDate";
import Dashboard from "./page/qam/Dashboard";
import AdminIdea from "./page/admin/ViewIdea";
import StaffIdea from "./page/staff/ViewIdea";
import AdminHome from "./page/admin/AdminHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/NavBar" element={<NavBar />} />
      <Route path="/SetDate" element={<SetDate />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/AdminIdea" element={<AdminIdea />} />
      <Route path="/AdminHome" element={< AdminHome/>} />
      <Route path="/QamIdeas" element={<QamIdeas />} />
      <Route path="/CatEditor" element={<Cat />} />
      <Route path="/QacIdeas" element={<QacIdeas />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/StaffIdea" element={< StaffIdea/>} />
    </Routes>
  );
}

export default App;
