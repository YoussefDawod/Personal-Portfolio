import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Documents from './pages/documents';
import About from './pages/about';
import ParticlesComponent from './components/particles';
import './main.css';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ParticlesComponent />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;