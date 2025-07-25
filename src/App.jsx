import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Donation from "./pages/Donation";
import GuideMac from "./pages/guideMac";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/donation" element={<Donation />} />
        <Route exact path="/guideMac" element={<GuideMac />} />
        <Route exact path="/quran" element={<NotFound />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
