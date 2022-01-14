import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FileView from './component/file/FileView';
// import SideIcons from './component/sideIcons';
import UserService from "./component/authHandler/user.service";
import Login from './component/accessControl/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./component/authHandler/auth.service";
import Register from "./component/accessControl/Register";
import { ToastContainer } from "react-toastify";

// import { Container } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: null,
      currentUser: null,
      isLogin: false
    };
    this.FileHandler = this.FileHandler.bind(this)
  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();
    var fileList = [];
    fileList = await UserService.getListFile();
    if (user) {
      UserService.getUserInfo();
      this.setState({
        fileList: fileList,
        currentUser: user
      });
    }
  }

  FileHandler(file) {
    UserService.getUserInfo();
    this.setState({
      fileList: file
    });
  }

  render() {
    const { currentUser, fileList } = this.state;
    return (
      <div className="App">
        {
          currentUser ? (
            <>
              <Header />
              <div className="app__main">
                <ToastContainer />
                <Sidebar FileHandler={this.FileHandler}/>
                <FileView fileList={fileList} FileHandler={this.FileHandler} />
                {/* <SideIcons /> */}
                {/* <ContextMenuComponent target="#fileItem" items={this.menuItems} /> */}
              </div>
            </>
          ) : (
            <>
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Routes>
                    {/* <Route path="/" element={<App />} /> */}
                    <Route index element={<Login />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                  </Routes>
                </div>
              </div>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
