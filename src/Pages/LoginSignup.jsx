import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginSignup'>
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Id' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginSignp-login'>Already have an account ? <span>Login Here</span></p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agreeing to the terms of use & privacy policies .</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup