import { useEffect } from "react";
import "./App.css";

import AllRoutes from "./routes/AllRoutes";
import Loader from "./components/Loader";
import PrRenewal from "./pages/PrRenewal";
import Citizenship from "./pages/Citizenship";
import Reconsideration from "./pages/Reconsideration";
import AdditionalDocument from "./pages/AdditionalDocument";
import ReplyToPflPage from "./pages/ReplyToPflPage";
import LmiaReviewed from "./pages/LmiaReviewed";
import OpenWorkPermit from "./pages/OpenWorkPermit";
import AgricultureStreamLmia from "./pages/AgricultureStreamLmia";
import GlobalStreamLmia from "./pages/GlobalStreamLmia";
import LowWageLmia from "./pages/LowWageLmia";
import BridgingOpenWorkPermitLP from "./pages/BridgingOpenWorkPermitLP";
import FrancophoneMobilityProgram from "./pages/FrancophoneMobilityProgram";
import OpenWorkVulnerableLP from "./pages/OpenWorkVulnerableLP";
import OpenWorkCanadaLP from "./pages/OpenWorkCanadaLP";
import Pgwp from  "./pages/Pgwp";
import FamilyReunificationSponsorship from "./pages/FamilyReunificationSponsorship";
import Adoption from './pages/Adoption';
import DependentChildren from "./pages/DependentChildren";
import HumanitarianCompassionate from "./pages/HumanitarianCompassionate";
import LonelyCanadian from "./pages/LonelyCanadian";

function App() {
  // useEffect(()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // },[]);

  return (
    <div className="App">
     
      {/* <PrRenewal/> */}
      {/* <Citizenship/> */}
      {/* <Reconsideration/> */}
      {/* <AdditionalDocument/> */}
      {/* <ReplyToPflPage/> */}
      {/* <LmiaReviewed /> */}
      {/* <OpenWorkPermit/> */}
      {/* <AgricultureStreamLmia/> */}
      {/* <GlobalStreamLmia/> */}
      {/* <LowWageLmia/>  */}
      {/* <BridgingOpenWorkPermitLP /> */}
      {/* <FrancophoneMobilityProgram/> */}
      {/* <OpenWorkVulnerableLP/> */}
      {/* <OpenWorkCanadaLP/> */}
      {/* <Pgwp/> */}
      {/* <FamilyReunificationSponsorship/> */}
      {/* <Adoption/> */}
      {/* <DependentChildren/> */}
      {/* <HumanitarianCompassionate/> */}
      {/* <LonelyCanadian/> */}


 {/* <Loader /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
