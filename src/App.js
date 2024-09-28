import { useEffect } from "react";
import "./App.css";

import { HelmetProvider } from "react-helmet-async";

import AllRoutes from "./routes/AllRoutes";
import Loader from "./components/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrRenewal from "./pages/PrRenewal"; // Done
import Citizenship from "./pages/Citizenship"; // Done
import Reconsideration from "./pages/Reconsideration"; // Done
import AdditionalDocument from "./pages/AdditionalDocument";// Done
import ReplyToPflPage from "./pages/ReplyToPflPage";// Done
import LmiaReviewed from "./pages/LmiaReviewed"; // Done
import OpenWorkPermit from "./pages/OpenWorkPermit"; // Done
import AgricultureStreamLmia from "./pages/AgricultureStreamLmia"; // Done
import GlobalStreamLmia from "./pages/GlobalStreamLmia";// Done
import LowWageLmia from "./pages/LowWageLmia";//Done
import BridgingOpenWorkPermitLP from "./pages/BridgingOpenWorkPermitLP"; //Done
import FrancophoneMobilityProgram from "./pages/FrancophoneMobilityProgram"; //Done
import OpenWorkVulnerableLP from "./pages/OpenWorkVulnerableLP"; //Done
import OpenWorkCanadaLP from "./pages/OpenWorkCanadaLP"; // Done
import Pgwp from "./pages/Pgwp"; //Done
import FamilyReunificationSponsorship from "./pages/FamilyReunificationSponsorship";  // Done
import Adoption from "./pages/Adoption"; //Done
import DependentChildren from "./pages/DependentChildren"; //Done
import HumanitarianCompassionate from "./pages/HumanitarianCompassionate"; //Done
import LonelyCanadian from "./pages/LonelyCanadian"; // Done
import ParentsGrandparents from "./pages/ParentsGrandparents"; //Done
import StudentVisa from "./pages/StudentVisa"; //Done
import Orphan from "./pages/Orphan"; //Done
import InsideCanada from "./pages/InsideCanada"; //Done
import ChangeCollegeProgram from "./pages/ChangeCollegeProgram"; //Done
import VisitorToStudent from "./pages/VisitorToStudent"; //Done
import OutsideCananda from "./pages/OutsideCananda";//Done
import NonSds from "./pages/NonSds"; //Done
import Sds from "./pages/Sds";  //Done
import StudyPermitMinors from "./pages/StudyPermitMinors"; //Done
import ExtensionsDraft from "./pages/ExtensionsDraft"; //Done
import Flagpoling from "./pages/Flagpoling";  //Done
import RestorationStatusDraft from "./pages/RestorationStatusDraft"; //Done
import SpousalOpenWorkPermit from "./pages/SpousalOpenWorkPermit"; //Done
import CommonLawPartnerPermanent from "./pages/CommonLawPartnerPermanent"; //Done
import CommonLawPartnerTemporary from "./pages/CommonLawPartnerTemporary";
import Cby from "./pages/Cby"; //Done
import SuperVisa from "./pages/SuperVisa"; //Done
import TemporaryResidentPermitDraft from "./pages/TemporaryResidentPermitDraft"; //Done
import VisitorVisa from "./pages/VisitorVisa"; //Done
import BusinessVisitorVisa from "./pages/BusinessVisitorVisa";//Done
import DualIntentVisa from "./pages/DualIntentVisa"; //Done
import CanadianExperienceClass from "./pages/CanadianExperienceClass"; //Done
import FederalSkilledTradesProgram from "./pages/FederalSkilledTradesProgram";//Done
import FederalSkilledWorkerProgram from "./pages/FederalSkilledWorkerProgram"; // Done
import FrenchTargetedDraw from "./pages/FrenchTargetedDraw"; //Done
import HealthcareTargetedDraw from "./pages/HealthcareTargetedDraw"; //Done
import StemTargetedDraw from "./pages/StemTargetedDraw"; //Done
import TradeOccupationTargetedDraw from "./pages/TradeOccupationTargetedDraw"; //Done
import TransportOccupationTargetedDraw from "./pages/TransportOccupationTargetedDraw"; //Done
import PilotPrograms from "./pages/PilotPrograms"; //Done
import AgriFoodPilotProgram from "./pages/AgriFoodPilotProgram"; //Done
import Rnip from "./pages/Rnip"; //Done
import Pnp from "./pages/Pnp"; //Done
import BcPnp from "./pages/BcPnp"; //Done
import EntryLevelSemiSkilled from "./pages/EntryLevelSemiSkilled";//Done
import HealthAuthoritiesStream from "./pages/HealthAuthoritiesStream"; //Done
import InternationalGraduateProgram from "./pages/InternationalGraduateProgram"; //Done
import InternationalPostGraduateProgram from "./pages/InternationalPostGraduateProgram"; //Done
import PrioritiesProgram from "./pages/PrioritiesProgram"; //Done
import SkilledWorkerStream from "./pages/SkilledWorkerStream"; //Done
import InCaregiverProgramLP from "./pages/InCaregiverProgramLP";
import WorkPermit from "./pages/WorkPermit"; //Done
import PathwaysForCaregiver from "./pages/PathwaysForCaregiver"; //Done
import PermanentResidencePathwaysCaregiversLP from "./pages/PermanentResidencePathwaysCaregiversLP"; //Done
import NewsDetails from "./pages/NewsDetails";
import News from "./pages/News";
import Odometer from "./components/Odometer";


function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="App">
  
      <ToastContainer />

      {/* <Loader /> */}
      <HelmetProvider>
        {/* <AllRoutes /> */}
        <PathwaysForCaregiver/>
      </HelmetProvider>
    </div>
  );
}

export default App;
