import Home from 'renderer/componentes/Home';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home titulo="Holaaa este es el Home" />} />
      </Routes>
    </Router>
  );
}
