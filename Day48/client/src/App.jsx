import React from 'react'
import {Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App