import logo from './logo.svg';
import { useState, useEffect, Component } from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import Loginbutton from './components/Loginbutton';
import Landing from './components/Landing';
import Home from './components/Home';
import firebase from './services/firebase';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  
  }, [])

  var x = null;
  if(window.location.pathname === '/login'){
      x=1;
  }

  return (
    <Router>
      <div className="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Devil Coins</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        {x ? <span></span> : user ? <Logout /> : <Loginbutton/>}
                    </li>
                </ul>
            </div>
        </div>
      </nav>
        <Routes>
          <Route exact path='/' element={ user ? <Home user={user}/> : <Landing />}></Route>
          <Route exact path='/login' element={< Login />}></Route> 
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
