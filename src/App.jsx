import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Donation from "./pages/Donation";
import GuideMac from "./pages/guideMac";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/guideMac" element={<GuideMac />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
