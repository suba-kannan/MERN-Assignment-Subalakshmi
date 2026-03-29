import Button from "./components/Button";
import TextOverride from "./components/TextOverride";
import SubmitButton from "./components/SubmitButton";
import InputLogger from "./components/InputLogger";
import Dashboard from "./components/Dashboard";
import withAlert from "./hoc/withAlert";
import withTitle from "./hoc/withTitle";
import withDisable from "./hoc/withDisable";
import withLogger from "./hoc/withLogger";
import withAuth from "./hoc/withAuth";

const AlertBtn = withAlert(Button);
const TitleText = withTitle(TextOverride);
const DisabledBtn = withDisable(SubmitButton);
const LoggedInput = withLogger(InputLogger);
const ProtectedDashboard = withAuth(Dashboard);

const App=()=> {
  return (
    <>
      <AlertBtn />
      <TitleText />
      <DisabledBtn />
      <LoggedInput />
      <ProtectedDashboard />
    </>
  );
}

export default App;