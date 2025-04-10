import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Datasets from './pages/Datasets';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/datasets" element={<Datasets />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
