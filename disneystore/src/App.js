import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className={styles.App} id="root">
        <div className={styles.content}>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/navbar" />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
