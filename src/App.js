import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import Hatspage from "./pages/HatsPage/Hatspage.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/hats" component={Hatspage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
