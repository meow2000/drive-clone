import React, { Component } from "react";
import '../CSS/Login.css'
import AuthService from "../authHandler/auth.service";

export default class Login extends Component {
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password
        )
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
                <div className="m-form__header__title">Đăng nhập</div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>

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

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}