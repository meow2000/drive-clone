import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

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

// import { Container } from "react-bootstrap";
class App extends Component {

  // const [user, setUser] = useState({

  // })

  // if(!user) {
  //   setUser(AuthService.getCurrentUser());
  //   debugger
  // }


  constructor(props) {
    super(props);

    this.state = {
      fileList: undefined,
      currentUser: undefined
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
              <Menu />
              <Header />
              <div className="app__main">
                <Sidebar />
                <FileView fileList={fileList}/>
                {/* <SideIcons /> */}
              </div>
            </>
          ) : (
            <>
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Login />
                </div>
              </div>
            </>
          )
        }
        <div className="container mt-3">
          <Routes>
            <Route exact path={"/"} component={App} />
            <Route exact path="/login" component={Login} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
