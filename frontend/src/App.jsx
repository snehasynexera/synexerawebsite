// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//     </Router>
//   );
// }


// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./pages/Footer";
// (Add About, Services, Contact if you have them)

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <Routes>
          {/* ✅ Default redirect from "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* ✅ Home route */}
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />

          {/* Add more routes here */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* ✅ Fallback for unmatched routes */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
