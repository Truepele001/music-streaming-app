import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import NowPlaying from './pages/NowPlaying';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/now-playing" element={<NowPlaying />} />
      </Routes>
    </>
  );
}

export default App;
