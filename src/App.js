import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import NavBar from "./components/NavBar/NavBar";
import NuevaTarea from "./views/NuevaTarea/NuevaTarea";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tareas" element={<Home />} />
        <Route path="/form" element={<NuevaTarea />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
