import { useEffect } from "react";
import "./App.css";

import AllRoutes from "./routes/AllRoutes";
import Loader from "./components/Loader";

function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);
  
  return (
    <div className="App">
      <Loader />

      <AllRoutes />
    </div>
  );
}

export default App;
