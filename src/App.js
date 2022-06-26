import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      {/* <Navbar title="Textutils2" aboutText="AboutTextUtils" /> */}
      <Navbar title="Textutils" />
      <div className="container my-3">
        {" "}
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
