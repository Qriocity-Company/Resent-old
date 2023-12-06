import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <Router>
      <div className="w-[100vw] sm:w-auto flex justify-center items-center flex-col">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/caseStudy/:caseStudyType" element={<CaseStudies/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
