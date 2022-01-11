import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList" 
import AddPlayer from "./components/AddPlayer" 
import ViewPlayer from "./components/ViewPlayer" 

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
            <Route path="/" element={<PlayerList/>}/>
            <Route path="/add-player" element={<AddPlayer/>}/>
            <Route path="/view-player" element={<ViewPlayer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
