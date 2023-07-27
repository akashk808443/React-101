import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./day9Routing/components/Navbar";
import { Home } from "./day9Routing/pages/Home";
import { Login } from "./day9Routing/pages/Login";
import { About } from "./day9Routing/pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Login/*" element={<Login />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
