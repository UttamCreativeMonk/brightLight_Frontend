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
import FederalSkilled from "./pages/FederalSkilled";

function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);
  return (
    <div className="App">
     {/* <PrivacyPolicy/> */}
      {/* <TermsAndConditions/> */}

   

      {/* <Navbar /> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <PermanentResidency/> */}
 
      {/* <Testimonials/> */}
      <FederalSkilled/>
      {/* <BCPNPCalculator/> */}
      {/* <ExpressEntry/> */}
      {/* <TransportOccupationTwo/> */}
      {/* <HomePage/> */}
      {/* <Footer/> */}
    
      {/* <CategoryBased/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;