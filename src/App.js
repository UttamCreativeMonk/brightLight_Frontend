import { useEffect } from "react";
import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PermanentResidency from "./pages/PermanentResidency";
import ExpressEntry from "./pages/ExpressEntry";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryBased from "./pages/CategoryBased";
import HomePage from "./pages/HomePage";
import TransportOccupationTwo from "../src/pages/TranportOccupation-2";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BCPNPCalculator from "./pages/BCPNPCalculator";
import Testimonials from "./sections/Testimonials";

function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <PermanentResidency/> */}
      {/* <PrivacyPolicy/> */}
      {/* <TermsAndConditions/> */}
      {/* <Testimonials/> */}
      <BCPNPCalculator/>
      {/* <ExpressEntry/> */}
      {/* <TransportOccupationTwo/> */}
      {/* <HomePage/> */}
      {/* <Footer/> */}
      {/* <Footer /> */}
      {/* <CategoryBased/> */}
    </div>
  );
}

export default App;