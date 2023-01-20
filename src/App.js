import React from 'react';
import Curriculum from './Curriculum.js';
import Certificaciones from './pages/Certificaciones.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./styles/app.scss";



export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Curriculum />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
        </Routes>
      </div>
    </Router>
  );
};


