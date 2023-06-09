import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
