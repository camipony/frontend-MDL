import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import Register from "../pages/user/Register";
import HomeGeneral from "../pages/HomeGeneral";
import DetailtBook from "../pages/user/detailtBook";
import { ProtectedRoute } from "../pages/user/ProtectedRoute";
import ContactUs from "../pages/books/ContactUs";
import Store from "../pages/Store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomeGeneral />} />
        <Route path="/books" element={<Store />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/books/:codigobook" element={<DetailtBook />} />
        <Route path="/" element={<HomeGeneral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
