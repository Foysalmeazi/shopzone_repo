import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import Shop from "./pages/Shop/Shop.component";
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
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
