
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ToolPage from './Components/ToolPage';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/getting-started" element={<ToolPage />} />
          <Route path="/git-repository" element={<ToolPage />} />
          <Route path="/code-sandbox" element={<ToolPage />} />
          <Route path="/contributing" element={<ToolPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





