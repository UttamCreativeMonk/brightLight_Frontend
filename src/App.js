import { useEffect } from 'react';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import PermanentResidency from "./pages/PermanentResidency";
import ExpressEntry from './pages/ExpressEntry';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Footer1 from './components/Footer1';
import CategoryBased from './pages/CategoryBased';


function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Navbar1/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <PermanentResidency/> */}
      {/* <ExpressEntry/> */}
      {/* <Footer/> */}
      {/* <Footer1/> */}
      <CategoryBased/>
     
    </div>
  );
}

export default App;
