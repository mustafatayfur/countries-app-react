import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Chart from "./pages/chart/Chart";
import Home from "./pages/home/Home";
import Countries from "./pages/countries/Countries";
import SameLanguages from "./pages/sameLanguages/SameLanguages";
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chart" element={<Chart/>} />
            <Route path="/chart" element={<Chart/>} />
            <Route path="/countries" element={<Countries/>} />
            <Route path="/samelanguages" element={<SameLanguages/>} />
        </Routes>
    </Router>
  );
}

export default App;
