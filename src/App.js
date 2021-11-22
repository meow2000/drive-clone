import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar'
function App() {
  return (
    <div className="App">
      <Header />
        <div className="app__main">
                <Sidebar />
                
        </div>
    </div>
  );
}

export default App;
