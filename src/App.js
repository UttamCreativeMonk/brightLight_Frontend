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
import ChangeCollegeProgram from "./pages/ChangeCollegeProgram";
import VisitorToStudent from "./pages/VisitorToStudent";
import OutsideCananda from "./pages/OutsideCananda";
import NonSds from "./pages/NonSds";
import Sds from "./pages/Sds";
import StudyPermitMinors from "./pages/StudyPermitMinors";
import ExtensionsDraft from "./pages/ExtensionsDraft";
import Flagpoling from "./pages/Flagpoling";
import RestorationStatusDraft from "./pages/RestorationStatusDraft";
import SpousalOpenWorkPermit from "./pages/SpousalOpenWorkPermit";
import CommonLawPartnerPermanent from "./pages/CommonLawPartnerPermanent";
import CommonLawPartnerTemporary from "./pages/CommonLawPartnerTemporary";
import Cby from "./pages/Cby";
import SuperVisa from "./pages/SuperVisa";
import TemporaryResidentPermitDraft from "./pages/TemporaryResidentPermitDraft";
import VisitorVisa from "./pages/VisitorVisa";
import BusinessVisitorVisa from "./pages/BusinessVisitorVisa";
import DualIntentVisa from "./pages/DualIntentVisa";
import CanadianExperienceClass from "./pages/CanadianExperienceClass";
import FederalSkilledTradesProgram from "./pages/FederalSkilledTradesProgram";
import FederalSkilledWorkerProgram from "./pages/FederalSkilledWorkerProgram"; // Done
import FrenchTargetedDraw from "./pages/FrenchTargetedDraw";
import HealthcareTargetedDraw from "./pages/HealthcareTargetedDraw";
import StemTargetedDraw from "./pages/StemTargetedDraw";
import TradeOccupationTargetedDraw from "./pages/TradeOccupationTargetedDraw";
import TransportOccupationTargetedDraw from "./pages/TransportOccupationTargetedDraw";
import PilotPrograms from "./pages/PilotPrograms";
import AgriFoodPilotProgram from "./pages/AgriFoodPilotProgram";
import Rnip from "./pages/Rnip";
import Pnp from "./pages/Pnp";
import BcPnp from "./pages/BcPnp";
import EntryLevelSemiSkilled from "./pages/EntryLevelSemiSkilled";
import HealthAuthoritiesStream from "./pages/HealthAuthoritiesStream";
import InternationalGraduateProgram from "./pages/InternationalGraduateProgram";
import InternationalPostGraduateProgram from "./pages/InternationalPostGraduateProgram";
import PrioritiesProgram from "./pages/PrioritiesProgram";
import SkilledWorkerStream from "./pages/SkilledWorkerStream";
import InCaregiverProgramLP from "./pages/InCaregiverProgramLP";
import WorkPermit from "./pages/WorkPermit";
import PathwaysForCaregiver from "./pages/PathwaysForCaregiver";
import PermanentResidencePathwaysCaregiversLP from "./pages/PermanentResidencePathwaysCaregiversLP";
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
      <ChangeCollegeProgram/>
      {/* <ToastContainer />

      <Loader />
      <HelmetProvider>
        <AllRoutes />
      </HelmetProvider> */}
    </div>
  );
}

export default App;
