import React, { Component } from 'react';

interface Props {
    
}
interface State {
    
}

const logo: string = require("../assets/images/logo.png");
const googleLogo: string = require("../assets/images/icon-google.svg");

export default class Login extends Component<Props, State> {

    state = {}

    render() {
        return (
            <div className="login">
                <img className="logo-login" src={logo} alt="logo" />
                <div className="col-md-6 col-sm-6 col-xs-12 login-box">
                    <h2>Sign in</h2>
                    <form className="col-12">
                        <input type="text" name="" placeholder="Enter Email" />
                        <button className="btn-next">Next</button>
                        <p className="reset-pw">Forgot Password?</p>
                        <hr />
                        <p className="bt-sign-in">Sign in using</p> 
                        <button className="btn-google">
                            <span><img src={googleLogo} alt="Google"/></span>
                            <p className="google-text">Google</p>
                        </button>
                    </form>
                    <div className="register-text">
                        Don't have account yet? <span className="sign-up-text">Sign Up Now</span>
                    </div>
                </div>
            </div>
        )
    }
}
