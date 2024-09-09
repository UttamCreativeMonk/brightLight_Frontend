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
import Pgwp from "./pages/Pgwp";
import FamilyReunificationSponsorship from "./pages/FamilyReunificationSponsorship";
import Adoption from "./pages/Adoption";
import DependentChildren from "./pages/DependentChildren";
import HumanitarianCompassionate from "./pages/HumanitarianCompassionate";
import LonelyCanadian from "./pages/LonelyCanadian";
import ParentsGrandparents from "./pages/ParentsGrandparents";
import StudentVisa from "./pages/StudentVisa";
import Orphan from "./pages/Orphan";
import InsideCanada from "./pages/InsideCanada";
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
import FederalSkilledWorkerProgram from "./pages/FederalSkilledWorkerProgram";
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
import PathwaysForCaregiver from "./pages/PathwaysForCaregiver";
import PermanentResidencePathwaysCaregiversLP from "./pages/PermanentResidencePathwaysCaregiversLP";



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
      {/* <OpenWorkPermit/>  // add the links */}
      {/* <AgricultureStreamLmia/> */}
      {/* <GlobalStreamLmia/> */}
      {/* <LowWageLmia/>   */}
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

      {/* <Orphan /> */}
      {/* <ParentsGrandparents/> */}
      {/* <StudentVisa/>   */}
      {/* <InsideCanada/> */}
      {/* <ChangeCollegeProgram/> */}
      {/* <VisitorToStudent/> */}
      {/* <OutsideCananda/> */}
      {/* <NonSds/> */}
      {/* <Sds/> */}
      {/* <StudyPermitMinors/> */}
      {/* <ExtensionsDraft/> */}
      {/* <Flagpoling/> */}
      {/* <RestorationStatusDraft/> */}
      {/* <SpousalOpenWorkPermit/>*/}
      {/* <CommonLawPartnerPermanent/> */}
      {/* <CommonLawPartnerTemporary/> */}
      {/* <Cby/> */}
      {/* <SuperVisa/> */}
      {/* <TemporaryResidentPermitDraft/> */}
      {/* <VisitorVisa/> */}
      {/* <BusinessVisitorVisa/> */}
      {/* <DualIntentVisa/> */}
      {/* <CanadianExperienceClass/> */}
      {/* <FederalSkilledTradesProgram/> */}
      {/* <FederalSkilledWorkerProgram/> */}
      {/* <FrenchTargetedDraw/> */}
      {/* <HealthcareTargetedDraw/> */}
      {/* <StemTargetedDraw/> */}
      {/* <TradeOccupationTargetedDraw/> */}
      {/* <TransportOccupationTargetedDraw/> */}
      {/* <PilotPrograms/> */}
      {/* <AgriFoodPilotProgram/> */}
      {/* <Rnip/> */}
      {/* <Pnp/> */}
      {/* <BcPnp/> */}
      {/* <EntryLevelSemiSkilled/> */}
      {/* <HealthAuthoritiesStream/> */}
      {/* <InternationalGraduateProgram/> */}
      {/* <InternationalPostGraduateProgram/> */}
      {/* <PrioritiesProgram/>   */}
      {/* <SkilledWorkerStream/> */}

      {/* <InCaregiverProgramLP/> */}
      {/* <PathwaysForCaregiver/> */}
      {/* <PermanentResidencePathwaysCaregiversLP/> */}

{/* 
      <Loader />
      <AllRoutes /> */}
    </div>
  );
}

export default App;
