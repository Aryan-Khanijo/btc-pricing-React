import React from 'react';

import { auth } from '../services/firebase';
import '../App.css';

const logout = () =>{
    return ( 
        <a class="nav-link" href="/" onClick={() => auth.signOut()} role="button" aria-expanded="false"> Logout </a>
      )
    }
    
export default logout;