import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BCPNPCalculator from "../pages/BCPNPCalculator";
import FederalSkilled from "../pages/FederalSkilled";
import ExpressEntry from "../pages/ExpressEntry";
import PermanentResidency from "../pages/PermanentResidency";
import TransportOccupationTwo from "../pages/TranportOccupation-2";
import CategoryBased from "../pages/CategoryBased";
import NotFoundPage from "../pages/NotFoundPage";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import CLBILETSCalculator from "../pages/CLBILETSCalculator";
import PreviousDrawHistory from "../pages/PreviousDrawHistory";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/BCPNP-Calculator" element={<BCPNPCalculator />} />
      <Route path="/Federal-Skilled" element={<FederalSkilled />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/express-entry" element={<ExpressEntry />} />
      <Route path="/permanent-residency" element={<PermanentResidency/>} />
      <Route path="/transport-occupation" element={<TransportOccupationTwo />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails/>} />
      <Route path="/category-based" element={<CategoryBased/>} />
      <Route path="/clb-ilets-calculator" element={<CLBILETSCalculator/>} />
      <Route path="/previous-draw-history" element={<PreviousDrawHistory/>} />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;