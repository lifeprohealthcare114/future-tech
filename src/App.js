import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"; 
import Homepage from "./component/Homepage"; 
import CapabilitiesPage from "./component/CapabilitiesPage"; 
import Solutions from "./component/Solutions"; 
import SharkFinAntenna from "./component/SharkFinAntenna"; 
import IndustriesServed from "./component/IndustriesServed"; 
import MediaDownloadsPage from "./component/MediaDownloadsPage"; 
import ProjectsCaseStudiesPage from "./component/ProjectsCaseStudiesPage"; 
import AboutUsPage from "./component/AboutUsPage"; 
import ContactUsPage from "./component/ContactUsPage"; 
import Footer from "./Footer"; 
import ScrollToTop from './ScrollToTop';
import './styles/theme.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop ensures page starts from top on route change */}
      <ScrollToTop />
      
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:id" element={<Solutions />} /> 
        <Route path="/shark-fin-antenna" element={<SharkFinAntenna />} /> 
        <Route path="/industriesserved" element={<IndustriesServed />} />
        <Route path="/media" element={<MediaDownloadsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/projects" element={<ProjectsCaseStudiesPage />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
