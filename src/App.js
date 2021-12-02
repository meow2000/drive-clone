import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FileView from './component/File/FileView';
import SideIcons from './component/sideIcons';
import {useState} from 'react';
// import { Container } from "react-bootstrap";
function App() {

  const [user, setUser] = useState({
    
  })

  const handleLogin = () => {
    // if (!user) {
    //   auth.signInWithPopup(provider).then((result) => {
    //     setUser(result.user)
    //     console.log(result.user)
    //   }).catch((error) => {
    //     alert(error.message);
    //   });
    // } else if (user) {
    //   auth.signOut().then(() => {
    //     setUser(null)
    //   }).catch((err) => alert(err.message))
    // }
  }

  return (
    <div className="App">
      {
        true ? (
          <>
            <Header />
              <div className="app__main">
                      <Sidebar />
                      <FileView />
                      <SideIcons />
              </div>
          </>
        ) : (
            <div className='app__login'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
