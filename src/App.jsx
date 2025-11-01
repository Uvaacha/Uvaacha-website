import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Telecom from "./pages/Telecom";
import Banking from "./pages/Banking";
import Healthcare from "./pages/Healthcare";
import Manufacturing from "./pages/Manufacturing";
import EducationTrust from "./pages/EducationTrust";
import ImportExport from "./pages/ImportExport";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import "./App.css";
import "./index.css";

/* =====================================================
   ✅ ScrollToTop — instantly resets scroll to top
   ===================================================== */
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instantly jump to top (no smooth scroll)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // ensures no scroll animation
    });

    // Extra safety for all browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

/* =====================================================
   ✅ Layout — handles header and page routing
   ===================================================== */
function Layout() {
  const location = useLocation();

  const overlayPages = [
    "/",
    "/telecom",
    "/healthcare",
    "/manufacturing",
    "/education",
  ];

  const isOverlayPage = overlayPages.includes(location.pathname);

  return (
    <>
      <Header />
      <main
        style={{
          marginTop: isOverlayPage ? "0" : "70px",
          paddingTop: "0",
          overflowX: "hidden",
          position: "relative",
          zIndex: 2,
          background: "none",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/education" element={<EducationTrust />} />
          <Route path="/imports" element={<ImportExport />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
}

/* =====================================================
   ✅ Root App Wrapper
   ===================================================== */
function App() {
  return (
    <div
      className="AppWrapper"
      style={{
        overflowX: "hidden",
        width: "100%",
        position: "relative",
        backgroundColor: "#f6f8f9",
      }}
    >
      <Router>
        {/* ensures all pages open already at top (no visible scroll) */}
        <ScrollToTop />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
