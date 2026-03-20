import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from "../components/counter";
import Toggle from '../components/Toggle';
import UpdateName from '../components/UpdateName';
import UpdateAge from '../components/UpdateAge';
import ProfileUpdate from '../components/ProfileUpdate';

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/updatename" element={<UpdateName />} />
        <Route path="/updateage" element={<UpdateAge />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default AppRoute