import { signInWithGoogle } from '../services/firebase';

import '../App.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
        <div className='signin-container'>
            <Link to='/'>
              <button id="customBtn" className="button-signin" onClick={signInWithGoogle}>
                <span class="icon"></span>
                <span class="buttonText">Google</span>
              </button>
            </Link>
        </div>
  )
}

export default Login;