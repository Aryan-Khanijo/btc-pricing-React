import { signInWithGoogle } from '../services/firebase';

import '../App.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
        <div>
            <Link to='/'><button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button></Link>
        </div>
  )
}

export default Login;