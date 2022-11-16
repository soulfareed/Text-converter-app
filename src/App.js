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
        toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />}
          mode={mode}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




<li class="nav-item nav-items"><a class="nav-link active" href="#" target="_blank">Gallery</a></li>
<li class="nav-item nav-items"><a class="nav-link active" href="#" target="_blank">Refund Policy</a>
</li>
<li class="nav-item nav-items"><a class="nav-link active" href="#" target="_blank">Contact</a></li>
</ul>
</div>
</div>
</nav><!-- End: Navbar Right Links -->
<!-- Start: Simple Slider -->
<div class="simple-slider">
<!-- Start: Slideshow -->
<div class="swiper-container">
<!-- Start: Slide Wrapper -->
<div class="swiper-wrapper">
<!-- Start: Slide -->
<div class="swiper-slide"
style="background: url(&quot;/assets/img/WhatsApp%20Image%202022-10-31%20at%2011.35.16%20PM.jpeg?h=93fcd026e584998fcdd28dde9f892bb7&quot;) center / cover no-repeat;width: 100%;">
</div><!-- End: Slide -->
<!-- Start: Slide -->
<div class="swiper-slide"
style="background: url(&quot;/assets/img/WhatsApp%20Image%202022-10-31%20at%2011.27.43%20PM(1).jpeg?h=9b962ab85e047da5ec955662cdb0ec25&quot;) center center / cover no-repeat;">
</div><!-- End: Slide -->
<!-- Start: Slide -->
<div class="swiper-slide"
style="background: url(&quot;/assets/img/WhatsApp%20Image%202022-10-31%20at%2011.27.45%20PM(1).jpeg?h=ffc4508bc18423bbd789415cea338797&quot;) center no-repeat;/*height: 100%;*/width: 100%;">
</div><!-- End: Slide -->
</div><!-- End: Slide Wrapper -->
<!-- Start: Pagination -->
<div class="swiper-pagination"></div><!-- End: Pagination -->
<!-- Start: Previous -->
<div class="swiper-button-prev"></div><!-- End: Previous -->
<!-- Start: Next -->
<div class="swiper-button-next"></div><!-- End: Next -->
</div><!-- End: Slideshow -->
</div><!-- End: Simple Slider -->
<!-- Start: Bold BS4 Footer Big Logo -->
<footer id="myFooter">
<div class="container-fluid">
<div class="row text-center">
<div class="col-12 col-sm-6 col-md-2">
<h5>Get started</h5>
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Downloads<br></a></li>
    <li><a href="#">Sign Up</a></li>
    <li><a href="#">Othe