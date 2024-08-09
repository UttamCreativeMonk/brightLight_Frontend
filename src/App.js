import { useEffect } from 'react';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import PermanentResidency from "./pages/PermanentResidency";
import ExpressEntry from './pages/ExpressEntry';
import Footer from './components/Footer';


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
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <PermanentResidency/> */}
      <ExpressEntry/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
