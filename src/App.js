import Home from "./app/Home";
import Navbar from "./app/Navbar";
import "./app/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./app/Create";
import BlogDetails from "./app/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            {/* :id means a dynamic value */}
            <Route exact path="/blogs/:id" component={BlogDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
