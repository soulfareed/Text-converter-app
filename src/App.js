import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3874cd";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutil - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutil - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="React App"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={<Home showAlert={showAlert} />}
          mode={mode}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


class="fa fa-google-plus"></i></a><a class="linkedin" href="#"><i
className=""
</div>