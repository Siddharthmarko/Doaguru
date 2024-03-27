import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Basic from './pages/basic';
import Other from './pages/other';
import Sidebar from './pages/sidebar';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Sidebar}>
        <Route
          path="basic"
          Component={Basic}
        />
        <Route
          path="other"
          Component={Other}
        />
      </Route>
    </Routes>
  );
}

export default App