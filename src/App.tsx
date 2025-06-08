import { BrowserRouter as  Router, Routes ,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {

  
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
