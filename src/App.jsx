// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import useIntroAnimations from "./hooks/useIntroAnimations";
import useViewAnimations from "./hooks/useViewAnimations";
import useMobileMenu from "./hooks/useMobileMenu";
import useScrollSpy from "./hooks/useScrollSpy";
import useSmoothScroll from "./hooks/useSmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useIntroAnimations();
  useViewAnimations();
  useMobileMenu();
  useScrollSpy();
  useSmoothScroll();

  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
