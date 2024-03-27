import React, {useState} from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from './pages/sidebar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import './App.css';

const App = () => {
  let [auth,SetAuth] = useState(true)

  let aut = ()=>{
    SetAuth(false)
  }

  if (auth) {
    return <Login aut={aut}/>
  } 
  return (
    <Routes>
      <Route path="/" Component={Sidebar}>
        <Route index
          path="career"
          Component={Dashboard}
        />
        <Route
          path="contact"
          Component={Dashboard}
        />
      </Route>
    </Routes>
  );
}

export default App;