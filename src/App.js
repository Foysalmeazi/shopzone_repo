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
import SigninAndSignup from './pages/SigninAndSignup/SigninAndSignup.component'
import Header from './components/Header/Header.component'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/signinup" component={SigninAndSignup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
