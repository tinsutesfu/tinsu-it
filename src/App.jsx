import React from "react";
import Navebar from "./component/Navebar";
import Sidebar from "./component/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/admin.css";
import { Admin } from "./pages/Admin";

const App = () => {
  const url = "https://front-it-solution.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navebar />
      <hr />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Admin />}>
            <Route index element={<h1 className="admin">ADMIN DASHBOARD</h1>} />
            <Route path="add" element={<Add url={url} />} />
            <Route path="list" element={<List url={url} />} />
            <Route path="orders" element={<Orders url={url} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
