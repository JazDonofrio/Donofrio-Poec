import Home from 'renderer/componentes/Home';
import Profile from 'renderer/componentes/Profile';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menus from "./componentes/Menus";

export default function App() {
  return (
    <div className='App'>
      <Menus />
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<Home titulo='Holaaa bienvenidos al Home' />} />
        </Routes>
      </Router>
    </div>
  );
}
