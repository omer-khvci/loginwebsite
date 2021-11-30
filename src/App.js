import React from 'react';  
import './App.css';  
import Login1 from "./Login1";  
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
// import { Switch, Route } from "react-router-dom";
// import { Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";
import Dashboard from "./Dashboard";  
import Register from './Register';
function App() {  
  return (  
    <Router>      
      <div className="container">      
        <nav className="navbar navbar-expand-lg navheader">      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto">      
              <li className="nav-item">      
                <Link to={'/Login'} className="nav-link">Login</Link>      
              </li>    
              <li className="nav-item">      
                <Link to={'/Register'} className="nav-link">Register</Link>      
              </li>    
            </ul>      
          </div>      
        </nav> <br />      
        <Routes>        
          <Route path='/Login' element={<Login1 />} />     
          <Route path='/Register' component={<Register />} />    
          <Route path='/Dashboard' component={ <Dashboard />} />  
        </Routes>      
      </div>      
    </Router>     
  );  
}  
  
export default App;
