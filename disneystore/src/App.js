import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className={styles.App} id="root">
        <div className={styles.content}>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
            {/* Fügen Sie eine Standardroute hinzu */}
            <Route path="/" element={<Navigate to="/navbar" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
