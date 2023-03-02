import './App.css';
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import AboutManabaViewer from "./compornent/AboutManabaViewer";
import AboutMySkills from "./compornent/AboutMySkills";
import Home from './compornent/Home';

function App() {
  return (
    <div className="App">
      <div>
      </div>
      <BrowserRouter>
      <h1>ポートフォリオ</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutManabaViewer" element={<AboutManabaViewer />}/>
          <Route path="/aboutMySkills" element={<AboutMySkills />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
