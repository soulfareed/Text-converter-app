import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar title="React App" aboutText="About" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
