import React, { Component } from 'react';
import { connect } from "react-redux";
import Button from '../share/Button';
import { bindActionCreators } from "redux";
import { FormInput, AppActions } from '../../types/forms';
import { AppState } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { updateEmail, updatePassword } from '../../actions/login'

interface LoginProps {
    email?: string
}

interface LoginState {
    nextClicked?: boolean
}

type Props = LoginProps & LinkDispatchProps & LinkStateProps;

const logo: string = require("../../assets/images/logo.png");
const googleLogo: string = require("../../assets/images/icon-google.svg");

export class Login extends Component<Props, LoginState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            nextClicked: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleGoogle = this.handleGoogle.bind(this);
    }

    handleEmailChange(e: any) {
        const { updateEmail} = this.props;
        updateEmail(e.target.value);
    }

    handlePWChange(e: any) {
        const { updatePassword } = this.props;
        updatePassword(e.target.value);
    }

    handleNext(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        this.setState({
            nextClicked: true
        })
    }

    handleChangeClick() {
        const { updatePassword } = this.props;
        this.setState({
            nextClicked: false
        })
        updatePassword("")
    }

    handleSignIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const { email, password } = this.props;
    }

    handleGoogle(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
    }

    render() {
        const { email, password } = this.props;
        const { nextClicked } = this.state;
        return (
            <div className="login">
                <div className="col-md-6 col-sm-6 col-xs-12 login-box">
                    <img className="logo-login" src={logo} alt="logo" />
                    <h2>Sign in</h2>
                    <form className="col-12">
                        <input type="text" name="" placeholder="Enter Email" value={email} onChange={this.handleEmailChange} disabled={nextClicked} />
                        {nextClicked && <div onClick={this.handleChangeClick}>Change</div>}
                        { 
                            !nextClicked ?
                            <Button className="btn-next" onClick={this.handleNext}>Next</Button>
                            :
                            <input type="text" name="" placeholder="Enter Password" value={password} onChange={this.handlePWChange}/>
                        }
                        <p className={!nextClicked ? "reset-pw" : "step-2-reset-pw"}>Forgot Password?</p>
                        {
                            !nextClicked ?
                            <div>
                                <hr />
                                <p className="bt-sign-in">Sign in using</p> 
                                <Button className="btn-google" onClick={this.handleGoogle}>
                                    <span><img src={googleLogo} alt="Google"/></span>
                                    <p className="google-text">Google</p>
                                </Button>
                            </div>
                            :
                            <Button className="btn-next" onClick={this.handleSignIn}>SIGN IN</Button>
                        }
                    </form>
                    {
                        !nextClicked &&
                        <div className="register-text">
                            Don't have account yet? <span className="sign-up-text">Sign Up Now</span>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

interface LinkStateProps {
    email: string;
    password: string
}

interface LinkDispatchProps {
    updateEmail: (email: FormInput) => void;
    updatePassword: (password: any) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: LoginProps
  ): LinkStateProps => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: LoginProps
  ): LinkDispatchProps => ({
    updateEmail: bindActionCreators(updateEmail, dispatch),
    updatePassword: bindActionCreators(updatePassword, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
