import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Basic from './compo/basic';
import Other from './compo/other';
import Sidebar from './compo/sidebar';
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