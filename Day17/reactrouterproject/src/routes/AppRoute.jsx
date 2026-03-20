import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import AppLayout from '../layout/AppLayout'
import Home from '../components/Home'
import Projects from '../components/Projects'

const AppRoute = () => {
  return (
    <>
      <Routes>

        <Route element={<AppLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects />} />

        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default AppRoute