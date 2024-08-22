import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BCPNPCalculator from "../pages/BCPNPCalculator";
import FederalSkilled from "../pages/FederalSkilled";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/BCPNP-Calculator" element={<BCPNPCalculator />} />
      <Route path="/Federal-Skilled" element={<FederalSkilled />} />
      <Route path="/contact-us" element={<Contact />} />
     

      <Route path="*" element />
    </Routes>
  );
};

export default AllRoutes;
