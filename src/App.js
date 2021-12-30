import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';

import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FileView from './component/file/FileView';
// import SideIcons from './component/sideIcons';
import UserService from "./component/authHandler/user.service";
import Menu from './component/App/Menu';
import Login from './component/accessControl/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./component/authHandler/auth.service";
import Register from "./component/accessControl/Register";

// import { Container } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: undefined,
      currentUser: undefined,
      isLogin: false
    };
  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();
    var fileList = [];
    fileList = await UserService.getListFile();
    if (user) {
      this.setState({
        fileList: fileList,
        currentUser: user
      });
    }
    // console.log(fileList);
  }
  render() {
    const { currentUser, fileList } = this.state;
    return (
      <div className="App">
        {
          currentUser ? (
            <>
              {/* <Menu /> */}
              <Header />
              <div className="app__main">
                <Sidebar />
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
