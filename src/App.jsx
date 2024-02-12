import "./App.scss";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
// import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import Navbar from "./components/navBar/Navbar";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App_main-page-container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
