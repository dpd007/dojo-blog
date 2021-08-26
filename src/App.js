import Home from "./app/Home";
import Navbar from "./app/Navbar";
import "./app/css/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
