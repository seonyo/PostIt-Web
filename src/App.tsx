import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main"
import GalleryPage from './pages/GalleryPage';
import QrPage from './pages/QrPage';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/search/result" element={< SearchResultPage />} />
      </Routes>
    </Router>
  )
}

export default App
