import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='form-container'>
            <h1>Please Register Now</h1>
            <form className='form'>
                <input className='input-box' type="text" placeholder='Your Name'/>
                <br />
                <input className='input-box' type="email"  placeholder='Your Email'/>
                <br />
                <input className='input-box' type="password" placeholder='Password'/>
                <br />
                <input className='form-btn' type="submit" value="Register" />
            </form>
            <hr />
            <div className='web-login'>
                <button className='google btn'>Google</button>
                <button className='facebook btn'>Facebook</button>
                <button className='github btn'>Github</button>
            </div>
        </div>
    );
};

export default Register;