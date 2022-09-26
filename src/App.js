import React from "react";
import { Main } from "./Main";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Subscribe from "./components/Subscribe";
import Home from "./components/Home";
import { ViewReport } from "./home/ViewReport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resubscribe from "./components/Resubscribe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ViewReport/:id" element={<ViewReport />} />
        <Route path="/resubscribe" element={<Resubscribe />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
