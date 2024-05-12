import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main"
import GalleryPage from './pages/GalleryPage';
import QrPage from './pages/QrPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
