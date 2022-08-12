import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function Home(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Clear was clicked:" + clear);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}