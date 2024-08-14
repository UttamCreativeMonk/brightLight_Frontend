import { useEffect } from "react";
import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PermanentResidency from "./pages/PermanentResidency";
import ExpressEntry from "./pages/ExpressEntry";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryBased from "./pages/CategoryBased";

function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);
  return (
    <div className="App">
      <Navbar />
      {/* <Contact/> */}
      <About/>
      {/* <PermanentResidency/> */}
      {/* <ExpressEntry/> */}
      {/* <Footer/> */}
      <Footer />
      {/* <CategoryBased/> */}
    </div>
  );
}

export default App;