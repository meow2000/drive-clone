import React, { Component } from 'react';
import { Link } from "react-router-dom";

import AuthService from "../authHandler/auth.service";
import Login from './Login';
import '../CSS/Login.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();
        AuthService
            .register(
                this.state.username,
                this.state.email,
                this.state.password)
            .then((response) => {
                this.setState({
                    // message: response.data.message,
                    successful: true
                });
                alert("success");
                // <App />
                window.location.reload();
            })
        // let navigate = useNavigate();
        // navigate("/");
    }

    render() {
        return (
            <form className="m-form"
                onSubmit={this.handleRegister}
                ref={c => {
                    this.form = c;
                }}>
                <div className="m-form__header">
                    <div className="m-form__header__logo"></div>
                </div>
                <div className="m-form__header__title">Sign up</div>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block m-signup-btn">Sign Up</button>
                <p className="forgot-password text-right">
                    ALREADY REGISTERED <Link to='/sign-in' element={<Login />}>SIGN IN?</Link>
                </p>
            </form>
        );
    }
}

export default Register;
