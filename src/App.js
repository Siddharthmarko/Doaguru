import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from "./components/Sidebar"
import Login from "./components/Login"
import Loder from "./components/Loder"
// import pages 
import Dashbaord from "./pages/Dashbaord"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import styled from 'styled-components'

const App = () => {
  let [auth,SetAuth] = useState(false)

    if (auth) {
      return <Login SetAuth={SetAuth}/>
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto p-0">
            <Sidebar/>
        </div>
        <div className="col p-4">
          <Routes>
            <Route path='/' element={<Dashbaord/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App


