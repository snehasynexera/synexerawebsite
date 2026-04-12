import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import FullReview from "./pages/FullReview";

function AppContent() {
  const location = useLocation();
  const isFullReviewRoute = location.pathname === "/fullReview";

  return (
    <>
      {!isFullReviewRoute && <Navbar />}

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/fullReview" element={<FullReview />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
