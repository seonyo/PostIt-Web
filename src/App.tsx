import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main"
import QrPage from './pages/QrPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </Router>
  )
}

export default App
