import Home from "./app/Home";
import Navbar from "./app/Navbar";
import "./app/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./app/Create";
import BlogDetails from "./app/BlogDetails";
// import { GlobalStyles } from "./app/StyledComponents.style";
import { Content } from "./app/StyledComponents.style";

function App() {
  return (
    <Router>
      {/* <GlobalStyles> */}
      <div className="App">
        <Navbar />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            {/* :id means a dynamic value */}
            <Route exact path="/blogs/:id" component={BlogDetails} />
          </Switch>
        </Content>
      </div>
      {/* </GlobalStyles> */}
    </Router>
  );
}

export default App;
