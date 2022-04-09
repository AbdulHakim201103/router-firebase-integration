import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'


const Login = () => {

    const {singInWithGoogle} = useFirebase ()

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
                <button onClick={singInWithGoogle} className='google btn'>Google</button>
                <br />
                <button className='facebook btn'>Facebook</button>
                <br />
                <button className='github btn'>Github</button>
            </div>
        </div>
    );
};

export default Login;