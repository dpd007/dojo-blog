import Home from "./app/Home";
import Navbar from "./app/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./app/Create";
import BlogDetails from "./app/BlogDetails";
// import { GlobalStyles } from "./app/StyledComponents.style";
import { StyledContent } from "./app/StyledComponents.style";
import NotFound from "./app/NotFound";

function App() {
  return (
    <Router>
      {/* <GlobalStyles> */}
      <div className="App">
        <Navbar />
        <StyledContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            {/* :id means a dynamic value */}
            <Route exact path="/blogs/:id" component={BlogDetails} />
            {/* * means catch all routes */}
            <Route path="*" component={NotFound} />
          </Switch>
        </StyledContent>
      </div>
      {/* </GlobalStyles> */}
    </Router>
  );
}

export default App;
