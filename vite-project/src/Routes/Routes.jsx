import React from 'react'
import {Router,Route} from 'react-router-dom' 
import Login from '../src/Components/Login.jsx'
import Home from '../Home/Home.jsx'
import Admin from '../srrc/Admin/Admin.jsx'


function Routes() {
  return (
    <div>
        <Router>
                <Route path="/" element={<Login />} />
                <Route path = "/Home" element={< Home />} />
                <Route path = "/Admin" element={< Admin />} />
        </Router>
        
        
        
        </div>
  )
}

export default Routes