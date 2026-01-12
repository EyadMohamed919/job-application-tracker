import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./Components/Login"
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from './AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);


