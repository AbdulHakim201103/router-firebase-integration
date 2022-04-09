import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'
const auth = getAuth(app)


const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle (auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then (() => {
            navigate(from, { replace : true })
        })
    }
    return (
        <div className='form-container'>
            <h1>Please Login </h1>
            <form className='form'>
                <input className='input-box'type="email"  placeholder='Your Email'/>
                <br />
                <input className='input-box' type="password" placeholder='Password'/>
                <br />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            <hr />
            <div className='web-login'>
                <button onClick={handleGoogleSignIn} className='google btn'>Google</button>
                <br />
                <button className='facebook btn'>Facebook</button>
                <br />
                <button className='github btn'>Github</button>
            </div>
        </div>
    );
};

export default Login;