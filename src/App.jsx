import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-credentials">
          <span>25+ Years Experience</span>
          <span>Orton-Gillingham Certified</span>
          <span>Wilson Reading System Trained</span>
        </div>

        <div className="footer-bottom">
          <span>Jean Chant Tutoring · San Mateo, California</span>
          <span>© 2026</span>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
