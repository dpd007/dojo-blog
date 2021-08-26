import Home from "./app/Home";
import Navbar from "./app/Navbar";
import "./app/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./app/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
