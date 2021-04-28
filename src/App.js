import { Redirect, Route, Switch } from "react-router";
import Header from "./Components/Header/Header";
import ErrorsEventComp from "./Components/MiniComponents/ErrorsEvent/ErrorsEvent";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Header />
      <ErrorsEventComp/>
      <div className={"container"}>
        <Switch>
          <Route exact component={HomePage} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
