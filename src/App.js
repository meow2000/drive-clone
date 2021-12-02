import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FileView from './component/File/FileView';
import SideIcons from './component/sideIcons';
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Header />
        <div className="app__main">
                <Sidebar />
                <FileView />
                <SideIcons />
        </div>
    </div>
  );
}

export default App;
