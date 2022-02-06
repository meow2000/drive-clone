import React, { Component } from "react";
import '../Styles/Login.css';
import AuthService from "../AuthHandler/auth.service";
import { Link } from "react-router-dom";
import Register from './Register'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.RedirectToSignUp = this.RedirectToSignUp.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();
        AuthService
            .login(this.state.username, this.state.password)
            .then((res) => {
                window.location.reload();
            })
        // let navigate = useNavigate();
        // navigate("/");
    }

    RedirectToSignUp() {
        (<Register />)
    }

    render() {
        return (
            <form className="m-form"
                onSubmit={this.handleLogin}
                ref={c => {
                    this.form = c;
                }}>
                <div className="m-form__header">
                    <div className="m-form__header__logo"></div>
                </div>
                <div className="m-form__header__title">Sign in</div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                
                <p className="forgot-password text-right">
                    DON'T HAVE AN ACCOUNT ? <Link to='/sign-up' element={<Register />}>SIGN UP</Link>
                </p>
                
            </form>
        );
    }
}