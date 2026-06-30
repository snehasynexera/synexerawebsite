import { useEffect } from "react";
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
import CloudOptimization from "./pages/Services/CloudOptimization";
import Webdev from "./pages/Services/Webdev";
import MobileDev from "./pages/Services/MobileDev";
import ContentWriting from "./pages/Services/ContentWriting";
import DataEntry from "./pages/Services/DataEntry";
import WorkAutomation from "./pages/Services/WorkAutomation";
import DevOps from "./pages/Services/DevOps";
import AiMl from "./pages/Services/AiMl";
function AppContent() {
  const location = useLocation();
  const isFullReviewRoute = location.pathname === "/fullReview";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Route path="/Services/CloudOptimization" element={<CloudOptimization />} />
          <Route path="/Services/Webdev" element={<Webdev />} />
          <Route path="/Services/MobileDev" element={<MobileDev />} />
          <Route path="/Services/ContentWriting" element={<ContentWriting />} />
          <Route path="/Services/DataEntry" element={<DataEntry />} />
          <Route path="/Services/WorkAutomation" element={<WorkAutomation />} />
          <Route path="/Services/DevOps" element={<DevOps />} />
          <Route path="/Services/AiMl" element={<AiMl />} />
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
