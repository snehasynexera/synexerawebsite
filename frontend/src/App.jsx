import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <Routes>

          {/* Show Home on both URLS */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/footer" element={<Footer />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
