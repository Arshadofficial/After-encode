import Footer from "./components/common/Footer/Footer";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "../src/pages/home/Home";
import {Routes, Route} from "react-router-dom";


import 'slick-carousel/slick/slick.css';
import '../src/App.css'
import Bluehost from "./pages/bluehost/Bluehost";
import GoDaddy from "./pages/godady/GoDaddy";
import Hostgator from "./pages/hostgator/Hostgator";
import Hostinger from "./pages/hostinger/Hostinger";
import Ionos from "./pages/ionos/Ionos";
import Dreamhost from "./pages/dreamhost/Dreamhost";
import InMotion from "./pages/inmotion/InMotion";
import ReactGA from "react-ga";
import AboutUs from "./pages/aboutus/AboutUs"
import ContactUs from "./pages/contactus/ContactUs"
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import TermsofUse from "./pages/termsofuse/TermsofUse"


ReactGA.initialize('UA-159178461-4');

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bluehost" element={<Bluehost />} /> 
    <Route path="/godaddy" element={<GoDaddy />} />
    <Route path="/hostgator" element={<Hostgator />} />
    <Route path="/hostinger" element={<Hostinger /> } />
    <Route path="/ionos" element={<Ionos />} />
    <Route path="/dreamhost" element={<Dreamhost />} />
    <Route path="/inmotion" element={<InMotion />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    <Route path="/TermsofUse" element={<TermsofUse />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
